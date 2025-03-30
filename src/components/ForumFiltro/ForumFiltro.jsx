import React from 'react';
import './ForumFiltro.css';

const ForumFiltro = ({ categorias, filtroAtual, aoMudarFiltro }) => {
    return (
        <div className="forum-filtro-container">
            <label htmlFor="forum-filtro" className="forum-filtro-label">
                Filtrar por categoria:
            </label>
            <select
                id="forum-filtro"
                value={filtroAtual}
                onChange={(e) => aoMudarFiltro(e.target.value)}
                className="forum-filtro-select"
            >
                {categorias.map((categoria) => (
                    <option key={categoria} value={categoria}>
                        {categoria}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ForumFiltro;