import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectPage.scss";
import Chaplygin1 from "../../assets/Chaplygin1.webp";
import Chaplygin2 from "../../assets/Chaplygin2.webp";
import Chaplygin3 from "../../assets/Chaplygin3.webp";
import Lebedyan from "../../assets/Lebedyan.webp";
import others from "../../assets/others.webp";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


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
                        <div className="row-LazyLoadImage">
                            <div>
                                <LazyLoadImage
                                    className="row-photo"
                                    src={Chaplygin1}
                                    effect="blur"
                                />
                            </div>
                            <div>
                                <LazyLoadImage
                                    className="row-photo"
                                    src={Chaplygin2}
                                    effect="blur"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="unrow">
                        <LazyLoadImage className="img"  src={Chaplygin3} alt="линии электропередач"  effect="blur"/>
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