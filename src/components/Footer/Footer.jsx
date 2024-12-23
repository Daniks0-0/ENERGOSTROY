import React from "react";
import { Link, NavLink } from "react-router";
import "./Footer.scss";

const Footer = () => {
    const handleContactsClick = () => {
        navigate("/"); //переход на главную страницу
        //скролл к разделу "Контакты"
        setTimeout(() => {
            const contactsSection = document.getElementById("contacts-id");
            if (contactsSection) {
                contactsSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };
    const handleServicesClick = () => {
        navigate("/");
        //скролл к разделу "Услуги"
        setTimeout(() => {
            const servicesSection = document.getElementById("servicesSection-id");
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    const data = new Date().getFullYear(); //текущий год
    return (
        <div className="footer">
            <div className="navigation">
                <NavLink onClick={handleServicesClick}>Услуги</NavLink>
                <NavLink onClick={handleContactsClick}>Контакты</NavLink>
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