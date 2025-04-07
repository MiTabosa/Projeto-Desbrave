import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import './Chatforum.css';

const Chatforum = () => {
  const { forumId } = useParams();
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const bottomRef = useRef(null);

  const mockComments = [
    {
      user: "João Silva",
      date: new Date().toLocaleDateString("pt-BR"),
      comment: "Olá pessoal, como vocês estão encontrando o curso?"
    },
    {
      user: "Maria Oliveira",
      date: new Date().toLocaleDateString("pt-BR"),
      comment: "Estou adorando! As aulas são muito bem explicadas."
    }
  ];

  useEffect(() => {
    setComments(mockComments);
  }, [forumId]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [comments]);

  const addComment = () => {
    if (newComment.trim() === "") return;

    const newPost = {
      user: "Você",
      date: new Date().toLocaleDateString("pt-BR"),
      comment: newComment
    };

    setComments([...comments, newPost]);
    setNewComment("");
  };

  return (
    <section className="chat-f">
      <span className="backpage">
        <IoReturnUpBackOutline size={24} />
        <button onClick={() => navigate(-1)} className="button-voltar-f">
          Voltar para seção anterior
        </button>
      </span>

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
          onKeyDown={(e) => e.key === 'Enter' && addComment()}
        />
        <button className="button-enviar" onClick={addComment}>
          Enviar
        </button>
      </div>
    </section>
  );
};

export default Chatforum;