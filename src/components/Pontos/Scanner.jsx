import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "./Pontos.css";

function ScannerPage() {
  const [scanResult, setScanResult] = useState(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    scannerRef.current = new Html5QrcodeScanner("reader", {
      qrbox: { width: 250, height: 250 },
      fps: 5,
    });

    scannerRef.current.render(
      (result) => {
        setScanResult(result);
        scannerRef.current.clear();
      },
      (error) => {
        console.log("Erro ao escanear:", error);
      }
    );

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear();
      }
    };
  }, []);

  return (
    <div className="scanner-container">
      {scanResult ? (
        <div>
          <p>Sucesso! Código escaneado:</p>
          <a href={scanResult} target="_blank" rel="noopener noreferrer">
            {scanResult}
          </a>
          <button onClick={() => setScanResult(null)}>Escanear Novamente</button>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  );
}

export default ScannerPage;
