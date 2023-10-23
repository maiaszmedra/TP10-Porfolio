import { Link } from "react-router-dom"
import "./Info.css"
import {useContext} from "react"
import { MyContext } from "./MyContext";

export default function Info() {
    const {favoritos,setFavoritos}=useContext(MyContext);

    return (
        <div className="container">
            <p>hola</p>
        </div>
    )

}