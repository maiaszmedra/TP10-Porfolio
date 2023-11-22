import React, { createContext, useContext, useEffect, useState } from 'react';

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

    useEffect(() => {
        // storing input name
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }, [favoritos]);

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