import React from "react";
import { NavLink, useNavigate } from "react-router";
import "./Navbar.scss";
import logo from "../../assets/mainlogo.svg";



const Navbar = () => {

  

    const navigate = useNavigate();

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
    }

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
    }

    return (

         <nav>
                <div>
                    <a href="/">
                    <img src={logo} alt="Энергострой" />
                    </a>

                </div>
                    <ul className="for-PC">
                        <li>
                            <NavLink to="/" end className="link">
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" end className="link">
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
                        <a href="mailto:energo_stroy48@bk.ru?subject=Здравствуйте! Я отправляю это письмо через сайт вашей компании.">energo_stroy48@bk.ru</a>
                    </div>
                </nav> 



    );
}

export default Navbar;