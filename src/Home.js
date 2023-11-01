import { Link } from "react-router-dom"
import "./Info.css"
import { useCreaciones } from "./MyContext";

export default function Home() {
    const { data } = useCreaciones();

    return (
        <div className="container">
            <p>home</p>
        </div>
    )

}