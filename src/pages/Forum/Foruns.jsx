import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Barra from "../../components/BarraPesquisa/barra";
import ForumCard from "../../components/Forum/ForumCard";
import ForumFiltro from "../../components/ForumFiltro/ForumFiltro";
import './Foruns.css';

function Foruns(){
    const [filtro, setFiltro] = useState('Todas');
    
    // Exemplo de categorias - substitua pelos seus dados reais
    const categorias = ['Todas', 'Cultura', 'Tecnologia', 'Cidadania Digital'];
    
    const handleSearch = (searchQuery) => {
        console.log("Pesquisando: ", searchQuery);
    }
    
    return(
        <div className="forum">
            <Navbar/>
            <section className="hero-forum">
                <div className="text-forum">
                    <h2 className="titulo-forum">Fóruns da Comunidade</h2>
                    <p>Um espaço para trocar ideias sobre cidadania digital, cultura de Recife e tecnologia. Entre na conversa,  <br/> faça perguntas e compartilhe seus insights com outros aprendizes.</p>
                    <div className="areaDePesquisaForum">
                        {/* <Barra onSearch={handleSearch} /> */}
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