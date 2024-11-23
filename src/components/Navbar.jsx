import React from "react";
import { Link } from "react-router";

const Navbar = () =>{
    return(
        <nav>
            <Link to="/" end>
            Home
            </Link>
            <Link to="/projects" end>
           Проекты 
            </Link>
            <Link to="/privacyPolicy" end>
            Политика конфиденциальности
            </Link>
        </nav>
    );
}

export default Navbar;