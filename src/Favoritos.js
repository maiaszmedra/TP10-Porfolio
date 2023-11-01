import { Link } from "react-router-dom"
import "./Info.css"
import { useCreaciones } from "./MyContext";

export default function Favoritos() {
    const { data } = useCreaciones();

    return (
        <div className="container">
            <p>favoritos</p>
        </div>
    )

}