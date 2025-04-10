
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { api } from "../../service/api";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login({ setIsLogged, atualizarLogin }) {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navegar = useNavigate();

  async function realizarLogin() {
    try {
      const resposta = await api.post("/autenticacao/login", {
        email,
        senha,
      });

      const usuario = resposta.data.usuario;
      const token = resposta.data.token;

      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
      localStorage.setItem("token", token);

      
      setIsLogged(true);
      if (atualizarLogin) atualizarLogin();

      navegar("/home");
    } catch (erro) {
      console.error("Erro ao fazer login:", erro);
      toast.error("E-mail ou senha inválidos.");
    }
  }

  return (
    <div className="loginContainer">
      <div className="loginEsquerda"></div>

      <div className="loginDireita">
        <h2 className="loginTitulo">Login</h2>
        <p className="loginSubtitulo">Entre na sua conta!</p>

        <div className="loginformulario">
          <div className="inputCampoLogin">
            <FaUser className="inputIcone" />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="inputCampoLogin">
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

        <Link to="/cadastro" className="BotaoCadastrar">
          Cadastrar-se
        </Link>

        <div>
          <Link to="/" className="voltarinicio">
            ↩ Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
}

