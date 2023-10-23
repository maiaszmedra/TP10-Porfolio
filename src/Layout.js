import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li className="icon">
                        <Link to="/home">Maia Szmedra</Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/info"> Sobre mi</Link>
                    </li>
                    <li>
                        <Link to="/creaciones"> Mis creaciones</Link>
                    </li>
                    
                    <li>
                        <Link to="/favoritos"> Favoritos</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />

        </>

    );

};
export default Layout