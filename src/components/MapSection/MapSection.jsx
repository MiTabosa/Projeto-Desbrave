import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./MapSection.css";

const blueIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapSection = ({ tipo }) => {
  const pontos = [
    { nome: "Marco Zero", coords: [-8.063122, -34.871083], imagem: "./src/assets/PontosTuristicos/marcoZero.png", descricao: "Centro cultural do Recife" },
    { nome: "Instituto Ricardo Brennand", coords: [-8.055584, -34.949685], imagem: "url-da-imagem", descricao: "Centro cultural do Recife"},
    { nome: "Casa da Cultura", coords: [-8.060673, -34.880772], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { nome: "Cais do Sertão", coords: [-8.061944, -34.870556], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { nome: "Paço do Frevo", coords: [-8.061232, -34.870469], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { nome: "Caixa Cultural Recife", coords: [-8.063104, -34.873418], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { nome: "Pátio de São Pedro", coords: [-8.063930, -34.873125], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { nome: "Palácio do Campo das Princesas", coords: [-8.064781, -34.873543], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { nome: "Fundação Gilberto Freyre", coords: [-8.060481, -34.927890], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { nome: "Parque de Esculturas de Francisco Brennand", coords: [-8.064715, -34.869688], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { nome: "Mercado da Boa Vista", coords: [-8.057340, -34.885892], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { nome: "Torre Malakoff", coords: [-8.060935, -34.871297], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { nome: "Capela Dourada", coords: [-8.060507, -34.879800], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
    { nome: "Forte das Cinco Pontas", coords: [-8.065661, -34.879703], imagem: "url-da-imagem", descricao: "Centro cultural do Recife" },
  ];

  return (
    <section className={`map-section ${tipo}`}>
      <MapContainer center={[-8.0608, -34.876]} zoom={15} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {pontos.map((ponto, index) => (
          <Marker key={index} position={ponto.coords} icon={blueIcon}>
            {tipo === "map-detalhado" ? (
              <Popup>
                <div>
                  <b>{ponto.nome}</b>
                  {ponto.imagem && <img src={ponto.imagem} alt={ponto.nome} width="150px" />}
                  {ponto.descricao && <p>{ponto.descricao}</p>}
                </div>
              </Popup>
            ) : (
              <Popup>
                <div>
                  <b>{ponto.nome}</b>
                </div>
              </Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default MapSection;
