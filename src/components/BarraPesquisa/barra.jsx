import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./barra.css";

function BarraPesquisa({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(query); 
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch(); 
        }
    };

    return (
        <div className="bar-pesquisa">
            <input
                type="text"
                placeholder="Pesquisar..."
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearch} className="search-buttonPesquisa">
                <FaSearch className="search-iconPesquisa" />
            </button>
        </div>
    );
}

export default BarraPesquisa;