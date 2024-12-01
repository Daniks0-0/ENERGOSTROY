import React from "react";
import "./Contacts.scss";

const Contacts = () =>{
    return(
        <div className="contacts">
            <h1>Контактная информация</h1>
            <div className="contacts-list">
                <a href="tel:+74742710156">+7 (4742) 71-01-56</a>
                <a href="mailto:energo_stroy48@bk.ru?subject=Здравствуйте! Я отправляю это письмо через сайт вашей компании.">energo_stroy48@bk.ru</a>
                

            </div>

        </div>
    );
}

export default Contacts;