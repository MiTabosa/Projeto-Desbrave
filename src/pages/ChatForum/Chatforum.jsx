import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import './Chatforum.css'
import { FaUserAlt } from "react-icons/fa";
import { IoReturnUpBackOutline } from "react-icons/io5";


const Chatforum = () => {
    const [comments, setComments] = useState([ //hook para armazenar o estado

        { user: "Livia Ferreira", date: "2 de janeiro de 2025", comment: "Olá! Não entendo muito de tecnologia, mas uso meu computador/tablet para estudar. Como posso protegê-lo contra ataques online e garantir que meus dados estejam seguros enquanto aprendo?" },

        { user: "Luiz Paulo", date: "12 de janeiro de 2025", comment: "Olá, Lívia! Mantenha o sistema operacional e os aplicativos sempre atualizados para corrigir falhas de segurança. Utilize um antivírus confiável e evite baixar arquivos de fontes desconhecidas. Ative senhas fortes e, se possível, a autenticação de dois fatores (2FA) para proteger acessos. Evite conectar-se a redes Wi-Fi públicas sem VPN, pois elas podem expor seus dados."}
    ]);
    const [newComment, setNewComment] = useState (""); //armazena oque é digitado no input

    //para adicionar um novo comentario
    const addComment = () => {
        if (newComment.trim() === "") return;
        const newPost = {
            user: "dTown",
            date: new Date().toLocaleDateString("pt-BR"),
            comment: newComment
        }
        //atualiza a lista de comentarios
        setComments([...comments,newPost]);
        setNewComment("");
    
    }
    return(

        <section className="chat-f">
            <Navbar/>

            <span className="backpage">
                <IoReturnUpBackOutline />
                <p>Voltar para seção anterior</p>
            </span>
        <h3 className="titulo-chat">Segurança Digital</h3>

                {/* para add comentario na tela */}
        {comments.map((item, index) => (
            <div key={index} className="box-chat">
                <span className="cf-icon">
                    <FaUserAlt />
                </span>
                <div className="info-card">
                    <h4>{item.user}</h4>
                    <p>{item.date}</p>
                    <p>{item.comment}</p>
                </div>
            </div>
            
        ))}
        
        <div className="comentar">
            <div className="textbar">
            {/* <p>Fazer um Comentário:</p> */}
            </div>
        

                <span className="bar-icon">
                    <FaUserAlt />
                </span>
                
                <input
                    type="text"
                    placeholder="Responder"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={addComment}>Enviar</button>
            </div>
        </section>
    );
};

export default Chatforum;