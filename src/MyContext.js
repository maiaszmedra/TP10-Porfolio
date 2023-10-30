import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ContextProvider = createContext();

export function MyContext({ children }) {
const [creaciones, setCreaciones] = useState(null);



useEffect(() => {
async function fetchData() {
    try {
    const response = await axios.get('Creaciones.json');
    setCreaciones(response.data);
    } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    }
}

fetchData();
}, []);

return (
<MyContext.Provider value={{ creaciones }}>
    {children}
</MyContext.Provider>
);
}

export function useCreaciones() {
return useContext(MyContext);
}