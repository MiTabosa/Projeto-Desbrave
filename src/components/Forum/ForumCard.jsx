import React from "react";
import { Link } from "react-router-dom"; // Importe o Link
import "./ForumCard.css";
import { FaUsers } from "react-icons/fa6";

const data = [
  { id: 1, title: "SEGURANÇA DIGITAL", messages: 1000, activeUsers: 15 },
  { id: 2, title: "PROGRAMAÇÃO", messages: 500, activeUsers: 10 },
  { id: 3, title: "DESIGN", messages: 300, activeUsers: 8 },
];

const ForumCard = ({ id, title, messages, activeUsers }) => {
  return (

    <Link to={`/forumChat`} className="card-link">
      <div className="card-forum">
        <div className="card-left">
          <span className="fcard-icon">
            <FaUsers />
          </span>
          <h2 className="card-title">{title}</h2>
        </div>
        <div className="card-right">
          <div className="card-box">
            <p>
              <strong>Mensagens</strong>
            </p>
            <p className="valor">{messages}</p>
          </div>
          <div className="card-box-1">
            <p>
              <strong>Usuários Ativos</strong>
            </p>
            <p className="valor">{activeUsers} Usuários</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ForumChat = () => {
  return (
    <div className="container-forum">
      {data.map((item) => (
        <ForumCard
          key={item.id}
          id={item.id}
          title={item.title}
          messages={item.messages}
          activeUsers={item.activeUsers}
        />
      ))}
    </div>
  );
};

export default ForumChat;