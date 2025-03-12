import React from 'react';
import cursos from '../../data/cursos.json';
import CardCurso from '../../components/CardCurso/CardCurso';
import NavBar from '../../components/Navbar/Navbar';
import BarraPesquisa from '../../components/BarraPesquisa/barra';
import Footer from '../../components/Footer/Footer'
import './Curso.css'; 

function Curso() {
    return (
        <>
            <NavBar />
            <div className="cursos-container"> 
                <BarraPesquisa />
                <div className="cursos-list"> 
                    {cursos.cursos.map(curso => (
                        <CardCurso key={curso.id} curso={curso} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
  
  export default Curso;