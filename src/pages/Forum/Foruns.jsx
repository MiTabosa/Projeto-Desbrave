import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Adicionei esta importação
import { api } from '../../service/api';
import ForumCard from '../../components/Forum/ForumCard';
import './Foruns.css';

function Foruns() {
  const [foruns, setForuns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Adicionei o hook de navegação

  async function fetchForuns() {
    try {
      const response = await api.get('/forum');
      setForuns(response.data);
    } catch (err) {
      setError('Erro ao carregar fóruns');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const handleForumClick = (forumId) => {
    navigate(`/chat/${forumId}`);
  }

  useEffect(() => {
    fetchForuns();
  }, []);

  if (loading) {
    return <div className="loading">Carregando fóruns...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="forum">
      <section className="hero-forum">
        <div className="text-forum">
          <h2 className="titulo-forum">Fóruns da Comunidade</h2>
          <p>Um espaço para trocar ideias sobre cidadania digital, cultura de Recife e tecnologia.</p>
        </div>
        
        <div className="container-forum">
          <ForumCard 
            foruns={foruns} 
            onForumClick={handleForumClick}  
          />
        </div>
      </section>
    </div>
  );
}

export default Foruns;