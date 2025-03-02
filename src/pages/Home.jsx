import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Card from "../components/Card/Card";
import HeroSection from '../components/HeroSection/HeroSection';
import MapSection from '../components/MapSection/MapSection';
import Footer from '../components/Footer/Footer';
import './Home.css';
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineForum } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="heroSection">
        <HeroSection />
      </section>

      <section className="possibilidades">
        <h2>Descubra Suas Possibilidades</h2>
        <p>Embarque em uma jornada educacional única, mergulhando na história, cultura e inovação de Recife. </p>
        <div className="card-containerDescubra">
          <Card
            title="Fóruns Interativos"
            description="Participe de fóruns sobre história e cultura."
            extraClass="card-blue"
            borderColor="#3498db" // Azul
            buttonText="Saiba Mais"
            link="/foruns"
            icon={ MdOutlineForum } 
          />
          <Card
            title="Cursos"
            description="Cursos sobre a cultura pernambucana."
            extraClass="card-green"
            borderColor="#35A150" // Verde
            buttonText="Saiba Mais"
            link="/cursos"
            icon={ IoBookOutline }
          />
          <Card
            title="Desafios"
            description="Desafios culturais pela cidade."
            extraClass="card-yellow"
            borderColor="#D98D30" // Laranja
            buttonText="Saiba Mais"
            link="/desafios"
            icon={ IoRocketOutline }
          />
          <Card
            title="Mapa Interativo"
            description="Explore pontos históricos do Recife."
            extraClass="card-gray"
            borderColor="#D93728" // Laranja
            buttonText="Saiba Mais"
            link="/mapa"
            icon={ FaMapMarkedAlt }// Passando o ícone corretamente
          />
        </div>
      </section>

      <section className="explore">
        <MapSection />
      </section>

      <section className="lugares-imperdiveis">
        <h2>Lugares Imperdíveis</h2>
        <p>Esses lugares têm muito para contar... toque e descubra!</p>
        <div className="card-containerLocais">
          <Card
            title="Marco Zero"
            description="Ponto histórico do Recife."
            image="./src/assets/marcoZero.png"
            extraClass="card-blue"
            buttonText="Saiba Mais"
            link="/marco-zero"
          />
          <Card
            title="Paço do Frevo"
            description="Museu do frevo brasileiro."
            image="./src/assets/pacoDoFrevo.png"
            extraClass="card-blue"
            buttonText="Saiba Mais"
            link="/paco-do-frevo"
          />
          <Card
            title="Rua do Bom Jesus"
            description="Uma das ruas mais bonitas do mundo."
            image="./src/assets/ruaDoBomJesus.png"
            extraClass="card-blue"
            buttonText="Saiba Mais"
            link="/rua-do-bom-jesus"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
