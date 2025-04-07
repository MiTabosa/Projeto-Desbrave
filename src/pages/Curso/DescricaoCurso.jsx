import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../service/api';
import NavBar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import elementDesign from "../../assets/element-design.png";
import './DescricaoCurso.css';

function DescricaoCurso() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [curso, setCurso] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchCurso = async () => {
        console.log(id)
        try {
            const response = await api.get(`/cursos/${id}`);
            setCurso(response.data);
            setLoading(false);
        } catch (err) {
            setError("Erro ao carregar curso");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCurso();
    }, [id]);

    const handleExternalLinkClick = () => {
        if (curso?.urlExterna) {
            window.open(curso.urlExterna, '_blank');
        }
    };

    if (loading) return <div className="loading">Carregando...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!curso) return <div>Curso não encontrado!</div>;

    return (
        <>
            <div className="descricao-curso-container">
                <div className='descricaoText'>
                    <h1>{curso.titulo}</h1>
                    <p><strong>Descrição:</strong> {curso.descricao}</p>
                </div>
                    <div className="button-container-desc-curso">
                        {curso.urlExterna && (
                            <Button
                                className="heroButtonCursos"
                                text="Acessar Curso"
                                color="#0367A5"
                                size="medium"
                                onClick={handleExternalLinkClick} 
                            />
                        )}
                        <Button
                            className="heroButtonCursos"
                            text="Voltar"
                            color="#52bf04" 
                            size="medium"
                            onClick={() => navigate('/curso')}
                        />
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