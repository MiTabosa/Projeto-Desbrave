import React from 'react';
import './CardCurso.css';
import '../Button/Button'
import Button from '../Button/Button';

function CardCurso({ curso }) {
    const handleButtonClick = () => {
        window.open(curso.urlExterna, '_blank');
    };

        return (
            <div className='cardCurso'>
                <p className='cursoCategoria'>{curso.categoria}</p>
                <h2>{curso.nome}</h2>
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