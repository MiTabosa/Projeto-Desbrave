import { useState } from "react";
import "./barra.css";


function Barra ({ onSearch}){
    const [query, setQuery] = useState("")

    const handleInputChage = (event) => {
        setQuery(event.target.value);
    };
    const handleSearch = () => {
        onSearch(query);
    }

 return(
    <div className="bar-pesquisa">
        <input 
        type="text"
        placeholder="Pesquisar"
        value={query} 
        onChange={handleInputChage}
        />

    </div>
 );
};
export default Barra;
