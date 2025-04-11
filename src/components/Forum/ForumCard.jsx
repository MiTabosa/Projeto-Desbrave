import React from 'react';
import { FaUsers } from 'react-icons/fa6';
import './ForumCard.css';

function ForumCard({ foruns, onForumClick }) {  
  const getCorTitulo = (titulo) => {
    switch (titulo) {
      case 'TECNOLOGIA':
        return '#c69715';
      case 'CIDADANIA_DIGITAL':
        return '#35A150';
      case 'CULTURA':
        return '#0367A5';
      default:
        return '#9e9e9e';
    }
  };

  return (
    <div className="forum-lista-container">
      {foruns.length > 0 ? (
        foruns.map((forum) => {
          const cor = getCorTitulo(forum.titulo);
          return (
            <div
              key={forum.id}
              className="forum-card"
              style={{ border: `3px solid ${cor}` }}
              onClick={() => onForumClick(forum.id)}  
            >
              <div className="forum-card-esquerda">
                <span 
                  className="forum-icone" 
                  style={{ backgroundColor: cor }}
                >
                  <FaUsers />
                </span>
                <div>
                  <h3
                    className="forum-titulo"
                    style={{ color: cor }}
                  >
                    {forum.titulo}
                  </h3>
                  <span className="forum-categoria-badge">{forum.categoria}</span>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="forum-card-vazio">Nenhum fórum disponível no momento.</p>
      )}
    </div>
  );
}

export default ForumCard;