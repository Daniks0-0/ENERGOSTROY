import React from "react";



const ProjectCard = ({ text, photo, isFirst }) => {
    return (
        <div className={`project-card ${isFirst ? "project-card--first" : ""}`}>
            <div className="photo-gallery">
                {photo.map((img, index) => (
                    <img key={index} src={img} alt="Проект" loading="lazy" />
                ))}
            </div>
            <p className="text">{text}</p>
        </div>
    );
};

export default ProjectCard;