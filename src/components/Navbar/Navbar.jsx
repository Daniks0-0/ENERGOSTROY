import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import "./Navbar.scss";
import logo from "../../assets/mainlogo.svg";
import mobileLogo from "../../assets/logoMobile.svg";


const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false); // Состояние для управления меню
    //для отключение скролла при открытие меню
    useEffect(()=>{
        if(menuOpen){
            //отключаю скролл
            document.body.style.overflowY = "hidden";
            document.body.opacity = "0.2";

        }
        else{
            //включаю скролл
            document.body.style.overflowY = "";
            document.body.style.opacity = "1"; // Сброс значения
        }
        return () => {
            document.body.style.overflowY = "";
            document.body.style.opacity = "1";
        };

    }, [menuOpen]);
    //обработчки для "главная"
    const handleMainClick = () => {
        navigate("/"); //переход на главную страницу
        //скролл к разделу "главная"
        setTimeout( () =>{
            const mainSection = document.getElementById("main");
            if(mainSection){
                mainSection.scrollIntoView({behavior:"smooth"});
            }
        }, 100);
        setMenuOpen(false); //закрываем меню после нажатия на ссылку
    };
    //обработчки для "контакты"
    const handleContactsClick = () => {
        navigate("/"); //переход на главную страницу
        //скролл к разделу "Контакты"
        setTimeout(() => {
            const contactsSection = document.getElementById("contacts-id");
            if (contactsSection) {
                contactsSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
        setMenuOpen(false); //закрываем меню после нажатия на ссылку
    };
    //обработчки для "Услуги"
    const handleServicesClick = () => {
        navigate("/");
        //скролл к разделу "Услуги"
        setTimeout(() => {
            const servicesSection = document.getElementById("servicesSection-id");
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100); //100 задержка для прогрузки страницы
        setMenuOpen(false); //закрываем меню после нажатия на ссылку
    };
    //кнопка бургер меню
    const handleBurgerClick = () => {
        setMenuOpen(!menuOpen); // Переключение состояния меню
    };

    return (
        <div>
            <button
                className={`burger ${menuOpen ? "open" : ""}`}
                id="button_id"
                onClick={handleBurgerClick}
            > 
            {/* разметка для бургер меню */}
                <div className="burger__line"></div>
                <div className="burger__line"></div>
                <div className="burger__line"></div>
            </button>
            <nav className={`menu ${menuOpen ? "open" : ""}`}>
                <div>
                    <a href="/">
                        <img src={logo} alt="Энергострой" />
                        <img src = {mobileLogo} alt="Энергострой" className="logoMobile"/>
                    </a>
                </div>
                <ul className={`for-PC ${menuOpen ? "active" : ""}`}>                     {/*добавляем класс active к элементу, если значение переменной menuOpen равно true. */}
                    <li>
                        <NavLink to="/" end className="link" onClick={handleMainClick}>
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" end className="link" onClick={() => setMenuOpen(false)}>
                            Проекты
                        </NavLink>
                    </li>
                    <li>
                        <a onClick={handleContactsClick} className="link">
                            Контакты
                        </a>
                    </li>
                    <li>
                        <a onClick={handleServicesClick} className="link">
                            Услуги
                        </a>
                    </li>
                </ul>
                <div className="contacts__header">
                    <a href="tel:+74742710156">+7 (4742) 71-01-56</a>
                    <a href="mailto:energo_stroy48@bk.ru?subject=Здравствуйте! Я отправляю это письмо через сайт вашей компании.">
                        energo_stroy48@bk.ru
                    </a>
                </div>
            </nav>
        </div>
    );
}




export default Navbar;