import { Link } from "react-router-dom"
import "./Favoritos.css"
import { useFavoritos } from "./ContextFavoritos";
import { useCreaciones } from "./MyContext";

export default function Favoritos() {
    const { favoritos, agregarFavorito, eliminarFavorito } = useFavoritos();

    function doalert(event,creacion) {
        console.log(event, creacion);
        if (event.target.checked) {
            agregarFavorito(creacion);
            console.log("se agrego");
        } else {
            eliminarFavorito(creacion);
            console.log("zorcó")
        }
      }


    if (!favoritos) {
        return <div>
             <p>Aquí aparecerán tus creaciones favoritas</p>
            </div>;
    }

    return (
        <div>
            <div className="container">
                {favoritos.map((c) =>
                    <div class="card">
                        <div class="card__img">
                            <img src={c.image} class="card__img" /></div>
                        <div class="card__descr-wrapper">
                            <p class="card__title">
                                {c.nombre}
                            </p>
                            <p class="card__descr">
                                {c.descripcion}
                            </p>
                            <div class="card__links">
                                <div>
                                    <div class="heart-container" title="Like">
                                        <input type="checkbox" name="checkfield" class="checkbox" id={c.id}  onChange={(event) => doalert(event,c)}/>
                                        <div class="svg-container">
                                            <svg viewBox="0 0 24 24" class="svg-outline" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                                                </path>
                                            </svg>
                                            <svg viewBox="0 0 24 24" class="svg-filled" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                                                </path>
                                            </svg>
                                            <svg class="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                                <polygon points="10,10 20,20"></polygon>
                                                <polygon points="10,50 20,50"></polygon>
                                                <polygon points="20,80 30,70"></polygon>
                                                <polygon points="90,10 80,20"></polygon>
                                                <polygon points="90,50 80,50"></polygon>
                                                <polygon points="80,80 70,70"></polygon>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <a class="link" href={c.url}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )

}

