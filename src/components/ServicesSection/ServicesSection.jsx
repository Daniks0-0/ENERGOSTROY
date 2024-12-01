import React from "react";
import "./ServicesSection.scss";
import Services from "../Services/Services";

const textLists = [
    {
        index: 1,
        text: "Обслуживание трансформаторных подстанций, электроустановок и кабельных линий",
    },
    {
        index: 2,
        text: "Проектирование  объектов электроэнергетики",
    },
    {
        index: 3,
        text: "Пусконаладочные работы",
    },
    {
        index: 4,
        text: "Строительство объектов электроэнергетики",
    },
    {
        index: 5,
        text: "Строительно-монтажные работы",
    },
    {
        index: 6,
        text: "Электротехнические испытания",
    },
];

const ServicesSection = () => {
    return (
        <div className="servicesSection" id="servicesSection-id">
            <h1>Спектр услуг</h1>
            <div className="list">
                <ul className="first-list">
                    {textLists.filter((textList) => textList.index <= 3) // Фильтрация только элементов с index <= 3
                        .map((textList) => (
                            <Services key={textList.index} text={textList.text} />
                        ))}
                </ul>
                <ul className="second-list">
                    {textLists.filter((textList) => textList.index > 3) // Фильтрация только элементов с index > 3
                        .map((textList) => (
                            <Services key={textList.index} text={textList.text} />
                        ))}
                </ul>

            </div>
            <div className="link-project">
                <a href="/"> Проекты </a>
            </div>

        </div>
    );
};

export default ServicesSection;