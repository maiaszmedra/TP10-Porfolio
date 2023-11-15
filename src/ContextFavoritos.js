import React, { createContext, useContext, useState } from 'react';

const ContextFavoritos = createContext();

export function ContextFavoritosProvider({ children }) {
    const [favoritos, setFavoritos] = useState([]);

    const agregarFavorito = (proyecto) => {
        setFavoritos([...favoritos, proyecto]);
    };

    const eliminarFavorito = (proyecto) => {
        setFavoritos((prevFavoritos) =>
            prevFavoritos.filter((favorito) => favorito.id !== proyecto.id)
        );
    }

    return (
        <ContextFavoritos.Provider 
        value={{
            favoritos,
            agregarFavorito,
            eliminarFavorito,
        }}>
            {children}
        </ContextFavoritos.Provider>
    );
}

export function useFavoritos() {
    return useContext(ContextFavoritos);
}