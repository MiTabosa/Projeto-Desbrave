import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { api } from "../../service/api";


export default function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navegar = useNavigate();

  async function realizarLogin() {
    try {
      const resposta = await api.post("/autenticacao/login", {
        email: email,
        senha: senha,
      }).then((Response) => {
        navegar("/home");
        localStorage.setItem("token", Response.data.token);
      }).catch((error) => {
        console.log(error);
      })
      

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
