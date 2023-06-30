import About from "../about/About";
import Contact from "../contact/Contact";
import Portfolio from "../portfolio/Portfolio"
import Resume from "../resume/Resume";

import "./view.css"

export default function View({view}) {
    return (
        <div className="page-container">
            <div className="view-container">
                {view === "about" && (
                    <About />
                )}
                {view === "portfolio" && (
                    <Portfolio />
                )}
                {view === "contact" && (
                    <Contact />
                )}
                {view === "resume" && (
                    <Resume />
                )}
            </div>
        </div>
    );
}