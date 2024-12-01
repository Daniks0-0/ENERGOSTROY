import React from "react";
import { Link } from "react-router";
import "./Navbar.scss";
import logo from "../../assets/mainlogo.svg";


const Navbar = () => {
    return (
        <nav>
        <div>
            <img src={logo} alt="" />
        </div>
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
                    <a href="">Контакты</a>
                </li>
                <li>
                    <a href="">Услуги</a>
                </li>
             
            </ul>
            <div className="contacts__header">
                <a href="tel:+74742710156">+7 (4742) 71-01-56</a>
                <a href="mailto:energo_stroy48@bk.ru?subject=Здравствуйте! Я отправляю это письмо через сайт вашей компании.">energo_stroy48@bk.ru</a>
            </div>
        </nav>
    );
}

export default Navbar;