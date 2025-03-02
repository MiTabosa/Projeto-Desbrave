import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css"; // Importando os estilos

const Card = ({ title, description, image, extraClass, buttonText, link, icon: Icon, borderColor }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(link);
  };

  return (
    <div className={`card ${extraClass}`} style={{ border: `3px solid ${borderColor}` }}>
      {/* Renderiza a imagem, se existir */}
      {image && <img src={image} alt={title} />}
      
      {/* Renderiza o ícone, se existir, com a cor passada por props */}
      {Icon && <Icon className="card-icon" style={{ color: borderColor }} />} 

      <div className="card-content">
        {/* Título com a mesma cor da borda */}
        <h4 style={{ color: borderColor }}>{title}</h4>
        <p>{description}</p>
        {/* Botão com a mesma cor da borda */}
        <button style={{ backgroundColor: borderColor, color: "#fff" }} onClick={handleNavigate}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
