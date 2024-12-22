import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectPage.scss";
import Chaplygin1 from "../../assets/Chaplygin1.svg";
import Chaplygin2 from "../../assets/Chaplygin2.svg";
import Chaplygin3 from "../../assets/Chaplygin3.svg";
import Lebedyan from "../../assets/Lebedyan.svg";
import others from "../../assets/others.svg";


const contents = [

    {
        text: "Реконструкция электросетевых объектов  для Лебедянского РЭС для нужд ПАО «Россети Центр» - «Липецкэнерго»",
        photo: [Lebedyan],
    },
    {
        text: "Реконструкция электросетевых объектов  для Лебедянского РЭС для нужд ПАО «Россети Центр» - «Липецкэнерго»",
        photo: [others],
    },


];

const ProjectPage = () => {
    return (
        <div className="ProjectPage">
            <div className="ProjectPage__content">
                <h1>
                    Реализованные проекты
                </h1>
                <div className="static-gallery">
                    <div className="row">
                        <img src={Chaplygin1} alt="линии электропередач" />
                        <img src={Chaplygin2} alt="линии электропередач" />
                    </div>
                    <div className="unrow">
                        <img src={Chaplygin3} alt="линии электропередач" />
                    </div>
                    <p>Реконструкция электросетевых объектов  для Чаплыгинского РЭС для нужд ПАО  “Россети Центр” - “Липецкэнерго”</p>

                </div>
                {contents.map((content, idx) => (
                    <ProjectCard
                        key={idx} // Используем индекс в качестве ключа
                        photo={content.photo}
                        text={content.text}
                        isFirst={idx === 0} // Передаем проп для первого элемента
                    />
                ))}

            </div>

        </div>
    );
}
export default ProjectPage;