import React from "react";
import { Link } from "react-router";
import "./Navbar.scss";
import logo from "../../assets/mainlogo.svg";


const Navbar = () => {
    return (
        <nav>
        <div>
            <a href="/">
            <img src={logo} alt="Энергострой" />
            </a>
            
        </div>
            <ul>
                <li>
                    <Link to="/" end className="link">
                        Главная
                    </Link>
                </li>
                <li>
                    <Link to="/projects" end className="link">
                        Проекты
                    </Link>
                </li>
                <li>
                    <a href="#contacts-id" className="link">Контакты</a>
                </li>
                <li>
                    <a href="#servicesSection-id" className="link">Услуги</a>
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