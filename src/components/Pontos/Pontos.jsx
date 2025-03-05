import Navbar from "../Navbar/Navbar";
import "./Pontos.css";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useRef, useState } from "react";
import elementDesign from "../../assets/element-design.png";


function Pontos() {
  
    const [scanResult, setScanResult] = useState(null);
    const scannerRef = useRef(null);
    const hasInitialized = useRef(false);
    const readerId = "reader";
  
    useEffect(() => {
      if (hasInitialized.current || scanResult) return;
      hasInitialized.current = true;
  
      console.log("inicializando..");

 
        setTimeout(() => { //  reader já existe antes de tentar inicia  r o scanner?
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
  

    // parte do sucesso ou erro do scanner
    return (
      <>
      <Navbar/>
      <section className="pontos-section">
      <div className="pontos-text">
        <h2>EXPLORE RECIFE E GANHE PONTOS!</h2>
        <p>
          Descubra Recife de forma única com o Desbrave! Explore pontos
          turísticos, escaneie QR Codes e ganhe pontos, para ganhar descontos em
          cursos de nossas empresas parceiras. Uma jornada interativa pela
          história e cultura da cidade.
        </p>
        <Button text="Ler Qr Code" color="#0367A5" onClick={() => navigate("/Pontos")} />
        </div>
      <img className="pontos-image" src={elementDesign} alt="imagem de elemento" />
      </section>

     {/* Área do Scanner */}
     <div className="scanner-container">
        {scanResult ? (
          <div className="scan-success">
            <p>Sucesso! Código escaneado:</p>
            <a href={scanResult}>{scanResult}</a>
            <button onClick={restartScanner}>Escanear novamente</button>
          </div>
        ) : (
          <div id={readerId}></div>
        )}
      </div>
    </>
  );
}
  


export default Pontos;