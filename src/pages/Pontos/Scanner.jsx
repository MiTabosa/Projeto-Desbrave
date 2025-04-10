import "./Pontos.css";
import { Html5QrcodeScanner, Html5QrcodeScanType } from "html5-qrcode";
import ScannerComponent from "../../components/Scanner/ScannerComponent";
import elementDesign from "../../assets/element-design.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { BsCheck2Circle } from "react-icons/bs";
import { api } from "../../service/api";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

function Scanner() {
  const navigate = useNavigate();
  const [scanResult, setScanResult] = useState(null);
  const [pontos, setPontos] = useState(null);
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
        console.error(
          "Permissão da câmera negada ou erro ao acessar a câmera:",
          error
        );
        toast.error("Permissão da câmera é necessária para escanear QR codes.");
        navigate("/PaginaInicial"); // Redireciona para outra página se a permissão for negada
      });
  };

  const fetchQRCodeData = async (codigo) => {
    try {
      const token = localStorage.getItem("token");
      const decodedToken = jwtDecode(token);
      const usuarioId = decodedToken?.sub;
      console.log("Token decodificado:", decodedToken);
  
      const codigoSemAspas = codigo.replace(/^"|"$/g, "");
  
      const response = await api.get(`/qrcodes?codigo=${codigoSemAspas}`);
      const corretoQrcode = response.data.find((qr) => qr.codigo === codigoSemAspas);
  
      if (!corretoQrcode) {
        throw new Error("Qr code não encontrado");
      }
  
      const id = corretoQrcode.id;
  
      const associacoes = await api.get(`/usuario-qrcode/usuario/${usuarioId}`);
      const qrcodesEscaneados = associacoes.data.map((assoc) => assoc.qrCode.id);
  
      if (qrcodesEscaneados.includes(parseInt(id))) {
        throw new Error("QR Code já escaneado");
      }
  
      const res = await api.post("/usuario-qrcode", {
        usuarioId: usuarioId,
        qrCodeId: id,
        dataEscaneamento: new Date().toISOString(),
      });
  
      const pontosGanhos = parseInt(res.data.pontosGanhos || 50);
      setPontos(pontosGanhos);
  
      setScanResult(corretoQrcode);
  
    } catch (error) {
      console.error("Erro inesperado:", error);
        toast.error("Você já escaneou esse QR Code!");
      navigate("/InvalidScanner");
    }
  };

  useEffect(() => {
    const pontosSalvos = localStorage.getItem("pontuacaoTotal");
    if (pontosSalvos) {
      setPontos(parseInt(pontosSalvos));
    }
  }, []);

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
        scannerRef.current
          .clear()
          .catch((e) => console.warn("Erro ao limpar scanner:", e));
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
<<<<<<< HEAD
          fetchQRCodeData(result);
=======
          fetchQRCodeData(result); 
>>>>>>> 7e60cf9eda742726cfdc926acb49d76df54705ef

          scanner
            .clear()
            .catch((e) => console.warn("Erro ao limpar scanner:", e));
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
        scannerRef.current
          .clear()
          .catch((e) => console.warn("Erro ao limpar scanner:", e));
        scannerRef.current = null;
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [scanResult, cameraPermissionGranted]);
  return (
    <div>
      <ScannerComponent />
      {scanResult ? (
        <section className="vetor-section">
          <div className="inicial-vetor">
            <div className="titulo-container">
              <BsCheck2Circle className="vetor-img" />
              <div className="texto-container">
                <h2>QR CODE ESCANEADO COM SUCESSO!</h2>
                <p>
                  {pontos !== null && (
                    <span>
                      <br />
                      Agora você tem <strong>{pontos}</strong> pontos!
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="botao-container">
            <Button
              text="Continuar Explorando"
              color="#0367A5"
              size="small"
              onClick={() => {
                if (scannerRef.current) {
                  scannerRef.current
                    .clear()
                    .catch((e) => console.warn("Erro ao limpar scanner:", e));
                  scannerRef.current = null;
                }
                setScanResult(null);
                navigate("/Mapa");
              }}
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