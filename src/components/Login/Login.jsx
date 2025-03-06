import "./Login.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGooglePlus } from "react-icons/fa";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  

  return (
    <div className="loginContainer">
      <div className="loginEsquerda">
        <h1>Olá!</h1>
        <p>
          Insira algumas informações e <br />
          comece a sua jornada conosco!
        </p>
        <Link to="/Cadastro">
          <button className="criarConta">Quero criar uma conta</button>
        </Link>
      </div>

      <div className="loginDireita">
        <h2 className="loginTitle">Login</h2>
        <p className="loginSubtitle">Entre na sua conta!</p>
        
        <div className="loginForm">
          <div className="inputGroup">
            <FaUser className="inputIcon" />
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="inputGroup">
            <FaLock className="inputIcon" />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Senha" 
            />
            <span className="Senha" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </span>
          </div>
          <Link to="/esqueceu-Senha" className="EsqueciSenha">Esqueceu sua senha?</Link>
          <button className="loginButon">Entrar</button>
        </div>

        <p className="connecText">Ou conecte-se com:</p>
        <div className="socialIcons">
          <FaFacebook className="FacebookIcon"/>
          <FaInstagram className="InstagramIcon"/>
          <FaGooglePlus className="GoogleIcon"/>
        </div>
      </div>
    </div>
  );
}
