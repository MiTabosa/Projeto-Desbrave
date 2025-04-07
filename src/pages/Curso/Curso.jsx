import React, { useState, useEffect } from 'react';
import { api } from '../../service/api';
import NavBar from '../../components/Navbar/Navbar';
import BarraPesquisa from '../../components/BarraPesquisa/barra';
import Carrossel from '../../components/Carrossel/Carrossel';
import Footer from '../../components/Footer/Footer';

import './Curso.css';

function Curso() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchCursos() {
    try {
      const response = await api.get('/cursos');
      setCursos(response.data);
    } catch (err) {
      setError('Erro ao carregar cursos');
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCursos();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredCursos = Array.isArray(cursos)
  ? cursos.filter((curso) =>
      curso.titulo.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : [];

  if (loading) {
    return <div className="loading">Carregando cursos...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <>
      <div className="cursos-container">
        <BarraPesquisa onSearch={handleSearch} />
        <div className="cursos-list">
        {filteredCursos.length > 0 ? (
            <Carrossel cards={filteredCursos} cardTipo="CardCurso" />
            ) : (
             <div className="no-results">Nenhum curso encontrado.</div>
            )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Curso;
