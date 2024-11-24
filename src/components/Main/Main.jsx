import React from "react";
import "./Main.scss";

const Main = () => {
    return(
        <div className="main">
            <div className="main-text">
                <h1> 
                Полный спектр услуг в строительстве электроэнергетической инфраструктуры
                </h1>
                <h2>
                ЭНЕРГОСТРОЙ - Энергия в каждом решении, надежность в каждом проекте
                </h2>
                <div className="link">
                    <a href="/">
                    Подробнее о компании
                    </a>
                </div>
            </div>
                <img src="src\assets\image.svg" alt="" />
        </div>
    );
    
}

export default Main;