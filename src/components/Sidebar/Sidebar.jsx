import dashboardIcon from "../../assets/Dashboard-assets/dashboard-icon.png";
import bookIcon from "../../assets/Dashboard-assets/book-icon.png";
import awardIcon from "../../assets/Dashboard-assets/award-icon.png";
import ticketIcon from "../../assets/Dashboard-assets/ticket-icon.png";

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={dashboardIcon} alt="Dashboard" />
          <a href="#">Dashboard</a>
        </li>
        <li>
          <img src={bookIcon} alt="Cursos" />
          <a href="#">Meus Cursos</a>
        </li>
        <li>
          <img src={awardIcon} alt="Certificações" />
          <a href="#">Certificados</a>
        </li>
        <li>
          <img src={ticketIcon} alt="Cupons" />
          <a href="#">Meus cupons</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
