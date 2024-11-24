import React from "react";
import { Link } from "react-router";
import "./Navbar.scss";


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" end>
                        Главная
                    </Link>
                </li>
                <li>
                    <Link to="/projects" end>
                        Проекты
                    </Link>

                </li>
                <li>
                    <Link to="/privacyPolicy" end>
                        Политика конфиденциальности
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;