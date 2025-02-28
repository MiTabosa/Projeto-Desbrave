import "./CardsSection.css";
import Card from "./Card";

const CardsLocais = () => {
    const cardsLocais = [
        {
            title: "Marco Zero",
            image: "src/assets/marcoZero.png",
            description: "Avenida do Marco Zero, 1 - Recife, PE, 50.000-000",
            buttonText: "Ver Cursos",
            borderColor: "#3498DB" // Azul
        },
        {
            title: "Paço do Frevo",
            image: "src/assets/pacoDoFrevo.png",
            description: "Rua da Quinta do Paço, 1 - Recife, PE, 50.000-000",
            buttonText: "Ver Cursos",
            borderColor: "#3498DB" // Azul
        },
        {
            title: "Rua do Bom Jesus",
            image: "src/assets/ruaDoBomJesus.png",
            description: "Rua do Bom Jesus, 1 - Recife, PE, 50.000-000",
            buttonText: "Ver Cursos",
            borderColor: "#3498DB" // Azul
        }
    ];

    return (
        <section className="cards-locais">
            <h2>Lugares Imperdíveis</h2>
            <p>Esses lugares têm muito para contar... toque e descubra!</p>
            <div className="cards-container">
                {cardsLocais.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        image={card.image}
                        description={card.description}
                        buttonText={card.buttonText}
                        borderColor={card.borderColor}
                    />
                ))}
            </div>
        </section>
    );
};

export default CardsLocais;
