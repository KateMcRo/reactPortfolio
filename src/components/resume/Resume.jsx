import "./resume.css"
import resume from "../../assets/KateRogers_Resume.png"

export default function Resume() {
    const onButtonClick = async () => {
        try {
          const response = await fetch('KateRogers_Resume.pdf');
          const blob = await response.blob();
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'KateRogers_Resume.pdf';
          alink.click();
        } catch (error) {
          console.error(error);
        }
      };

    const skill = [
      'HTML & CSS',
      'JavaScript',
      'jQuery',
      'Bootstrap',
      'Node.js',
      'Express.js',
      'MongoDB',
      'React',
      'SQL',
      'MySQL'
    ];
    
    return (
      <div className="container">
        <div className="skillsBox">
          <p id="skills">SUMMARY OF SKILLS</p>
          <ul>
            {skill.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="resumeBox">
            <img src={resume} id="resumeImg" alt="Kate Rogers Resume" onClick={onButtonClick}></img>
            <div class="downloadBox" onClick={onButtonClick}>
                <i class="fa-solid fa-file-arrow-down download"></i> RESUMÉ
            </div>
        </div>
        <div className="signBox">
            <p id="msg">I look forward to working with you in the future</p>
            <p id="kr">- Kate Rogers</p>
        </div>
      </div>
    );
  }
  