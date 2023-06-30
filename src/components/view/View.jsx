import About from "../about/About";
import Contact from "../contact/Contact";
import Portfolio from "../portfolio/Portfolio"
import Resume from "../resume/Resume";

export default function View({view}) {
    return (
        <div>
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
    )
}