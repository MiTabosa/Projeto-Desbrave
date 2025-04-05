// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import cursos from '../../data/cursos.json';
// import NavBar from '../../components/Navbar/Navbar';
// import Button from '../../components/Button/Button';
// import elementDesign from "../../assets/element-design.png";
// import './DescricaoCurso.css';

// function DescricaoCurso() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const curso = cursos.cursos.find(curso => curso.id === parseInt(id));

//   if (!curso) {
//     return <div>Curso não encontrado!</div>;
//   }

//   const handleExternalLinkClick = () => {
//     window.open(curso.urlExterna, '_blank');
//   };

//   return (
//     <>
//       <div className="descricao-curso-container">
//         <div className='descricaoText'>
//             <h1>{curso.nome}</h1>
//             <p><strong>Descrição:</strong> {curso.descricao}</p>
//         </div>
//         <div className='empresaCurso'>
//             <p><strong>Empresa:</strong> {curso.empresa}</p>
//             <div className="button-container">
//             <Button
//                 className="heroButtonCursos"
//                 text="Acessar Curso"
//                 color="#0367A5"
//                 size="medium"
//                 onClick={handleExternalLinkClick} 
//             />
//             <Button
//                 className="heroButtonCursos"
//                 text="Voltar"
//                 color="#52bf04" 
//                 size="medium"
//                 onClick={() => navigate('/curso')}
//             />
//             </div>
//         </div>
//         <img
//             className="pontos-image"
//             src={elementDesign}
//             alt="imagem de elemento"
//         />
//       </div>
//     </>
//   );
// }

// export default DescricaoCurso;



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

    useEffect(() => {
        const fetchCurso = async () => {
            try {
                // Modo desenvolvimento (mock)
                const mockCurso = {
                    "id": 1,
                    "nome": "Curso de JavaScript",
                    "descricao": "Aprenda JavaScript do zero, desde os conceitos básicos até tópicos avançados como manipulação do DOM, eventos, e programação assíncrona. Ideal para quem deseja se tornar um desenvolvedor Front-end ou Full-stack.",
                    "categoria": "Front-end",
                    "cargaHoraria": "20 horas",
                    "urlExterna": "https://www.betrybe.com/curso-de-programacao-javascript-do-zero",
                    "empresa": "Empresa C"
                };
                setCurso(mockCurso);
                setLoading(false);
                
                // Modo produção (descomente quando o backend estiver pronto)
                // const response = await api.get(`/cursos/${id}`);
                // setCurso(response.data);
                // setLoading(false);
            } catch (err) {
                setError("Erro ao carregar curso");
                setLoading(false);
            }
        };
        
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
                    <h1>{curso.nome}</h1>
                    <p><strong>Descrição:</strong> {curso.descricao}</p>
                </div>
                <div className='empresaCurso'>
                    <p><strong>Empresa:</strong> {curso.empresa}</p>
                    <div className="button-container">
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