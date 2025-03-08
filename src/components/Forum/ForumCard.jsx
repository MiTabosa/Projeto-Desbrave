import React from "react";
import "./ForumCard.css"

const data = [
    {title:"SEGURANÇA DIGITAL", messages: 1000, activeUsers:15},
    {title:"SEGURANÇA DIGITAL", messages: 1000, activeUsers:15},
    {title:"SEGURANÇA DIGITAL", messages: 1000, activeUsers:15}
]
const ForumCard = ({title, messages, activeUsers}) => {
    return (
        <div className="card-forum">
            <div className="card-left"> 
            <span className="card-icon"></span>
            <h2 className="card-title">{title}</h2>
        </div>
        <div className="card-right">
        <div className="card-box">
          <p>Mensagens</p>
          <p className="bold">{messages}</p>
        </div>
        <div className="card-box">
          <p>Usuários Ativos</p>
          <p className="bold">{activeUsers} Usuários</p>
        </div>
      </div>
    </div>
       

    );
};
const App = () => {
    return (
      <div className="container">
        {data.map((item, index) => (
          <ForumCard
            key={index}
            title={item.title}
            messages={item.messages}
            activeUsers={item.activeUsers}
          />
        ))}
      </div>
    );
  };
  
  export default App;






