
import React, { useState } from "react";
import "./EsqueceuSenha.css";
import { useNavigate } from "react-router-dom";

const EsqueceuSenha = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    
    navigate("/recuperar-senha"); 
  };

  return (
    <div className="esqueceuSenhaContainer">
      <div className="imagemEsquerda"></div>

      <div className="formDireita">
        <h2>Esqueceu sua senha?</h2>
        <p>Digite seu e-mail cadastrado</p>

        <input
          type="email"
          placeholder="E-mail"
          className="emailInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="enviarCodigo" onClick={handleSubmit}>
          Enviar código
        </button>

        <a href="/login" className="voltarLogin">↩ Voltar para página de Login</a>
      </div>
    </div>
  );
};

export default EsqueceuSenha;
