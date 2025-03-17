import React, { useState } from "react";
import "./RecuperarSenha.css";
import { useNavigate } from "react-router-dom";

const RecuperarSenha = () => {
  const [codigo, setCodigo] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      let novoCodigo = [...codigo];
      novoCodigo[index] = value;
      setCodigo(novoCodigo);
    }
  };

  const handleSubmit = () => {
    
    navigate("/redefinirSenha"); 
  };

  return (
    <div className="container">
      <div className="form-container-senha">
        <h2 className="title">Recupere sua senha</h2>
        <p className="subtitle">
          Insira abaixo o código que foi enviado por e-mail
        </p>
        <div className="code-inputs">
          {codigo.map((num, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={num}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>
        <button className="confirm-button" onClick={handleSubmit}>
          Confirmar
        </button>
        <a href="/esqueceuSenha"><p className="resend">Reenviar código</p></a>
      </div>
      <div className="image-container">
        <div className="imagemEsquerda"></div>
      </div>
    </div>
  );
};

export default RecuperarSenha;
