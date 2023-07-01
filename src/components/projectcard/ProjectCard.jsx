/* Framework Tools & CSS */
import React from "react";
import "./projectcard.css"

export default function ProjectCard ({ title, deployedLink, imgSrc, repo, alt}) {
    return <div id="cardContainer">
        <a href={deployedLink}>
            <img src={imgSrc} alt={alt} class="project"></img>
        </a>
        <br/>
        <div class="linksBox">
            <a href={deployedLink} id="projectTitle">{title}</a>
            <a href={repo}>
                <i class="fa-brands fa-github"></i>
            </a>
        </div>
    </div>
}