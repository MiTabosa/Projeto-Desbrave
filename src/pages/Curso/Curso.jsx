import React, { useState, useEffect } from 'react';
import CardCurso from '../../components/CardCurso/CardCurso';
import NavBar from '../../components/Navbar/Navbar';
import BarraPesquisa from '../../components/BarraPesquisa/barra';
import Footer from '../../components/Footer/Footer';
import Carrossel from '../../components/Carrossel/Carrossel';
import './Curso.css';
import { api } from '../../service/api';

function Curso() {
    const [searchQuery, setSearchQuery] = useState("");
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCursos() {
            try {
                const response = await api.get('/cursos');
                
                if (response.data && response.data.length > 0) {
                    setCursos(response.data);
                } else {
                    setCursos([]);
                    console.log("Nenhum curso cadastrado ainda");
                }
                setLoading(false);
            } catch (err) {
                console.error("Erro ao buscar cursos:", err);
                
                // Tratamento mais detalhado dos erros
                if (err.response) {
                    if (err.response.status === 404) {
                        setError("Endpoint não encontrado - verifique a URL");
                    } else if (err.response.status === 401) {
                        setError("Acesso não autorizado - faça login");
                    } else {
                        setError(`Erro no servidor: ${err.response.status}`);
                    }
                } else if (err.request) {
                    setError("Servidor não respondeu - verifique sua conexão");
                } else {
                    setError(`Erro ao configurar requisição: ${err.message}`);
                }
                
                setLoading(false);
            }
        }

        fetchCursos();
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredCursos = cursos.filter((curso) =>
        curso.titulo && curso.titulo.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <>
            <div className="cursos-container">
                <BarraPesquisa onSearch={handleSearch} />
                <div className="cursos-list">
                    {filteredCursos.length > 0 ? (
                        <Carrossel cards={filteredCursos} cardTipo="CardCurso" />
                    ) : (
                        <div className="no-courses-message">
                            Nenhum curso disponível no momento.
                            {cursos.length === 0 && " Tente novamente mais tarde."}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Curso;