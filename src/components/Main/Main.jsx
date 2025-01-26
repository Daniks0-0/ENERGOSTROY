import React from "react";
import "./Main.scss";
import photo from "../../assets/image.webp";
const Main = () => {
    return(
        <div className="main" id="main">
            <div className="main__width">
            <div className="main-text">
                <h1> 
                Полный спектр услуг в строительстве электроэнергетической инфраструктуры
                </h1>
                <h2>
                ЭНЕРГОСТРОЙ - Энергия в каждом решении, надежность в каждом проекте
                </h2>
              
                    <a href="#aboutSection-id" className="link">
                    Подробнее о компании
                    </a>
           
            </div>
            <div className="img">
            <img src={photo} alt="Линии передач"/>
            </div>  
            </div>
        </div>
    ); 
}

export default Main;