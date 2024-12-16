import React from "react";



const ProjectCard = ({ text, photo }) => {
    return (
        <div className="project-card">
            <div className="photo-gallery">
                {photo.map((img, index) => (
                    <img key={index} src={img}/>
                ))}
            </div>
            <p className="text">{text}</p>
        </div>
    );
};

export default ProjectCard;