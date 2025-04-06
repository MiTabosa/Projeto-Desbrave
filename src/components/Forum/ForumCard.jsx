import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa6';
import './ForumCard.css';

const ForumCard = ({ filtroAtual }) => {
  const [foruns, setForuns] = useState([]);
  const navigate = useNavigate();

  // Dados mockados - mesmo formato original
  const mockForuns = [
    {
      id: 1,
      nome: "Tecnologia em Recife",
      categoria: "Tecnologia",
      quantidade_mensagens: 24,
      quantidade_usuarios_ativos: 15
    },
    {
      id: 2,
      nome: "Cultura Local",
      categoria: "Cultura",
      quantidade_mensagens: 18,
      quantidade_usuarios_ativos: 12
    },
    {
      id: 3,
      nome: "Cidadania",
      categoria: "Cidadania Digital",
      quantidade_mensagens: 18,
      quantidade_usuarios_ativos: 12
    }
  ];

  useEffect(() => {
    setForuns(mockForuns);
    
    /* CÓDIGO PARA BACK-END (mantido comentado):
    const fetchForuns = async () => {
      try {
        const response = await fetch('http://localhost:8081/foruns');
        const data = await response.json();
        setForuns(data);
      } catch (error) {
        console.error("Erro:", error);
        setForuns(mockForuns); // Fallback
      }
    };
    fetchForuns();
    */
  }, []);

  const obterCorCategoria = (categoria) => {
    switch(categoria) {
      case 'Cultura': return '#0367A5';
      case 'Tecnologia': return '#2E8B57';
      case 'Cidadania Digital': return '#c69715';
      default: return '#0367A5';
    }
  };

  const handleCardClick = (forumId) => {
    navigate(`/chat/${forumId}`);
  };

  const forunsFiltrados = filtroAtual === 'Todas' 
    ? foruns 
    : foruns.filter(forum => forum.categoria === filtroAtual);

  return (
    <div className="forum-lista-container">
      {forunsFiltrados.map((forum) => {
        const corCategoria = obterCorCategoria(forum.categoria);
        
        return (
          <div 
            key={forum.id}
            className="forum-card"
            onClick={() => handleCardClick(forum.id)}
            style={{ borderColor: corCategoria }}
          >
            <div className="forum-card-esquerda">
              <span 
                className="forum-icone" 
                style={{ backgroundColor: corCategoria }}
              >
                <FaUsers />
              </span>
              <div>
                <h2 className="forum-titulo" style={{ color: corCategoria }}>
                  {forum.nome}
                </h2>
                <span 
                  className="forum-categoria-badge" 
                  style={{ backgroundColor: corCategoria }}
                >
                  {forum.categoria}
                </span>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default ForumCard;