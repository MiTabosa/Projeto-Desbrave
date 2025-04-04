import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cursos from '../../data/cursos.json';
import NavBar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import elementDesign from "../../assets/element-design.png";
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
    <>
      <div className="descricao-curso-container">
        <div className='descricaoText'>
            <h1>{curso.nome}</h1>
            <p><strong>Descrição:</strong> {curso.descricao}</p>
        </div>
        <div className='empresaCurso'>
            <p><strong>Empresa:</strong> {curso.empresa}</p>
            <div className="button-container">
            <Button
                className="heroButtonCursos"
                text="Acessar Curso"
                color="#0367A5"
                size="medium"
                onClick={handleExternalLinkClick} 
            />
            <Button
                className="heroButtonCursos"
                text="Voltar"
                color="#52bf04" 
                size="medium"
                onClick={() => navigate('/curso')}
            />
            </div>
        </div>
        <img
            className="pontos-image"
            src={elementDesign}
            alt="imagem de elemento"
        />
      </div>
    </>
  );
}

export default DescricaoCurso;