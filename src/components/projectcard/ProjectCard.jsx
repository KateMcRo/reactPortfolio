import React from "react";
import "./projectcard.css"

export default function ProjectCard ({ title, deployedLink, imgSrc, repo, alt}) {
    return <div id="cardContainer">
        <a href={deployedLink}>
            <img src={imgSrc} alt={alt} className="project roundLR"></img>
        </a>
        <br/>
        <div className="flex space">
            <a href={deployedLink} id="projectTitle">{title}</a>
            <a href={repo}>
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
    </div>
}