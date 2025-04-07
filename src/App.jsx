import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import NavbarLogado from './components/Navbar/NavbarLogado';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import EsqueceuSenha from './pages/RecuperaçaoSenha/EsqueceuSenha';
import RecuperarSenha from './pages/RecuperaçaoSenha/RecuperarSenha';
import RedefinirSenha from './pages/RecuperaçaoSenha/RedefinirSenha';
import Diretrizes from './components/Diretrizes/Diretrizes';
import Sobre from './pages/Sobre/Sobre';
import Parceiros from './pages/Parceiros/Parceiros';
import Curso from './pages/Curso/Curso';
import DescricaoCurso from './pages/Curso/DescricaoCurso';
import PaginaInicial from './components/Scanner/PaginaInicial';
import Scanner from './pages/Pontos/Scanner';
import InvalidScanner from './components/Scanner/InvalidScanner';
import Mapa from './pages/Mapa/Mapa';
import Dashboard from './pages/Dashboard/Dashboard';
import CuponsDashboard from './pages/Cupons/CuponsDashboard';
import CuponsUsados from './pages/Cupons/CuponsUsados';
import Forum from './pages/Forum/Foruns';
import ForumChat from './pages/ChatForum/Chatforum';
import Certificados from './pages/Certificados/Certificados';
import DashboardAdmin from './pages/DashboardAdmin/DashboardAdmin';
import GestaoCursos from './pages/GestCurso/Gestcurso';
import GestaoForum from './pages/GestForum/GestForum';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (user) {
      setIsLogged(true);
      setUserData(user);
      setIsAdmin(user.role === 'admin');
    }
  }, []);

  // Sem vizualizar o Nav
  const Layout = ({ isLogged, children }) => {
    const location = useLocation();

    const hideNavbarPaths = [
      '/login',
      '/cadastro',
      '/esqueceuSenha',
      '/recuperarSenha',
      '/redefinirSenha',
      '/dashboard',
      '/dashboardAdmin',
      '/CuponsUsados',
      '/cupons',
      '/certificados',
      '/meusCursos'
    ];

    const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

    return (
      <>
        {shouldShowNavbar && (
          isLogged ? <NavbarLogado /> : <Navbar />
        )}
        {children}
      </>
    );
  };

  const PrivateRoute = ({ children }) => {
    if (!isLogged) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  const AdminRoute = ({ children }) => {
    if (!isLogged) {
      return <Navigate to="/login" replace />;
    }
    if (!isAdmin) {
      return <Navigate to="/dashboard" replace />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Layout isLogged={isLogged}><Home /></Layout>} />
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
        <Route path="/cadastro" element={<Layout isLogged={isLogged}><Cadastro /></Layout>} />
        <Route path="/esqueceuSenha" element={<Layout isLogged={isLogged}><EsqueceuSenha /></Layout>} />
        <Route path="/recuperarSenha" element={<Layout isLogged={isLogged}><RecuperarSenha /></Layout>} />
        <Route path="/redefinirSenha" element={<Layout isLogged={isLogged}><RedefinirSenha /></Layout>} />
        <Route path="/diretrizes" element={<Layout isLogged={isLogged}><Diretrizes /></Layout>} />
        <Route path="/sobre" element={<Layout isLogged={isLogged}><Sobre /></Layout>} />
        <Route path="/parceiros" element={<Layout isLogged={isLogged}><Parceiros /></Layout>} />
        <Route path="/curso" element={<Layout isLogged={isLogged}><Curso /></Layout>} />
        <Route path="/descricaoCurso/:id" element={<Layout isLogged={isLogged}><DescricaoCurso /></Layout>} />
        <Route path="/Forum" element={<Layout isLogged={isLogged}><Forum /></Layout>} />
        <Route path="/mapa" element={<Layout isLogged={isLogged}><Mapa /></Layout>} />
        <Route path="/paginaInicial" element={<Layout isLogged={isLogged}><PaginaInicial /></Layout>} />

        {/*teste de rotas  */}
        <Route path="/dashboard" element={<Layout isLogged={isLogged}><Dashboard /></Layout>} />
        <Route path="/dashboardAdmin" element={<Layout isLogged={isLogged}><DashboardAdmin /></Layout>} />
        <Route path="/gestaoCursos" element={<Layout isLogged={isLogged}><GestaoCursos /></Layout>} />
        <Route path="/gestaoForum" element={<Layout isLogged={isLogged}><GestaoForum /></Layout>} />
        <Route path="/cupons" element={<Layout isLogged={isLogged}><CuponsDashboard /></Layout>} />
        <Route path="/CuponsUsados" element={<Layout isLogged={isLogged}><CuponsUsados /></Layout>} />
        <Route path="/certificados" element={<Layout isLogged={isLogged}><Certificados /></Layout>} />
        <Route path="/scanner" element={<Layout isLogged={isLogged}><Scanner /></Layout>} />
        <Route path="/invalidScanner" element={<Layout isLogged={isLogged}><InvalidScanner /></Layout>} />
        <Route path="/forumChat/:id" element={<Layout isLogged={isLogged}><ForumChat /></Layout>} />

        {/* Rotas Privadas */}
        {/* <Route path="/invalidScanner" element={<Layout isLogged={isLogged}><PrivateRoute><InvalidScanner /></PrivateRoute></Layout>} /> */}
        {/* <Route path="/scanner" element={<Layout isLogged={isLogged}><PrivateRoute><Scanner /></PrivateRoute></Layout>} /> */}
        {/* <Route path="/cupons" element={<Layout isLogged={isLogged}><PrivateRoute><CuponsDashboard /></PrivateRoute></Layout>} />
        <Route path="/CuponsUsados" element={<Layout isLogged={isLogged}><PrivateRoute><CuponsUsados /></PrivateRoute></Layout>} /> */}
        {/* <Route path="/forumChat" element={<Layout isLogged={isLogged}><PrivateRoute><ForumChat /></PrivateRoute></Layout>} /> */}
        {/* <Route path="/meusCursos" element={<Layout isLogged={isLogged}><PrivateRoute><MeusCursos /></PrivateRoute></Layout>} /> */}
        {/* <Route path="/Certificados" element={<Layout isLogged={isLogged}><PrivateRoute><Certificados /></PrivateRoute></Layout>} /> */}

        {/* Rotas do Admin */}
        {/* <Route path="/dashboardAdmin" element={<Layout isLogged={isLogged}><AdminRoute><DashboardAdmin /></AdminRoute></Layout>} />
        <Route path="/gestaoCursos" element={<Layout isLogged={isLogged}><AdminRoute><GestaoCursos /></AdminRoute></Layout>} />
        <Route path="/gestaoForum" element={<Layout isLogged={isLogged}><AdminRoute><GestaoForum /></AdminRoute></Layout>} /> */}

        {/* Rota Curinga */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
