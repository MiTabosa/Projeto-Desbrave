import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import Button from "../Button/Button";

const Card = ({ title, description, image, extraClass, buttonText, link, icon: Icon, borderColor, layout }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(link);
  };


  return (
    <div className={`card ${extraClass} ${layout}`} style={{ border: `3px solid ${borderColor}` }}>
      {layout === "layout1" && (
        <>
          <h3 style={{ color: borderColor }}>{title}</h3>
          {image && <img src={image} alt={title} />}
          {Icon && <Icon className="card-icon" style={{ color: borderColor }} />}
          <p>{description}</p>
          <div style={{ marginTop: "auto", width: "100%" }}>
            <Button text={buttonText} color={borderColor} size="full" onClick={handleNavigate} />
          </div>
        </>
      )}

      {layout === "layout2" && (
        <>
          {image && <img src={image} alt={title} className="layout2-image" />}
          {Icon && <Icon className="card-icon" style={{ color: borderColor }} />}
          <h3 style={{ color: borderColor }}>{title}</h3>
          <p>{description}</p>
          <div style={{ marginTop: "auto", width: "100%" }}> 
            <Button text={buttonText} color={borderColor} size="full" onClick={handleNavigate} />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;