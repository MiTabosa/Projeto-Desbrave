// import React, { useState } from 'react';
// import cursos from '../../data/cursos.json';
// import CardCurso from '../../components/CardCurso/CardCurso';
// import NavBar from '../../components/Navbar/Navbar';
// import BarraPesquisa from '../../components/BarraPesquisa/barra';
// import Footer from '../../components/Footer/Footer';
// import Carrossel from '../../components/Carrossel/Carrossel';
// import './Curso.css';

// function Curso() {
//     const [searchQuery, setSearchQuery] = useState("");

//     const handleSearch = (query) => {
//         setSearchQuery(query);
//     };

//     const filteredCursos = cursos.cursos.filter((curso) =>
//         curso.nome.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <>
//             <div className="cursos-container">
//                 <BarraPesquisa onSearch={handleSearch} />
//                 <div className="cursos-list">
//                     <Carrossel cards={filteredCursos} cardTipo="CardCurso" />
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// }

// export default Curso;


import React, { useState, useEffect } from 'react';
import { api } from '../../service/api';
import CardCurso from '../../components/CardCurso/CardCurso';
import NavBar from '../../components/Navbar/Navbar';
import BarraPesquisa from '../../components/BarraPesquisa/barra';
import Footer from '../../components/Footer/Footer';
import Carrossel from '../../components/Carrossel/Carrossel';
import './Curso.css';

function Curso() {
    const [searchQuery, setSearchQuery] = useState("");
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCursos = async () => {
            try {
                // Modo desenvolvimento (mock)
                const mockCursos = [
                    {
                        "id": 1,
                        "nome": "Curso de JavaScript",
                        "descricao": "Aprenda JavaScript do zero, desde os conceitos básicos até tópicos avançados como manipulação do DOM, eventos, e programação assíncrona. Ideal para quem deseja se tornar um desenvolvedor Front-end ou Full-stack.",
                        "categoria": "Front-end",
                        "cargaHoraria": "20 horas",
                        "urlExterna": "https://www.betrybe.com/curso-de-programacao-javascript-do-zero",
                        "empresa": "Empresa C"
                      },
                      {
                        "id": 2,
                        "nome": "Curso de React",
                        "descricao": "Domine React em 30 dias, aprendendo a criar interfaces de usuário dinâmicas e reativas. O curso aborda desde os fundamentos do React até conceitos avançados como Hooks, Context API e integração com APIs externas.",
                        "categoria": "Front-end",
                        "cargaHoraria": "30 horas",
                        "urlExterna": "https://plataforma-externa.com/curso-react",
                        "empresa": "Empresa C"
                      },
                      {
                        "id": 3,
                        "nome": "Curso de Node.js",
                        "descricao": "Aprenda a construir APIs robustas e escaláveis com Node.js. O curso cobre desde os conceitos básicos de JavaScript no servidor até tópicos avançados como autenticação, banco de dados, e deploy de aplicações.",
                        "categoria": "Back-end",
                        "cargaHoraria": "25 horas",
                        "urlExterna": "https://plataforma-externa.com/curso-nodejs",
                        "empresa": "Empresa C"
                      }
                ];
                setCursos(mockCursos);
                setLoading(false);
                
                // Modo produção (descomente quando o backend estiver pronto)
                // const response = await api.get('/cursos');
                // setCursos(response.data);
                // setLoading(false);
            } catch (err) {
                setError("Erro ao carregar cursos");
                setLoading(false);
            }
        };
        
        fetchCursos();
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredCursos = cursos.filter((curso) =>
        curso.nome.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) return <div className="loading">Carregando cursos...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <>
            <div className="cursos-container">
                <BarraPesquisa onSearch={handleSearch} />
                <div className="cursos-list">
                    <Carrossel cards={filteredCursos} cardTipo="CardCurso" />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Curso;