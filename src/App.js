import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js"
import Home from "./Home.js";
import Info from "./Info.js";
import Creaciones from "./Creaciones.js";
import Favoritos from "./Favoritos.js"
import { useState } from "react";
import './App.css';
import { ContextProvider } from "./MyContext.js";
import { ContextFavoritosProvider} from "./ContextFavoritos"



function App() {
  return (
    <ContextFavoritosProvider>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/info" element={<Info />}></Route>
            <Route path="/creaciones" element={<Creaciones />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </ContextProvider>
    </ContextFavoritosProvider>
  );
}

export default App;