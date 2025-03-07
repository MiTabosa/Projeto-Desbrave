import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useRef, useState } from "react";
import ScannerComponent from "./ScannerComponent";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import vector from "../../assets/Vector.png";
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

    console.log("inicializando..");

    setTimeout(() => {
      //  reader já existe antes de tentar iniciar o scanner?
      const readerElement = document.getElementById(readerId);
      if (!readerElement) {
        console.error("Elemento #reader não encontrado!");
        return;
      }
      scannerRef.current = new Html5QrcodeScanner(readerId, {
        qrbox: { width: 250, height: 250 },
        fps: 5,
      });

      scannerRef.current.render(
        (result) => {
          console.log("codigo escaneado:", result);
          setScanResult(result);
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
        console.log("limpando scanner...");
        try {
          scannerRef.current.clear();
          scannerRef.current = null;
        } catch (err) {
          console.warn("erro ao limpar scanner:", err);
        }
      }
    };
  }, [scanResult]);

  const restartScanner = () => {
    setScanResult(null);
    hasInitialized.current = false;
  };

  return (
    <div>
      <ScannerComponent />
      {scanResult ? (
        <section className="vector-section">
          <div className="initial-vector">
            <div className="title-container">
              <img  className="vector-img" src={vector} alt="imagem de vetor do elemento"/>
              <h2>QR CODE ESCANEADO COM SUCESSO!</h2>
              </div>
            <p> {" "} Você ganhou +50 pontos!<a href={scanResult}>{scanResult}</a>{" "}</p>
              </div>
            <div className="button-container">
              <Button text="Ver detalhes do Local" color="#0367A5"  size="small"  onClick={() => navigate("/home")}
              />
              <Button  text="Continuar Explorando" color="#0367A5"  size="small"  onClick={() => navigate("/scanner")} />
            </div>
            <img className="pontos-image" src={elementDesign} alt="imagem de elemento"
            />
        </section>
      ) : (
        <div id={readerId}></div>
      )}
    </div>
  );
}

export default Scanner;
