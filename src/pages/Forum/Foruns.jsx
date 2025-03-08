import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Barra from "../../components/BarraPesquisa/barra";;
import ForumCard from "../../components/Forum/ForumCard";
import './Foruns.css'


function Foruns(){
    const handleSearch = (searchQuery) => {
        console.log("Pesquisando: ", searchQuery);
    }
    return(
        
        <div className="forum">
            <Navbar/>
            <section className="hero-forum">
                <div className="text-hero">
            
                    <h2 className="titulo">Fóruns da Comunidade</h2>
                    <p>Um espaço para trocar ideias sobre cidadania digital, cultura de Recife e tecnologia. <br/> Entre na conversa, faça perguntas e compartilhe seus insights com outros aprendizes.</p>
                    <Barra onSearch={handleSearch} />
            
                </div>
            </section>
            <section>
                <div className="cotainer">
                    <ForumCard/>
                </div>
            </section>
            <Footer/>
        </div>
    );
    
}
export default Foruns;

