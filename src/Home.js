import { Link } from "react-router-dom"
import "./Home.css"
import { useCreaciones } from "./MyContext";

export default function Home() {
    const { data } = useCreaciones();

    return (
        <section class="bgimage" id="home">
        <div class="container-fluid">
            <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                <h2 class="hero_title">Maia Szmedra</h2>
                <p class="hero_desc">Mi portfolio como estudiante de Informática en ORT Argentina</p>
            </div>
            </div>
        </div>
        </section>
    )

}