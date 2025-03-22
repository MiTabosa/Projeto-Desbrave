import "./Pontos.css";
import {
  Html5Qrcode,
  Html5QrcodeScanner,
  Html5QrcodeScanType,
  Html5QrcodeSupportedFormats,
} from "html5-qrcode";
import { useEffect, useRef, useState } from "react";
import ScannerComponent from "./ScannerComponent";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { BsCheck2Circle } from "react-icons/bs";
import elementDesign from "../../assets/element-design.png";

function Scanner() {
  const navigate = useNavigate();

  const [scanResult, setScanResult] = useState(null);
  const scannerRef = useRef(null);
  const html5QrCodeRef = useRef(null);
  const hasInitialized = useRef(false);
  const readerId = "reader";

  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);

  useEffect(() => {
    if (hasInitialized.current || scanResult) return;
    hasInitialized.current = true;

    console.log("Inicializando scanner...");

    function ajustarReader() {
      const readerElement = document.getElementById(readerId);
      if (readerElement) {
        readerElement.style.width = window.innerWidth + "px";
        readerElement.style.height = window.innerHeight + "px";
      }
    }

    ajustarReader();
    window.addEventListener("resize", ajustarReader);

    const onScanSuccess = (result) => {
      console.log("Código escaneado:", result);
      const valoresValidos = ["Marco Zero", "Paço do frevo", "Rua bom Jesus!!"];
      if (valoresValidos.includes(result)) {
        setScanResult(result);
        console.log("Código válido! Redirecionando...");
      } else {
        console.warn("Código inválido! Redirecionando...");
        navigate("/InvalidScanner");
      }

      const finalizarScanner = () => {
        if (scannerRef.current) {
          scannerRef.current.clear();
          scannerRef.current = null;
        }
    
        if (html5QrCodeRef.current) {
          html5QrCodeRef.current
            .stop()
            .then(() => html5QrCodeRef.current.clear())
            .then(() => {
              if (valoresValidos.includes(result)) {
                setScanResult(result); // mostra tela de sucesso
              } else {
                navigate("/InvalidScanner");
              }
            })
            .catch((e) => {
              console.warn("Erro ao limpar scanner:", e);
              if (valoresValidos.includes(result)) {
                setScanResult(result);
              } else {
                navigate("/InvalidScanner");
              }
            });
        } else {
          // fallback caso o scanner não exista
          if (valoresValidos.includes(result)) {
            setScanResult(result);
          } else {
            navigate("/InvalidScanner");
          }
        }
      };
    
      finalizarScanner();

    };
    const onScanError = (error) => {
      console.warn("ERRO AO ESCANEAR:", error);
    };

   if (isMobile) {
  html5QrCodeRef.current = new Html5Qrcode(readerId);

  Html5Qrcode.getCameras().then((devices) => {
    if (!devices || devices.length === 0) {
      console.error("Nenhuma câmera encontrada.");
      return;
    }

    const backCam = devices.find((d) =>
      d.label.toLowerCase().includes("back")
    );
    const cameraId = backCam ? backCam.id : devices[0].id;

    setTimeout(() => {
      const readerEl = document.getElementById(readerId);
      if (readerEl) {
        readerEl.innerHTML = ""; // evita canvas duplicado
      }

      html5QrCodeRef.current
        .clear()
        .catch(() => {})
        .finally(() => {
          html5QrCodeRef.current
            .start(
              cameraId,
              {
                fps: 10,
                qrbox: function (viewfinderWidth, viewfinderHeight) {
                  const minEdgePercentage = 0.6;
                  const minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
                  const qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
                  return { width: qrboxSize, height: qrboxSize };
                },
                disableFlip: true,
                formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
              },
              (decodedText) => {
                console.log("✅ Código detectado (mobile):", decodedText);
                const valoresValidos = ["marco zero", "paço do frevo", "rua bom jesus!!"];
                const formatado = decodedText.trim().toLowerCase();

                html5QrCodeRef.current
                  .stop()
                  .then(() => html5QrCodeRef.current.clear())
                  .finally(() => {
                    if (valoresValidos.includes(formatado)) {
                      setScanResult(decodedText);
                    } else {
                      navigate("/InvalidScanner");
                    }
                  });
              },
              (error) => {
                console.warn("Erro ao escanear no mobile:", error);
              }
            )
            .catch((err) => console.error("Erro ao iniciar scanner:", err));
        });
    }, 500);
  });
}
    return () => {
      if (scannerRef.current) {
        try {
          scannerRef.current.clear();
          scannerRef.current = null;
        } catch (err) {
          console.warn("Erro ao limpar scanner:", err);
        }
      }
      if (html5QrCodeRef.current) {
        html5QrCodeRef.current
          .stop()
          .then(() => html5QrCodeRef.current.clear())
          .catch((e) => console.warn("Erro ao limpar scanner:", e));
      }
      window.removeEventListener("resize", ajustarReader);
    };
  }, [scanResult]);

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
                <p>
                  Você ganhou +50 pontos! <a href={scanResult}></a>
                </p>
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
          <img
            className="pontos-image"
            src={elementDesign}
            alt="imagem de elemento"
          />
        </section>
      ) : (
        <div id={readerId}></div>
      )}
    </div>
  );
}

export default Scanner;