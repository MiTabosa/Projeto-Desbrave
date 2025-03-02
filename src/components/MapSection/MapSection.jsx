import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./MapSection.css";

const redIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapSection = () => {
  const pontos = [
    { nome: "Marco Zero", coords: [-8.063122, -34.871083]},
    { nome: "Instituto Ricardo Brennand", coords: [-8.055584, -34.949685]},
    { nome: "Casa da Cultura", coords: [-8.060673, -34.880772]},
    { nome: "Cais do Sertão", coords: [-8.061944, -34.870556]},
    { nome: "Paço do Frevo", coords: [-8.061232, -34.870469]},
    { nome: "Caixa Cultural Recife", coords: [-8.063104, -34.873418]},
    { nome: "Pátio de São Pedro", coords: [-8.063930, -34.873125]},
  ];

  return (
    <section className="map-section">
      <div className="map-text">
        <h2>Explore Recife</h2>
        <p>
          Navegue pelos pontos turísticos, eventos culturais e desafios <br/> gamificados
          que tornam Recife único.
        </p>
      </div>
      <MapContainer
        center={[-8.047562, -34.877]}
        zoom={14}
        className="map-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {pontos.map((ponto, index) => (
          <Marker key={index} position={ponto.coords} icon={redIcon}>
            <Popup>
              <b>{ponto.nome}</b>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default MapSection;
