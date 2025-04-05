import React, { useState } from "react";
import "./EsqueceuSenha.css";
import { useNavigate } from "react-router-dom";
import imgRecupSenha from "../../assets/login-senha.jpg";
import axios from "axios";

const EsqueceuSenha = () => {
  const [email, setEmail] = useState("");
  const [erroEmail, setErroEmail] = useState(""); 
  const [carregando, setCarregando] = useState(false);
  const navegar = useNavigate();

  const validarEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  };

  const enviarCodigoRecuperacao = async () => {
    if (!validarEmail(email)) {
      setErroEmail("Digite um e-mail válido."); 
      return;
    }

    setErroEmail(""); 
    setCarregando(true);

    try {
      const resposta = await axios.post("http://localhost:8080/recuperar-senha", { email });

      if (resposta.status === 200) {
        alert("Código de recuperação enviado para o seu e-mail.");
        navegar("/recuperarSenha");
      } else {
        setErroEmail("Erro ao enviar o código. Tente novamente.");
      }
    } catch (erro) {
      console.error("Erro ao enviar o código:", erro);
      setErroEmail("Erro ao enviar o código. Verifique se o e-mail está correto.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="esqueceuSenhaContainer">
      <div className="imagemEsquerdaES" style={{ backgroundImage: `url(${imgRecupSenha})` }}></div>

      <div className="LadoDireitoES">
        <h2>Esqueceu sua senha?</h2>
        <p>Digite seu e-mail cadastrado</p>

        <input
          type="email"
          placeholder="E-mail"
          className={`emailInput ${erroEmail ? "inputErro" : ""}`} // Adiciona classe de erro
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        {erroEmail && <p className="erroMensagem">{erroEmail}</p>} {/* Mostra a mensagem de erro */}

        <button className="enviarCodigo" onClick={enviarCodigoRecuperacao} disabled={carregando}>
          {carregando ? "Enviando..." : "Enviar código"}
        </button>

        <a href="/login" className="voltarLogin">↩ Voltar para página de Login</a>
      </div>
    </div>
  );
};

export default EsqueceuSenha;
