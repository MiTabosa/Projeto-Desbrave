import React, { useState } from 'react';
import cursos from '../../data/cursos.json';
import CardCurso from '../../components/CardCurso/CardCurso';
import NavBar from '../../components/Navbar/Navbar';
import BarraPesquisa from '../../components/BarraPesquisa/barra';
import Footer from '../../components/Footer/Footer';
import Carrossel from '../../components/Carrossel/Carrossel';
import './Curso.css';

function Curso() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredCursos = cursos.cursos.filter((curso) =>
        curso.nome.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <NavBar />
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