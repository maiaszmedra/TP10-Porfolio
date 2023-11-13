import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const MyContext = createContext();

export function ContextProvider({ children }) {
    const [favoritos, setFavoritos] = useState([]);

    const agregarFavorito = (proyecto) => {
        setFavoritos([...favoritos, proyecto]);
    };

    const eliminarFavorito = (proyecto) => {
        setFavoritos((prevFavoritos) =>
            prevFavoritos.filter((favorito) => favorito.id !== proyecto.id)
        );
    }
    const [creaciones, setCreaciones] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('../Creaciones.json');
                setCreaciones(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <MyContext.Provider 
        value={{
            creaciones, 
            favoritos,
            agregarFavorito,
            eliminarFavorito,
        }}>
            {children}
        </MyContext.Provider>
    );
}

export function useCreaciones() {
    return useContext(MyContext);
}