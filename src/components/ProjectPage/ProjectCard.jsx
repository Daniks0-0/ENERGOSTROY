import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';



const ProjectCard = ({ text, photo, isFirst }) => {
    return (
        <div className={`project-card ${isFirst ? "project-card--first" : ""}`}>
            <div className="photo-gallery">
                {photo.map((img, index) => (
                    <LazyLoadImage className="img" key={index} src={img} alt="Проект"  effect="blur" />
                ))}
            </div>
            <p className="text">{text}</p>
        </div>
    );
};

export default ProjectCard;