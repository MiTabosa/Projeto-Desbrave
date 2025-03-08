import Navbar from "../Navbar/Navbar";
import missao from "../../assets/missao.png";
import Button from "../../components/Button/Button";
import { useState } from "react";
import Footer from "../Footer/Footer"
import visao from "../../assets/visao.png";
import valores from "../../assets/valores.png";
import "./Sobre.css";



function Sobre() {
    const [expanded, setExpanded] = useState(null);

    return (
        <div>
            <Navbar />
            <h1 className="text-titulo">Desbrave</h1>
            <h2 className="text-subtitulo">O FUTURO DA EDUCAÇÃO DIGITAL!</h2>
            <p className="text">Somos uma plataforma que une cultura, tecnologia e aprendizado para <br/>
                jovens explorarem o mundo digital de forma consciente e criativa.
            </p>

            <div className="cards-container">
                <div className="card-m">
                    <h3 className="text-m">MISSÃO</h3>
                    <img src={missao} alt="MISSÃO" />
                    {expanded === "missao" ? (
                        <>
                            <button className={`botao-fechar botao-${expanded}`} onClick={() => setExpanded(null)}>✖</button>
                            <p className="text-missao">Promover educação digital e cultura de forma inclusiva e interativa, conectando jovens <br/>
                                a oportunidades que ampliam perspectivas e estimulam o pensamento crítico. <br/>
                                Nosso compromisso é capacitar indivíduos para explorarem o mundo digital com responsabilidade, <br/>
                                criatividade e consciência social.
                            </p>
                        </>
                    ) : (
                        <Button text="Saiba mais" color="#D98D30" size="medium" onClick={() => setExpanded("missao")} />
                    )}
                </div>


                <div className="card-v">
                    <h3 className="text-v">VISÃO</h3>
                    <img src={visao} alt="VISÃO" />
                    {expanded === "visao" ? (
                        <>
                            <button className={`botao-fechar botao-${expanded}`} onClick={() => setExpanded(null)}>✖</button>
                            <p className="text-visao">Ser referência nacional em educação digital e cidadania, inspirando jovens a aprender <br/>
                                com curiosidade e engajamento. Buscamos um futuro com aprendizado acessível, dinâmico <br/>
                                e alinhado às realidades culturais e tecnológicas do Brasil, promovendo uma sociedade <br/>
                                mais informada, participativa e inovadora.
                            </p>
                        </>
                    ) : (
                        <Button text="Saiba mais" color="#0367A5" size="medium" onClick={() => setExpanded("visao")} />
                    )}
                </div>

                <div className="card-vlr">
                    <h3 className="text-vlr">VALORES</h3>
                    <img src={valores} alt="VALORES" />
                    {expanded === "valores" ? (
                        <>
                            <button className={`botao-fechar botao-${expanded}`} onClick={() => setExpanded(null)}>✖</button>
                            <p className="text-valores">O Desbrave promove inclusão, garantindo acesso ao conhecimento para todos. <br />
                                Valorizamos inovação, colaboração e diversidade cultural, incentivando a responsabilidade digital <br />
                                com ética e segurança. Acreditamos na autonomia dos jovens, capacitando-os a protagonizar <br />
                                seu aprendizado.
                            </p>
                        </>
                    ) : (
                        <Button text="Saiba mais" color="#35A150" size="medium" onClick={() => setExpanded("valores")} />
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Sobre;