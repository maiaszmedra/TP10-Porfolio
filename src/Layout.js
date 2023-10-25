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
            <footer>
                <form class="colorful-form">
                    <div class="form-group">
                        <label class="form-label" for="name">Name:</label>
                        <input required="" placeholder="Enter your name" class="form-input" type="text"/>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="email">Email:</label>
                        <input required="" placeholder="Enter your email" class="form-input" name="email" id="email" type="email"/>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="message">Message:</label>
                        <textarea required="" placeholder="Enter your message" class="form-input" name="message" id="message"></textarea>
                    </div>
                    <button class="form-button" type="submit">Submit</button>
                </form>

            </footer>
            <Outlet />

        </>

    );

};
export default Layout