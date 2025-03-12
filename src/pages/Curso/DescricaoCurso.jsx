import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cursos from '../../data/cursos.json';
import './DescricaoCurso.css';

function DescricaoCurso() {
    const { id } = useParams(); 
    const navigate = useNavigate();

    const curso = cursos.cursos.find(curso => curso.id === parseInt(id));

    if (!curso) {
        return <div>Curso não encontrado!</div>;
    }

    const handleExternalLinkClick = () => {
        window.open(curso.urlExterna, '_blank'); 
    };

    return (
        <div className="descricao-curso-container">
            <h1>{curso.nome}</h1>
            <p><strong>Descrição:</strong> {curso.descricao}</p>
            <p>{curso.empresa}</p>
            <button onClick={handleExternalLinkClick} className="external-link-button">
                Acessar Curso
            </button>
            <button onClick={() => navigate('/')} className="back-button">
                Voltar para a lista de cursos
            </button>
        </div>
    );
}

export default DescricaoCurso;