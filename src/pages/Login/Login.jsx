import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";
import axios from "axios";


export default function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navegar = useNavigate();

  async function realizarLogin() {
    try {
      const resposta = await axios.post("http://localhost:8081/autenticacao/login", {
        email: email,
        senha: senha,
      });
      console.log("Resposta da API:", resposta);

      if (resposta.status === 200) {
        localStorage.setItem("token", resposta.data.token);
        navegar("/home");
      } else {
        alert("Erro ao fazer login!");
      }
    } catch (erro) {
      console.error("Erro ao fazer login:", erro);
      alert("Erro ao conectar com o servidor.");
    }
  }

  return (
    <div className="loginContainer">
      <div className="loginEsquerda"></div>

      <div className="loginDireita">
        <h2 className="loginTitulo">Login</h2>
        <p className="loginSubtitulo">Entre na sua conta!</p>

        <div className="loginformulario">
          <div className="inputCampo">
            <FaUser className="inputIcone" />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputCampo">
            <FaLock className="inputIcone" />
            <input
              type={mostrarSenha ? "text" : "password"}
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <span
              className="Senha"
              onClick={() => setMostrarSenha(!mostrarSenha)}
            >
              {mostrarSenha ? <IoEyeOff /> : <IoEye />}
            </span>
          </div>
          <Link to="/esqueceuSenha" className="EsqueciSenha">
            Esqueceu sua senha?
          </Link>
          <button className="EntrarBotao" onClick={realizarLogin}>
            Entrar
          </button>
        </div>

        <a href="/cadastro" className="BotaoCadastrar">
          Cadastrar-se
        </a>

        <div>
          <a href="/" className="voltarinicio">
            ↩ Voltar para o início
          </a>
        </div>
      </div>
    </div>
  );
}
