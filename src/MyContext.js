import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import * as Creaciones from "./Creaciones.json"

const MyContext = createContext();

export function ContextProvider({ children }) {
const [creaciones, setCreaciones] = useState(null);



useEffect(() => {
function fetchData() {
    try {
    const response = Creaciones
    setCreaciones(response);
    console.log(response)
    } catch (error) {
    console.error('Error fetching data:', error);
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