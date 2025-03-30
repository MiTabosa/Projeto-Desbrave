import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa6';
import dadosForuns from '../../data/foruns.json'; 
import './ForumCard.css';

const ForumCard = ({ filtroAtual }) => {
  const [foruns, setForuns] = useState([]);

  useEffect(() => {
    setForuns(dadosForuns.foruns);
  }, []);

  const obterCorCategoria = (categoria) => {
    switch(categoria) {
      case 'Cultura': return '#0367A5';
      case 'Tecnologia': return '#2E8B57';
      case 'Cidadania Digital': return '#FF8C00';
      default: return '#0367A5';
    }
  };

  const forunsFiltrados = filtroAtual === 'Todas' 
    ? foruns 
    : foruns.filter(forum => forum.categoria === filtroAtual);

  return (
    <div className="forum-lista-container">
      {forunsFiltrados.map((forum) => {
        const corCategoria = obterCorCategoria(forum.categoria);
        
        return (
          <Link 
            to={`/forumChat/${forum.id}`} 
            className="forum-link" 
            key={forum.id}
          >
            <div 
              className="forum-card" 
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
              {/* <div className="forum-card-direita">
                <div 
                  className="forum-info-box" 
                  style={{ borderColor: corCategoria }}
                >
                  <p><strong>Mensagens</strong></p>
                  <p className="forum-valor">{forum.quantidade_mensagens}</p>
                </div>
                <div 
                  className="forum-info-box" 
                  style={{ borderColor: corCategoria }}
                >
                  <p><strong>Usuários Ativos</strong></p>
                  <p className="forum-valor">{forum.quantidade_usuarios_ativos}</p>
                </div>
              </div> */}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ForumCard;