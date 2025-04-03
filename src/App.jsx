import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
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

  const Layout = ({ children }) => {
    const hideNavbarPaths = [
      '/login',
      '/cadastro',
      '/esqueceuSenha',
      '/recuperarSenha',
      '/redefinirSenha',
      '/dashboard',
      '/scanner',
      '/diretrizes',
      '/cupons',
      '/CuponsUsados',
      '/meusCursos',
      '/Certificados',
      '/dashboardAdmin'
    ];
    const shouldShowNavbar = !hideNavbarPaths.includes(window.location.pathname);

    return (
      <>
        {shouldShowNavbar && (isLogged ? <NavbarLogado userData={userData} /> : <Navbar />)}
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
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Login setIsLogged={setIsLogged} setUserData={setUserData} />} />
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

        {/* Rotas Privadas */}
        <Route path="/dashboard" element={<PrivateRoute><Layout><Dashboard /></Layout></PrivateRoute>} />
        <Route path="/invalidScanner" element={<PrivateRoute><Layout><InvalidScanner /></Layout></PrivateRoute>} />
        <Route path="/scanner" element={<PrivateRoute><Layout><Scanner /></Layout></PrivateRoute>} />
        <Route path="/cupons" element={<PrivateRoute><Layout><CuponsDashboard /></Layout></PrivateRoute>} />
        <Route path="/CuponsUsados" element={<PrivateRoute><Layout><CuponsUsados /></Layout></PrivateRoute>} />
        <Route path="/forumChat" element={<PrivateRoute><Layout><ForumChat /></Layout></PrivateRoute>} />
        <Route path="/meusCursos" element={<PrivateRoute><Layout><MeusCursos /></Layout></PrivateRoute>} />
        <Route path="/Certificados" element={<PrivateRoute><Layout><Certificados /></Layout></PrivateRoute>} />

        {/* Rotas de Admin */}
        <Route path="/dashboardAdmin" element={<AdminRoute><Layout><DashboardAdmin /></Layout></AdminRoute>} />
        <Route path="/gestaoCursos" element={<AdminRoute><Layout><GestaoCursos /></Layout></AdminRoute>} />
        <Route path="/gestaoForum" element={<AdminRoute><Layout><GestaoForum /></Layout></AdminRoute>} />

        {/* Rota curinga */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;