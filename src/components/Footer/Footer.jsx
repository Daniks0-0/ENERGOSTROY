import React from "react";
import { Link } from "react-router";
import "./Footer.scss";

const Footer = () => {
    const data = new Date().getFullYear(); //текущий год
    return (
        <div className="footer">
            <div className="navigation">
                <a href="#servicesSection-id">Услуги</a>
                <a href="#contacts-id">Контакты</a>
                <Link to="/projects" end>Проекты</Link>
            </div>
            <div className="aboutCompany">
                <a href="/"> {data} © ЭНЕРГОСТРОЙ</a>
                <Link to="/privacyPolicy" className="second" end>
                    Политика конфиденциальности
                </Link>
            </div>
            <div className="contacts__footer">
                <a href="tel:+74742710156">+7 (4742) 71-01-56</a>
                <a href="mailto:energo_stroy48@bk.ru?subject=Здравствуйте! Я отправляю это письмо через сайт вашей компании.">energo_stroy48@bk.ru</a>
            </div>
        </div>
    );
}

export default Footer;