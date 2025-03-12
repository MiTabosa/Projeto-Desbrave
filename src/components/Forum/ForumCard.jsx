import React from "react";
import "./ForumCard.css"
import { FaUsers } from "react-icons/fa6";



const data = [
    {title:"SEGURANÇA DIGITAL", messages: 1000, activeUsers:15},
    {title:"SEGURANÇA DIGITAL", messages: 1000, activeUsers:15},
    {title:"SEGURANÇA DIGITAL", messages: 1000, activeUsers:15}
]
const ForumCard = ({title, messages, activeUsers}) => {
    return (
        <div className="card-forum">
          
            <div className="card-left"> 
            <span className="fcard-icon"><FaUsers/></span>
            <h2 className="card-title">{title}</h2>
        </div>
        <div className="card-right">
        <div className="card-box">
          <p><strong>Mensagens</strong></p>
          <p className="valor">{messages}</p>
        </div>
        <div className="card-box">
          <p><strong>Usuários Ativos</strong></p>
          <p className="valor"> {activeUsers} Usuários</p>
        </div>
      </div>
    </div>
       

    );
};
const App = () => {
    return (
      <div className="container-forum">
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






