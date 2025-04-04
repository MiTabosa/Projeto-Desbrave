import React from 'react';
import './CardCurso.css';
import Button from '../Button/Button';

function CardCurso({ curso }) {
    const handleButtonClick = () => {
        window.location.href = `/descricaoCurso/${curso.idcursos}`;
    };

    return (
        <div className='cardCurso'>
            <p className='cursoCategoria'>{curso.categoria}</p>
            <h2>{curso.titulo}</h2>
            <p>{curso.descricao}</p>
            <p className="cargaHoraria"><strong>Carga Horária:</strong> {curso.cargaHoraria}</p>
            <div className='buttonContainer'>
                <Button
                    className="cursoButton"
                    text="Saiba Mais"
                    color="#0367A5"
                    size="full"
                    onClick={handleButtonClick}
                />
            </div>
        </div>
    );
}

export default CardCurso;