import React from 'react';
import Navbar from '../components/Navbar/Navbar';
// import Card from "../components/Card/Card";
import Carrossel from '../components/Carrossel/Carrossel'; // Importe o Carrossel
import MapSection from '../components/MapSection/MapSection';
import Footer from '../components/Footer/Footer';
import './Home.css';
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineForum } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { VscCompass } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';

const Home = () => {
  const navigate = useNavigate();

  // Dados para os cards da seção "Descubra Suas Possibilidades"
  const cardsDescubra = [
    {
      title: "Fóruns Interativos",
      description: "Participe de fóruns sobre história e cultura.",
      extraClass: "card-verde",
      borderColor: "#35A150",
      buttonText: "Descubra agora",
      link: "/forum",
      icon: MdOutlineForum,
      layout: "layout1",
    },
    {
      title: "Cursos",
      description: "Cursos sobre a cultura pernambucana.",
      extraClass: "card-azul",
      borderColor: "#0367A6",
      buttonText: "Saiba Mais",
      link: "/cursos",
      icon: IoBookOutline,
      layout: "layout1",
    },
    {
      title: "Desafios",
      description: "Desafios culturais pela cidade.",
      extraClass: "card-laranja",
      borderColor: "#D98D30",
      buttonText: "Começar",
      link: "/paginaInicial",
      icon: IoRocketOutline,
      layout: "layout1",
    },
    {
      title: "Mapa Interativo",
      description: "Explore pontos históricos do Recife.",
      extraClass: "card-vermelho",
      borderColor: "#D93728",
      buttonText: "Explorar agora",
      link: "/mapa",
      icon: FaMapMarkedAlt,
      layout: "layout1",
    },
  ];

  // Dados para os cards da seção "Lugares Imperdíveis"
  const cardsLugares = [
    {
      title: "Marco Zero",
      description: "O ponto de partida para explorar Recife! História, arte e um visual incrível te esperam nesse lugar icônico!",
      image: "./src/assets/pontosTuristicos/marcoZero.png",
      extraClass: "card-azul",
      borderColor: "#0367A6",
      buttonText: "Saiba Mais",
      link: "/marco-zero",
      layout: "layout2",
    },
    {
      title: "Paço do Frevo",
      description: "Entre no ritmo! Um espaço interativo para sentir a energia do frevo e conhecer sobre esse patrimônio cultural.",
      image: "./src/assets/pontosTuristicos/pacoDoFrevo.png",
      extraClass: "card-azul",
      borderColor: "#0367A6",
      buttonText: "Saiba Mais",
      link: "/paco-do-frevo",
      layout: "layout2",
    },
    {
      title: "Rua do Bom Jesus",
      description: "Uma das ruas mais bonitas do mundo! Arquitetura colonial, cultura e muita história esperam por você.",
      image: "./src/assets/pontosTuristicos/RuaDoBomJesus.png",
      extraClass: "card-azul",
      borderColor: "#0367A6",
      buttonText: "Saiba Mais",
      link: "/rua-do-bom-jesus",
      layout: "layout2",
    },
    {
      title: "Rua do Bom Jesus",
      description: "Uma das ruas mais bonitas do mundo! Arquitetura colonial, cultura e muita história esperam por você.",
      image: "./src/assets/pontosTuristicos/RuaDoBomJesus.png",
      extraClass: "card-azul",
      borderColor: "#0367A6",
      buttonText: "Saiba Mais",
      link: "/rua-do-bom-jesus",
      layout: "layout2",
    },
  ];

  return (
    <div className='home'>
      <Navbar />
      <section className="hero">
        <div className="hero-text">
          <h1>EXPLORE</h1>
          <h2>SUA HISTÓRIA</h2>
          <p>Aprenda, compartilhe e conecte-se com pessoas<br />que buscam expandir seus horizontes.</p>
          <Button className="heroButton" text="Vamos Desbravar" color="#0367A5" size="medium" onClick={() => navigate("/login")} />
        </div>
        <img className="hero-image" src="./src/assets/imgPrincipal.png" alt="Imagem Principal" />
      </section>

      <section className="possibilidades">
        <h2>Descubra Suas Possibilidades</h2>
        <p>Embarque em uma jornada educacional única, mergulhando na história, cultura e inovação de Recife.</p>
        {/* Substitua o card-containerDescubra pelo Carrossel */}
        <Carrossel cards={cardsDescubra} />
      </section>

      <section className="explore">
        <div className="map-text">
          <h2>Explore Recife</h2>
          <p>
            Navegue pelos pontos turísticos que tornam Recife único.
            Ao visitar, encontre QR Codes espalhados pela cidade, <br />
            escaneie e acumule pontos para trocar por prêmios na plataforma!
          </p>
          <Button text="Explorar" color="#0367A5" size="medium" onClick={() => navigate("/mapa")} icon={VscCompass} />
        </div>
        <MapSection tipo="map-simples" />
      </section>

      <section className="lugares-imperdiveis">
        <div className="lugaresImperdiveis-text">
          <h2>Lugares Imperdíveis</h2>
          <p>Esses lugares têm muito para contar... toque e descubra!</p>
        </div>
        {/* Substitua o card-containerLocais pelo Carrossel */}
        <Carrossel cards={cardsLugares} />
      </section>
      <Footer />
    </div>
  );
};

export default Home;