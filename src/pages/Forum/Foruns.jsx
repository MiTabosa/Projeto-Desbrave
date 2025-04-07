import React, { useState } from 'react';
import ForumCard from '../../components/Forum/ForumCard';
import ForumFiltro from '../../components/ForumFiltro/ForumFiltro';
import './Foruns.css';

function Foruns() {
  const [filtro, setFiltro] = useState('Todas');
  const categorias = ['Todas', 'Cultura', 'Tecnologia', 'Cidadania Digital'];

  return (
    <div className="forum">
      <section className="hero-forum">
        <div className="text-forum">
          <h2 className="titulo-forum">Fóruns da Comunidade</h2>
          <p>Um espaço para trocar ideias sobre cidadania digital, cultura de Recife e tecnologia.</p>
          <div className="areaDePesquisaForum">
            <ForumFiltro 
              categorias={categorias}
              filtroAtual={filtro}
              aoMudarFiltro={setFiltro}
            />
          </div>
        </div>
        
        <div className="container-forum">
          <ForumCard filtroAtual={filtro} />
        </div>
      </section>
    </div>
  );
}

export default Foruns;