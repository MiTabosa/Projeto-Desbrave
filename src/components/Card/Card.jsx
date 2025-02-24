import "./CardsSection.css";

const Card = ({ title, description, image, borderColor, buttonText }) => {
  return (
    <div className="card" style={{ borderColor }}>
      <h3 style={{ color: borderColor }}>{title}</h3> {/* Cor do título igual à borda */}
      <img src={image} alt={title} />
      <p>{description}</p>
      <button className="card-button" style={{ backgroundColor: borderColor }}>
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
