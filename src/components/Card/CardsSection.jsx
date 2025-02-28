import "./CardsSection.css";
import Card from "./Card";

const CardsSection = () => {
  const cardsData = [
    {
      title: "Fóruns Interativos",
      description: "Participe de discussões e compartilhe conhecimento.",
      image: "src/assets/foruns.png",
      borderColor: "#2ECC71", // Verde
      buttonText: "Acessar Fórum",
      navigateTo: "/forum"
    },
    {
      title: "Cursos Online",
      description: "Aprenda no seu ritmo com cursos variados.",
      image: "src/assets/cursos.png",
      buttonText: "Ver Cursos",
      borderColor: "#3498DB", // Azul
      navigateTo: "/cursos"
    },
    {
      title: "Desafios Gamificados",
      description: "Explore Recife e ganhe recompensas.",
      image: "src/assets/desafios.png",
      buttonText: "Começar Desafio",
      borderColor: "#F1C40F", // Amarelo
      navigateTo: "/desafios"
    },
    {
      title: "Mapa Interativo",
      description: "Descubra Recife através do mapa interativo.",
      image: "src/assets/mapa.png",
       buttonText: "Explorar Mapa",
      borderColor: "#FF5733", // Laranja
      navigateTo: "/mapa"
    }
  ];

  return (
    <section className="cards-section">
      <h2>Descubra Suas Possibilidades</h2>
      <p>Explore novos conhecimentos e experiências incríveis.</p>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            borderColor={card.borderColor}
            buttonText={card.buttonText}
            navigateTo={card.navigateTo}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
