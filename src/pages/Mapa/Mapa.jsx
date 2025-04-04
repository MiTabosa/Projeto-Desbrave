import { useNavigate } from "react-router-dom";
import "./Mapa.css";
import Navbar from "../../components/Navbar/Navbar";
import MapSection from "../../components/MapSection/MapSection";

function Mapa() {
    const navigate = useNavigate();

    return (
        <>
            <MapSection tipo="map-detalhado" />
        </>
    );
}

export default Mapa;