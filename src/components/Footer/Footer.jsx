import React from "react";
import { Link } from "react-router";
import "./Footer.scss";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="navigation">
                <a href="">Услуги</a>
                <a href="">Контакты</a>
                <a href="">Проекты</a>
            </div>
            <div className="aboutCompany">
                <a href="/">2024 © ЭНЕРГОСТРОЙ</a>
                <Link to="/privacyPolicy" className="second" end>
                        Политика конфиденциальности
                </Link>
            </div>
            <div className="contacts__footer">
                <a href="">+7 (4742) 71-01-56</a>
                <a href="mailto:energo_stroy48@bk.ru?subject=Здравствуйте! Я отправляю это письмо через сайт вашей компании.">energo_stroy48@bk.ru</a>
            </div>
        </div>
    );
}

export default Footer;