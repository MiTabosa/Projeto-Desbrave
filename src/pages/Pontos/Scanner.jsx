import "./Pontos.css";
import { Html5QrcodeScanner, Html5QrcodeScanType } from "html5-qrcode";
import { useEffect, useRef, useState } from "react";
import ScannerComponent from "./ScannerComponent";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { BsCheck2Circle } from "react-icons/bs";
import elementDesign from "../../assets/element-design.png";
import { api } from "../../service/api"

function Scanner() {
  const navigate = useNavigate();
  const [scanResult, setScanResult] = useState(null);
  const [cameraPermissionGranted, setCameraPermissionGranted] = useState(false);
  const scannerRef = useRef(null);
  const readerId = "reader";

  const requestCameraPermission = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => {
        setCameraPermissionGranted(true);
      })
      .catch((error) => {
        console.error("Permissão da câmera negada ou erro ao acessar a câmera:", error);
        alert("Permissão da câmera é necessária para escanear QR codes.");
        navigate("/PaginaInicial"); // Redireciona para outra página se a permissão for negada
      });
  };

  useEffect(() => {
    if (!cameraPermissionGranted) {
      requestCameraPermission();
      return;
    }

    if (scanResult) return;

    let scanner;

    const startScanner = () => {
      const readerElement = document.getElementById(readerId);
      if (!readerElement) return;

      readerElement.classList.remove("ready");
      readerElement.style.width = window.innerWidth + "px";
      readerElement.style.height = window.innerHeight + "px";

      // Limpa scanner anterior, se existir
      if (scannerRef.current) {
        scannerRef.current.clear().catch((e) => console.warn("Erro ao limpar scanner:", e));
        scannerRef.current = null;
      }

      scanner = new Html5QrcodeScanner(readerId, {
        qrbox: { width: 250, height: 250 },
        fps: 5,
        disableFlip: true,
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
      });

      scannerRef.current = scanner;

      scanner.render(
        (result) => {
          console.log("Código escaneado:", result);
          const valoresValidos = ["Marco Zero", "Paço do frevo", "Rua bom Jesus!!"];

          if (valoresValidos.includes(result)) {
            setScanResult(result);
          } else {
            navigate("/InvalidScanner");
          }

          scanner.clear().catch((e) => console.warn("Erro ao limpar scanner:", e));
          scannerRef.current = null;
        },
        (error) => {
          if (error !== "NotFoundException") {
            console.warn("Erro ao escanear:", error);
          }
        }
      );

 
      setTimeout(() => {
        const reader = document.getElementById(readerId);
        if (reader) {
          reader.classList.add("ready");
        }
      }, 300);
    };

  
    startScanner();


    let lastWidth = window.innerWidth;
    let resizeTimeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newWidth = window.innerWidth;

        if (Math.abs(newWidth - lastWidth) > 50) {
          lastWidth = newWidth;
          console.log("Redimensionando scanner...");
          startScanner();
        } else {
          console.log("Redimensionamento ignorado");
        }
      }, 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch((e) => console.warn("Erro ao limpar scanner:", e));
        scannerRef.current = null;
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [scanResult, cameraPermissionGranted]);

  return (
    <div>
      <ScannerComponent />
      {scanResult ? (
        <section className="vector-section">
          <div className="initial-vector">
            <div className="title-container">
              <BsCheck2Circle className="vector-img" />
              <div className="text-container">
                <h2>QR CODE ESCANEADO COM SUCESSO!</h2>
                <p>Você ganhou +50 pontos! <a href={scanResult}></a></p>
              </div>
            </div>
          </div>
          <div className="button-container">
            <Button
              text="Continuar Explorando"
              color="#0367A5"
              size="small"
              onClick={() => navigate("/Mapa")}
            />
          </div>
          <img className="pontos-image" src={elementDesign} alt="imagem de elemento" />
        </section>
      ) : (
        <div id={readerId}></div>
      )}
    </div>
  );
}

export default Scanner;