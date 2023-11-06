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
            <footer>
                <form className="colorful-form">
                    <div className="form-group">
                        <label className="form-label" for="email">Email:</label>
                        <input required="" placeholder="Enter your email" className="form-input" name="email" id="email" type="email"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="message">Mensaje:</label>
                        <textarea required="" placeholder="Enter your message" className="form-input" name="message" id="message"></textarea>
                    </div>
                    <button className="form-button" type="submit">Enviar</button>
                </form>
                
            </footer>

        </>

    );

};
export default Layout