import navegarIcon from "../../assets/Dashboard-assets/square-icon.png";
import usuarioIcon from "../../assets/Dashboard-assets/usuario-icon.png";


const NavbarDashboard = () => {
return (
    <header>
        <h5>Nome do Usuário</h5>
        <div>
        <img src={navegarIcon} alt="Item de navegação usuario" />
        <img src={usuarioIcon} alt="Foto usuario" />
        </div>
    </header>
)
}

export default NavbarDashboard