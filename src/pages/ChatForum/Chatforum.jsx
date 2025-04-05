import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './Chatforum.css';
import { FaUserAlt } from "react-icons/fa";
import { IoReturnUpBackOutline } from "react-icons/io5";

// Dados mockados iniciais
const mockComments = [
  {
    id: 1,
    user: "João Silva",
    date: new Date().toLocaleDateString("pt-BR"),
    comment: "Olá pessoal, como vocês estão encontrando o curso?"
  },
  {
    id: 2,
    user: "Maria Oliveira",
    date: new Date().toLocaleDateString("pt-BR"),
    comment: "Estou adorando! As aulas são muito bem explicadas."
  }
];

const Chatforum = () => {
  const navigate = useNavigate();
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState("");
  const bottomRef = useRef(null);

  // Simula a chamada à API (será substituída quando o back-end estiver pronto)
  const api = {
    postComment: async (comment) => {
      // Simula um delay de rede
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Retorna o comentário com um ID fictício
      return {
        id: Math.floor(Math.random() * 10000),
        user: "Você", // Ou pegar do usuário logado
        date: new Date().toLocaleDateString("pt-BR"),
        comment: comment
      };
    }
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [comments]);

  const addComment = async () => {
    if (newComment.trim() === "") return;

    try {
      // Simula a chamada à API
      const savedComment = await api.postComment(newComment);
      
      // Adiciona o novo comentário à lista
      setComments([...comments, savedComment]);
      setNewComment("");
      
    } catch (error) {
      console.error("Erro ao adicionar comentário:", error);
      // Aqui você pode adicionar tratamento de erro para o usuário
    }
  };

  const handleBackToForums = () => {
    navigate("/forum");
  };

  return (
    <section className="chat-f">
      <span className="backpage">
        <IoReturnUpBackOutline size={24} />
        <button onClick={handleBackToForums} className="button-voltar-f">
          Voltar para seção anterior
        </button>
      </span>
      
      <h3 className="titulo-chat">Discussão do Curso</h3>

      <div className="comments-container">
        {comments.map((item) => (
          <div key={item.id} className="box-chat">
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
        <div ref={bottomRef} />
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
            }
          }}
        />
        <button className="button-enviar" onClick={addComment}>
          Enviar
        </button>
      </div>
    </section>
  );
};

export default Chatforum;