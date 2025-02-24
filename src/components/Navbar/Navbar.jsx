import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logo" src="./src/assets/logo.png" alt="Logo"/>
      <ul className="nav-links">
        <li><a href="#">Início</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Destaque</a></li>
        <li><a href="#">Contato</a></li>
        <li><a href="#">Mapa</a></li>
      </ul>
      <div className="buttons">
        <button className="login">Login</button>
        <button className="register">Cadastre-se</button>
      </div>
    </nav>
  );
};

export default Navbar;
