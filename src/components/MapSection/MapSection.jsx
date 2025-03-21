import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useNavigate } from "react-router-dom"; 
import "./MapSection.css";

const blueIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const greenIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapSection = ({ tipo }) => {
  const [pontosLidos, setPontosLidos] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const lidos = JSON.parse(localStorage.getItem("pontosLidos")) || [];
    setPontosLidos(lidos);
  }, []);

  const handleQRCodeScan = (pontoId) => {
    navigate("/paginaInicial"); 
  };

  const pontos = [
    { id: 1, nome: "Marco Zero", coords: [-8.063122, -34.871083], imagem: "./src/assets/PontosTuristicos/marcoZero.png", descricao: "Centro cultural do Recife" },
    { id: 2, nome: "Instituto Ricardo Brennand", coords: [-8.055584, -34.949685], imagem: "url-da-imagem", descricao: "Centro cultural do Recife"},
    { id: 3, nome: "Casa da Cultura", coords: [-8.060673, -34.880772], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { id: 4, nome: "Cais do Sertão", coords: [-8.061944, -34.870556], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { id: 5, nome: "Paço do Frevo", coords: [-8.061232, -34.870469], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { id: 6, nome: "Caixa Cultural Recife", coords: [-8.063104, -34.873418], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { id: 7, nome: "Pátio de São Pedro", coords: [-8.063930, -34.873125], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { id: 8, nome: "Palácio do Campo das Princesas", coords: [-8.064781, -34.873543], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { id: 9, nome: "Fundação Gilberto Freyre", coords: [-8.060481, -34.927890], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { id: 10, nome: "Parque de Esculturas de Francisco Brennand", coords: [-8.064715, -34.869688], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { id: 11, nome: "Mercado da Boa Vista", coords: [-8.057340, -34.885892], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { id: 12, nome: "Torre Malakoff", coords: [-8.060935, -34.871297], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { id: 13, nome: "Capela Dourada", coords: [-8.060507, -34.879800], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { id: 14, nome: "Forte das Cinco Pontas", coords: [-8.065661, -34.879703], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
  ];

  return (
    <section className={`map-section ${tipo}`}>
      <MapContainer center={[-8.0608, -34.876]} zoom={15} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {pontos.map((ponto) => {
          const foiEscaneado = pontosLidos.includes(ponto.id);
          return (
            <Marker
              key={ponto.id}
              position={ponto.coords}
              icon={foiEscaneado ? greenIcon : blueIcon}
            >
              <Popup>
                <div className="popup-content">
                  <b className="popup-title">{ponto.nome}</b>
                  {ponto.imagem && <img className="popup-img" src={ponto.imagem} alt={ponto.nome} width="150px" />}
                  {ponto.descricao && <p className="popup-desc">{ponto.descricao}</p>}
                  <p className={foiEscaneado ? "escaneado" : "nao-escaneado"}>
                    {foiEscaneado ? "✅ QR Code escaneado" : "❌ QR Code não escaneado"}
                  </p>
                  {!foiEscaneado && (
                    <button onClick={() => handleQRCodeScan(ponto.id)}>Escanear QR Code</button>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </section>
  );
};

export default MapSection;