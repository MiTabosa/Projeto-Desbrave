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
    <div className="containerRecupSenha">
      <div className="RecuperarSenhaForm">
        <h2 className="RecTitulo">Recupere sua senha</h2>
        <p className="RecSubTitulo">
          Insira abaixo o código que foi enviado por e-mail
        </p>
        <div className="InputCodigos">
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
        <button className="RecBotao" onClick={handleSubmit}>
          Confirmar
        </button>
        <a href="/esqueceuSenha"><p className="ReenviarCodigo">Reenviar código</p></a>
      </div>
      <div className="ImagemContainer">
        <div className="RecImagemEsquerda"></div>
      </div>
    </div>
  );
};

export default RecuperarSenha;
