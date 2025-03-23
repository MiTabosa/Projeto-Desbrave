import React, { useState } from "react";
import "./RedefinirSenha.css";
import { useNavigate } from "react-router-dom";

const RedefinirSenha = () => {
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    
    if (senha !== senhaConfirm) {
      alert("As senhas não coincidem. Tente novamente.");
    } else {
    
      navigate("/recuperarSenha"); 
    }
  };

  return (
    <div className="redefinirSenhaContainer">
      <div className="RedImagemEsquerda"></div>

      <div className="RedLadoDireito">
        <h1>Redefinir Senha</h1>
        <p>Digite sua nova senha</p>

        <input
          type="password"
          placeholder="Senha"
          className="RedInputSenha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <input
          type="password"
          placeholder="Digite a senha novamente"
          className="RedInputSenha"
          value={senhaConfirm}
          onChange={(e) => setSenhaConfirm(e.target.value)}
        />

        <button className="continuar" onClick>
          Continuar
        </button>
{/* 
        <a href="/login" className="voltarLogin">↩ Voltar para página de Login</a> */}
      </div>
    </div>
  );
};

export default RedefinirSenha;


