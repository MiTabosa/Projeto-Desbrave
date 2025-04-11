import React, { useState } from "react";
import "./RedefinirSenha.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RedefinirSenha = () => {
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
  const navegar = useNavigate();

  const lidarComEnvio = async () => {
    if (novaSenha !== confirmarSenha) {
      toast.error("As senhas não coincidem. Tente novamente.");
      return;
    }

    try {
      const email = localStorage.getItem("emailRecuperacao");

      if (!email) {
        toast.error("E-mail de recuperação não encontrado.");
        return;
      }

      const resposta = await axios.post("http://localhost:8081/api/usuarios/redefinir-senha", {
        email,
        novaSenha,
      });

      if (resposta.status === 200) {
        toast.success("Senha redefinida com sucesso!");
        navegar("/login");
      } else {
        setMensagemErro("Erro ao redefinir a senha. Tente novamente.");
      }
    } catch (erro) {
      console.error("Erro ao redefinir senha:", erro);
      setMensagemErro("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="redefinirSenhaContainer">
      <div className="RedImagemEsquerda"></div>

      <div className="RedLadoDireito">
        <h1>Redefinir Senha</h1>
        <p>Digite sua nova senha</p>

        <div className="inputCampo">
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            className="RedInputSenha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          <span
            className="iconeSenha"
            onClick={() => setMostrarSenha(!mostrarSenha)}
          >
            {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="inputCampo">
          <input
            type={mostrarConfirmarSenha ? "text" : "password"}
            placeholder="Digite a senha novamente"
            className="RedInputSenha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          <span
            className="iconeSenha"
            onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
          >
            {mostrarConfirmarSenha ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button className="continuar" onClick={lidarComEnvio}>
          Continuar
        </button>
      </div>
    </div>
  );
};

export default RedefinirSenha;


