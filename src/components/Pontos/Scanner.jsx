import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useRef, useState } from "react";
import ScannerComponent from "./ScannerComponent";

function Scanner() {

  const [scanResult, setScanResult] = useState(null);
  const scannerRef = useRef(null);
  const hasInitialized = useRef(false);
  const readerId = "reader";

  useEffect(() => {
    if (hasInitialized.current || scanResult) return;
    hasInitialized.current = true;

    console.log("inicializando..");

    setTimeout(() => { //  reader já existe antes de tentar iniciar o scanner?
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
        <div>
          <h1>qr code</h1>
          <p>
            Sucesso <a href={scanResult}>{scanResult}</a>
          </p>
          <button onClick={restartScanner}>Escanear novamente</button>
        </div>
      ) : (
        <div id={readerId}></div>
      )}
    </div>
  );
}

export default Scanner;
