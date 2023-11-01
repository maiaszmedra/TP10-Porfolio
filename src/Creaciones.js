import { Link } from "react-router-dom"
import "./Info.css"
import { useCreaciones } from "./MyContext";

export default function Info() {
    const { data } = useCreaciones();
    console.log(data)

    return (
        <div className="container">
            <p>hola</p>
        </div>
    )

}