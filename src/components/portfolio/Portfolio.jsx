import ProjectCard from "../projectcard/ProjectCard";
import "./portfolio.css";

import creativeJuice from "../../assets/creativeJuice.png";
import pageTurner from "../../assets/pageTurner.png";
import weatherApp from "../../assets/weatherApp.png";
import plantastic2 from "../../assets/plantastic.png";
import passwordGen from "../../assets/passwordGen.png";
import codingQuiz from "../../assets/codingQuiz.png";

export default function Project() {
  const projectInfoArray = [
    {
      id: 1,
      title: "Creative Juice",
      imgSrc: creativeJuice,
      deployedLink: "https://katemcro.github.io/creativeJuice/",
      repo: "https://github.com/KateMcRo/creativeJuice",
      alt: "Person creating digital art",
    },
    {
      id: 2,
      title: "Page Turner",
      imgSrc: pageTurner,
      deployedLink: "https://pure-brook-05666.herokuapp.com/",
      repo: "https://github.com/KateMcRo/PageTurner",
      alt: "Open book",
    },
    {
      id: 3,
      title: "Weather App",
      imgSrc: weatherApp,
      deployedLink: "https://katemcro.github.io/weatherApp/",
      repo: "https://github.com/KateMcRo/weatherApp",
      alt: "Sunny day with clouds",
    },
    {
      id: 4,
      title: "Coding Quiz",
      imgSrc: codingQuiz,
      deployedLink: "https://katemcro.github.io/codingQuiz/",
      repo: "https://github.com/KateMcRo/codingQuiz",
      alt: "Glasses in front of coding environment",
    },
    {
      id: 5,
      title: "Password Generator",
      imgSrc: passwordGen,
      deployedLink: "https://katemcro.github.io/W3-PassGen/",
      repo: "https://github.com/KateMcRo/W3-PassGen",
      alt: "Lock resting on keyboard",
    },
    {
      id: 6,
      title: "Plantastic",
      imgSrc: plantastic2,
      deployedLink: "https://horti-helper-5336d8b8d62e.herokuapp.com/",
      repo: "https://github.com/KateMcRo/Plantastic",
      alt: "Plant",
    },
  ];

  return (
    <div id="portfolioBox" className="flex column">
      <div>
        <h1>Sample Works</h1>
      </div>
      <div className="grid-container">
        {projectInfoArray.length &&
          projectInfoArray.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                repo={project.repo}
                alt={project.alt}
              />
            );
          })}
      </div>
    </div>
  );
}
