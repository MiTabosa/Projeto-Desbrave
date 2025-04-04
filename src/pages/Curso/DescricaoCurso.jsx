import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import elementDesign from "../../assets/element-design.png";
import './DescricaoCurso.css';
import { api } from '../../service/api';

function DescricaoCurso() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [curso, setCurso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCurso() {
      try {
        const response = await api.get(`/cursos/${id}`);
        setCurso(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchCurso();
  }, [id]);

  const handleExternalLinkClick = () => {
    window.open(curso.urlExterna, '_blank');
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  if (!curso) return <div>Curso não encontrado!</div>;

  return (
    <>
      <div className="descricao-curso-container">
        <div className='descricaoText'>
            <h1>{curso.titulo}</h1>
            <p><strong>Descrição:</strong> {curso.descricao}</p>
        </div>
        <div className='empresaCurso'>
            <p><strong>Status:</strong> {curso.status}</p>
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