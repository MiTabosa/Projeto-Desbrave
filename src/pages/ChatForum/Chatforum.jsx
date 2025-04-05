import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import './Chatforum.css';
import { FaUserAlt } from "react-icons/fa";
import { IoReturnUpBackOutline } from "react-icons/io5";

const Chatforum = () => {
    const navigate = useNavigate();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const bottomRef = useRef(null);
    useEffect => () {
        if(bottomRef.current){
            bottomRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }, [comments] 



    const addComment = async () => {
        if (newComment.trim() === "") return;

        const newPost = {
            user: "user",
            date: new Date().toLocaleDateString("pt-BR"),
            comment: newComment
        };

        try {
            const response = await fetch("http://localhost:8081/postagem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPost)
            });

            if (!response.ok) {
                throw new Error("Erro ao enviar comentário");
            }

            const savedComment = await response.json();
            setComments([...comments, savedComment]); 
            setNewComment("");

        } catch (error) {
            console.error(error);
        }
        setComments([...comments, newPost]);
        setNewComment("");
    };

    const handleBackToForums = () => {
        navigate("/forum");
    };

    return (
        <section className="chat-f">
            <span className="backpage">
                <IoReturnUpBackOutline size={24} />
                <button onClick={handleBackToForums} className="button-voltar-f">Voltar para seção anterior</button>
            </span>
            <h3 className="titulo-chat"></h3>

            <div className="comments-container">
                {comments.map((item, index) => (
                    <div key={index} className="box-chat">
                        <span className="cf-icon">
                            <FaUserAlt />
                        </span>
                        <div className="info-card">
                            <div className="user-date">
                                <h4>{item.user}</h4>
                                <p>{item.date}</p>
                            </div>
                            <p>{item.comment}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="comentar">
                <span className="bar-icon">
                    <FaUserAlt />
                </span>
                <input
                    type="text"
                    placeholder="Responder"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addComment();
                        }}}
                />
                <button className="button-enviar" onClick={addComment}>Enviar</button>
            </div>
        </section>
    );
};

export default Chatforum;