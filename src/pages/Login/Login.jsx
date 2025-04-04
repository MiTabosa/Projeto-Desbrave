import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; 
import { useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate(); 

  async function handleLogin() {
    await api
      .post("/autenticacao/login", {
        email: email,
        senha: senha,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token); 
          navigate("/home"); 
        } else {
          alert("Erro ao fazer login!");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Erro ao fazer login!");
      });
  }

  async function handleLogin() {
    await api 
    . post("/autenticacao/logout", {
      email: email,
      senha: senha,
    })
    .then((response) => { 
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token); 
        navigate("/home"); 
      } else {
        alert("Erro ao fazer login!");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Erro ao fazer login!");
    });
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputCampo">
            <FaLock className="inputIcone" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
            />
            <span
              className="Senha"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </span>
          </div>
          <Link to="/esqueceuSenha" className="EsqueciSenha">
            Esqueceu sua senha?
          </Link>
          <button className="EntrarBotao" onClick={() => handleLogin()}>
            Entrar
          </button>
        </div>

        <a href="/cadastro" className="BotaoCadastrar">
          Cadastra-se
        </a>

        <div>
          <a href="/" className="voltarinicio">
            ↩ Voltar para o inicio
          </a>
        </div>
      </div>
    </div>
  );
}