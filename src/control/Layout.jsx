import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
    return (
        <div>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Choose</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sort">Sort</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/type">Type</Link>
                    </li>
                </ul>
            </nav>
            <article>
                <Outlet />
            </article>
        </div>
    );
};

export default Layout;