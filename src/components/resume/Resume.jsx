import "./resume.css";
import resume from "../../assets/resumeSS.png";

export default function Resume() {
  const onButtonClick = async () => {
    try {
      let alink = document.createElement("a");
      alink.href = "/KateRogers_Resume.pdf";
      alink.target = "_blank";
      alink.download = "KateRogers_Resume.pdf";
      alink.click();
    } catch (error) {
      console.error(error);
    }
  };

  const skill = [
    "HTML & CSS",
    "JavaScript",
    "jQuery",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "MongoDB",
    "React",
    "SQL",
    "MySQL",
  ];

  return (
    <div className="containerBox flex space">
      <div className="skillsBox roundLR">
        <p id="skills" className="basic">
          SUMMARY OF SKILLS
        </p>
        <ul className="basic">
          {skill.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="resumeBox flex column center roundRL">
        <img
          src={resume}
          id="resumeImg"
          alt="Kate Rogers Resume"
          onClick={onButtonClick}
        ></img>
        <div className="downloadBox" onClick={onButtonClick}>
          <i className="fa-solid fa-file-arrow-down download"></i> RESUMÉ
        </div>
      </div>
      <div className="signBox flex column roundLR">
        <p id="msg">I look forward to working with you in the future</p>
        <p id="kr" className="signature">
          - Kate Rogers
        </p>
      </div>
    </div>
  );
}
