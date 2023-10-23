import { Link } from "react-router-dom"
import "./Favoritos.css"
import {useContext} from "react"
import { MyContext } from "./MyContext";

export default function Favoritos() {
    const {favoritos,setFavoritos}=useContext(MyContext);

    return (
        <div className="container">
            <p>hola</p>
        </div>
    )

}