import React from 'react';
import './CardCurso.css';

function CardCurso({ curso }) {
    return (
        <div className='cardCurso'>
            <p>{curso.categoria}</p>
            <h2>{curso.nome}</h2>
            <p>{curso.descricao}</p>
            <p><strong>Carga Horária:</strong> {curso.cargaHoraria}</p>
            <a href={curso.urlExterna} target="_blank" rel="noopener noreferrer">Acessar Curso</a>
        </div>
    );
}

export default CardCurso;