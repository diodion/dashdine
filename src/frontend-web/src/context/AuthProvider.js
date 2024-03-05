import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    // Caso o usuário selecione para manter logado na hora do login o cookie é salvo no localstorage
    const [persistente, setPersistente] = useState(JSON.parse(localStorage.getItem("persistente")) || false );

    return (
        <AuthContext.Provider value={{ auth, setAuth, persistente, setPersistente }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;