import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import NavbarLogado from './components/Navbar/NavbarLogado';

// Import all page components
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
import PaginaInicial from './pages/Pontos/PaginaInicial';
import Scanner from './pages/Pontos/Scanner';
import InvalidScanner from './pages/Pontos/InvalidScanner';
import Mapa from './pages/Mapa/Mapa';
import Dashboard from './pages/Dashboard/Dashboard';
import CuponsDashboard from './pages/Cupons/CuponsDashboard';
import CuponsUsados from './pages/Cupons/CuponsUsados';
import Forum from './pages/Forum/Foruns';
import ForumChat from './pages/ChatForum/Chatforum';
import MeusCursos from './pages/MeusCursos/MeusCursos';
import Certificados from './pages/Certificados/Certificados';
import DashboardAdmin from './pages/DashboardAdmin/DashboardAdmin';
import GestaoCursos from './pages/GestCurso/Gestcurso';
import GestaoForum from './pages/GestForum/GestForum';

const App = () => {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('user'));
  const userData = isLogged ? JSON.parse(localStorage.getItem('user')) : null;
  const isAdmin = userData?.role === 'admin';

  // Sem vizualizar o Nav
  const Layout = ({ children }) => {
    const hideNavbarPaths = [
      '/login',
      '/cadastro',
      '/esqueceuSenha',
      '/recuperarSenha',
      '/redefinirSenha'
    ];
    const shouldShowNavbar = !hideNavbarPaths.includes(window.location.pathname);

    return (
      <>
        {shouldShowNavbar && (isLogged ? <NavbarLogado /> : <Navbar />)}
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

  // Visualizar perfil 
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
        {/* Rotas Publicas */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
        <Route path="/cadastro" element={<Layout><Cadastro /></Layout>} />
        <Route path="/esqueceuSenha" element={<Layout><EsqueceuSenha /></Layout>} />
        <Route path="/recuperarSenha" element={<Layout><RecuperarSenha /></Layout>} />
        <Route path="/redefinirSenha" element={<Layout><RedefinirSenha /></Layout>} />
        <Route path="/diretrizes" element={<Layout><Diretrizes /></Layout>} />
        <Route path="/sobre" element={<Layout><Sobre /></Layout>} />
        <Route path="/parceiros" element={<Layout><Parceiros /></Layout>} />
        <Route path="/curso" element={<Layout><Curso /></Layout>} />
        <Route path="/descricaoCurso/:id" element={<Layout><DescricaoCurso /></Layout>} />
        <Route path="/Forum" element={<Layout><Forum /></Layout>} />
        <Route path="/mapa" element={<Layout><Mapa /></Layout>} />
        <Route path="/paginaInicial" element={<Layout><PaginaInicial /></Layout>} />

        {/* Rotas privadas */}
        <Route path="/invalidScanner" element={<Layout><PrivateRoute><InvalidScanner /></PrivateRoute></Layout>} />
        <Route path="/scanner" element={<Layout><PrivateRoute><Scanner /></PrivateRoute></Layout>} />
        <Route path="/dashboard" element={<Layout><PrivateRoute><Dashboard /></PrivateRoute></Layout>} />
        <Route path="/cupons" element={<Layout><PrivateRoute><CuponsDashboard /></PrivateRoute></Layout>} />
        <Route path="/CuponsUsados" element={<Layout><PrivateRoute><CuponsUsados /></PrivateRoute></Layout>} />
        <Route path="/forumChat" element={<Layout><PrivateRoute><ForumChat /></PrivateRoute></Layout>} />
        <Route path="/meusCursos" element={<Layout><PrivateRoute><MeusCursos /></PrivateRoute></Layout>} />
        <Route path="/Certificados" element={<Layout><PrivateRoute><Certificados /></PrivateRoute></Layout>} />

        {/* Rotas do admin */}
        <Route path="/dashboardAdmin" element={<Layout><AdminRoute><DashboardAdmin /></AdminRoute></Layout>} />
        <Route path="/gestaoCursos" element={<Layout><AdminRoute><GestaoCursos /></AdminRoute></Layout>} />
        <Route path="/gestaoForum" element={<Layout><AdminRoute><GestaoForum /></AdminRoute></Layout>} />

        {/*  Rota curinga */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;