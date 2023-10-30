import { Link } from "react-router-dom"
import "./Favoritos.css"
import { useContext } from "react"
import { MyContext } from "./MyContext";
import Creaciones from "./Creaciones.json"

export default function Home() {
    const {creaciones, setCreaciones } = useContext(MyContext);
    setCreaciones(Creaciones)

    return (
        <div className="container">
            <p>{creaciones[1].nombre}</p>
        </div>
    )

}