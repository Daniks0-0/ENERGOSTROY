import React from "react";
import { Link, NavLink,useLocation, useNavigate } from "react-router";
import "./Footer.scss";

const Footer = () => {
    const navigate = useNavigate(); // Инициализация хука
    const location = useLocation(); // Хук для текущего пути

    //функция для скролла и перехода на страницу
    const scrollToSection = (sectionId) =>{
        setTimeout(() =>{
            const section = document.getElementById(sectionId); //поиск элемента по id
            if(section){
                section.scrollIntoView({behavior:"smooth"});
            }
        }, 100)
    }

    const handleContactsClick = () => {
        if(location.pathname !== "/"){
            navigate("/"); // Переход на главную страницу
            // Скролл к разделу "Контакты"
            setTimeout(() => scrollToSection("contacts-id"), 100);
        }
        else{
            scrollToSection("contacts-id");
        }
        
    };

    const handleServicesClickfromProjects = () => {
        navigate("/"); // Переход на главную страницу
        // Скролл к разделу "Услуги"
        setTimeout(() => {
            const servicesSection = document.getElementById("servicesSection-id");
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    const data = new Date().getFullYear(); // Текущий год

    return (
        <div className="footer">
            <div className="navigation">
                <NavLink to="/"  onClick={handleServicesClickfromProjects}>Услуги</NavLink>
                <NavLink to="/" onClick={handleContactsClick}>Контакты</NavLink>
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
};

export default Footer;
