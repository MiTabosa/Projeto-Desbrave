import "./Pontos.css";
import { Html5QrcodeScanner, Html5QrcodeScanType } from "html5-qrcode";
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
  const hasInitialized = useRef(false);
  const readerId = "reader";

  useEffect(() => {
    if (hasInitialized.current || scanResult) return;
    hasInitialized.current = true;
  
    console.log("Inicializando scanner...");
  
    setTimeout(() => {
      const readerElement = document.getElementById(readerId);
      if (!readerElement) {
        console.error("Elemento #reader não encontrado!");
        return;
      }
  
      scannerRef.current = new Html5QrcodeScanner(readerId, {
        qrbox: { width: 250, height: 250 },
        fps: 5,
        disableFlip: true,
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
      });
  
      scannerRef.current.render(
        (result) => {
          console.log("Código escaneado:", result);
  
          const valoresValidos = ["Marco Zero", "Paço do frevo", "Rua bom Jesus!!"]; // Lista de códigos aceitos
  
          if (valoresValidos.includes(result)) {
            setScanResult(result);
            console.log("Código válido! Redirecionando...");
          } else {
            console.warn("Código inválido! Redirecionando...");
            navigate("/InvalidScanner");
          }
  
          if (scannerRef.current) {
            scannerRef.current.clear();
            scannerRef.current = null;
          }
        },
        (error) => {
          console.warn("ERRO AO ESCANEAR:", error);
        }
      );
    }, 500);
  
    return () => {
      if (scannerRef.current) {
        console.log("Limpando scanner...");
        try {
          scannerRef.current.clear();
          scannerRef.current = null;
        } catch (err) {
          console.warn("Erro ao limpar scanner:", err);
        }
      }
    };
  }, [scanResult]);

 
 
  return (
    <div>
      <ScannerComponent />
      {scanResult ? (
        <section className="vector-section">
      <div className="initial-vector">
     <div className="title-container">
    < BsCheck2Circle className="vector-img"/>
    <div className="text-container"> 
      <h2>QR CODE ESCANEADO COM SUCESSO!</h2>
      <p>Você ganhou +50 pontos! <a href={scanResult}></a></p>
    </div>
  </div>
</div>
<div className="button-container">
  <Button text="Continuar Explorando" color="#0367A5" size="small" onClick={() => navigate("/Mapa")} />
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
