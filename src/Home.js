import { Link } from "react-router-dom"
import "./Home.css"
import {useContext} from "react"
import { MyContext } from "./MyContext";

export default function Home() {
    const {favoritos,setFavoritos}=useContext(MyContext);

    return (
        <div className="container">
            <p>porfolio</p>
        </div>
    )

}