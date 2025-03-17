import BottomDashboard from "../BottomDashboard/BottomDashboard"
import NavbarDashboard from "../NavbarDashboard/NavbarDashboard"
import Sidebar from "../Sidebar/Sidebar"

const MeusCursos = () => {
    return (
        <div>
            <Sidebar>
        <BottomDashboard>
            <NavbarDashboard/>
            <div>
                <h2>Meus Cursos</h2>
            </div>
        </BottomDashboard>
        </Sidebar>
        </div>
    )
}

export default MeusCursos