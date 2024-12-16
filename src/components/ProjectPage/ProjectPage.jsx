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
        text: "Реконструкция электросетевых объектов  для Чаплыгинского РЭС для нужд ПАО  «Россети Центр» - «Липецкэнерго»",
        photo: [Chaplygin1,Chaplygin2, Chaplygin3],
    },
    {
        text: "Реконструкция электросетевых объектов  для Лебедянского РЭС для нужд ПАО «Россети Центр» - «Липецкэнерго»",
        photo: [Lebedyan],
    },
    {
        text: "Реконструкция электросетевых объектов  для Лебедянского РЭС для нужд ПАО «Россети Центр» - «Липецкэнерго»",
        photo: [others],
    },


];

const ProjectPage = () =>{
    return(
        <div className="ProjectPage">
            <h1>
            Реализованные проекты
            </h1>
            {contents.map(content =>(
                <ProjectCard 
                key={content.index}
                photo={content.photo}
                text={content.text}
                />
            ))}
  
        </div>
    );
}
export default ProjectPage;