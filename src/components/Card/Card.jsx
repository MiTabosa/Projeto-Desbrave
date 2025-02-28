import React from "react";
import { useNavigate } from "react-router-dom";  // Importar o hook useNavigate

const Card = ({ title, description, image, borderColor, buttonText, navigateTo }) => {
  const navigate = useNavigate(); // Definir a navegação

  const handleButtonClick = () => {
    navigate(navigateTo); // Navegar para a página que foi passada
  };

  return (
    <div className="card" style={{ borderColor }}>
      <h3 style={{ color: borderColor }}>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      <button
        className="card-button"
        style={{ backgroundColor: borderColor }}
        onClick={handleButtonClick} // Adiciona o evento de clique no botão
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
