import ProjectCard from "../projectcard/ProjectCard";
import "./portfolio.css"

import creativeJuice from "../../assets/creativeJuice.png"
import pageTurner from "../../assets/pageTurner.png"
import weatherApp from "../../assets/weatherApp.png"
import horiseon from "../../assets/horiseon.png"
import passwordGen from "../../assets/passwordGen.png"
import codingQuiz from "../../assets/codingQuiz.png"

export default function Project() {
    const projectInfoArray = [
        {
            title: "Creative Juice",
            imgSrc: creativeJuice,
            deployedLink: "https://katemcro.github.io/creativeJuice/",
            repo: "https://github.com/KateMcRo/creativeJuice",
            alt: "Person creating digital art"
        },
        {
            title: "Page Turner",
            imgSrc: pageTurner,
            deployedLink: "https://pure-brook-05666.herokuapp.com/",
            repo: "https://github.com/KateMcRo/PageTurner",
            alt: "Open book"
        },
        {
            title: "Weather App",
            imgSrc: weatherApp,
            deployedLink: "https://katemcro.github.io/weatherApp/",
            repo: "https://github.com/KateMcRo/weatherApp",
            alt: "Sunny day with clouds"
        },
        {
            title: "Coding Quiz",
            imgSrc: codingQuiz,
            deployedLink: "https://katemcro.github.io/codingQuiz/",
            repo: "https://github.com/KateMcRo/codingQuiz",
            alt: "Glasses in front of coding environment"
        },
        {
            title: "Password Generator",
            imgSrc: passwordGen,
            deployedLink: "https://katemcro.github.io/W3-PassGen/",
            repo: "https://github.com/KateMcRo/W3-PassGen",
            alt: "Lock resting on keyboard"
        },
        {
            title: "Horiseon Refactor",
            imgSrc: horiseon,
            deployedLink: "https://katemcro.github.io/challenge1/",
            repo: "https://github.com/KateMcRo/challenge1",
            alt: "Corperate team holding puzzle pieces"
        },
    ]
    
    return(
        <div id="portfolioBox">
            <div>
                <h1>Sample Works</h1>
            </div>
            <div className="grid-container">
                {projectInfoArray.length && projectInfoArray.map((project) => {
                    return <ProjectCard title={project.title} imgSrc={project.imgSrc} deployedLink={project.deployedLink} repo={project.repo} alt={project.alt} />
                })}
            </div>
        </div>
        )
}