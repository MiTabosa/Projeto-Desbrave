import React, { useState } from "react";
import "./RecuperarSenha.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecuperarSenha = () => {
  const [codigo, setCodigo] = useState(["", "", "", "", "", ""]);
  const [mensagemErro, setMensagemErro] = useState("");
  const navegar = useNavigate();

  const handleChange = (indice, valor) => {
    if (/^\d?$/.test(valor)) {
      const novoCodigo = [...codigo];
      novoCodigo[indice] = valor;
      setCodigo(novoCodigo);
    }
  };

  const handleSubmit = async () => {
    const codigoCompleto = codigo.join("");

    try {
      const resposta = await axios.post("http://localhost:8081/api/usuarios/recuperar-senha", {
        codigo: codigoCompleto,
      });

      if (resposta.status === 200) {
        navegar("/redefinirSenha");
      } else {
        setMensagemErro("Código inválido. Tente novamente.");
      }
    } catch (erro) {
      console.error("Erro ao validar código:", erro);
      toast.error("Ocorreu um erro ao validar o código.");
    }
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
