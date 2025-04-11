import { createContext, useContext, useState } from "react";

const AutenticacaoContext = createContext();

export const ProvedorAutenticacao = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const logar = (token) => {
    // lógica de login (pode colocar só setUsuario por enquanto)
    setUsuario({ token });
  };

  const deslogar = () => {
    localStorage.removeItem("usuarioLogado");
    localStorage.removeItem("token");
    setUsuario(null);
  };

  return (
    <AutenticacaoContext.Provider value={{ usuario, logar, deslogar }}>
      {children}
    </AutenticacaoContext.Provider>
  );
};

export const useAutenticacao = () => useContext(AutenticacaoContext);
