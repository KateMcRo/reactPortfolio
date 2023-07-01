import "./about.css"
import selfie from '../../assets/selfie.jpeg';

export default function About() {
    return(
        <div id="container">
            <div id="profile-box">
                <h1>Hello I'm</h1>
                <div className="image-container">
                    <img id="aboutImg" src={selfie} alt="Kate Rogers"></img>
                    <div className="circle-overlay"></div>
                </div>    
                <h2>Kate Rogers</h2>
                <div class="right">
                    <h3>Web Developer</h3>
                </div>
            </div>
            <div id="group-box">
                <div id="title-box">
                    <h4>ABOUT ME</h4>
                </div>
                <div id="about-box">
                    <p>
                        I'm a recent UC Berkeley bootcamp student. While new to the field, my passion for coding spans over two decades. With a background in branding & marketing, I decided to pursue coding professionally after consulting for another developer 2 years ago.
                    <br/><br/>
                        I take great satisfaction in breaking down complex problems into manageable pieces and creating clean, modular code. Well-organized code is just as beautiful to me as a visually appealing website.
                    <br/><br/>
                        What sets me apart is my keen eye for design & that I apply my highly organized nature not only to design but also to my coding practices, ensuring efficiency and maintainability.
                    </p>
                </div>
            </div> 
        </div>
        )
}