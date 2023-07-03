import "./navigation.css"

export default function Navigation({view, setView}) {
    
    return (
        <nav id="navContainer">
            <div id="navbar" className="flex">
            <div className={`navbar-item ${view==="about"? "selected" : ""}`} onClick={() => setView("about")}>About</div>
            <div className={`navbar-item ${view==="portfolio"? "selected" : ""}`} onClick={() => setView("portfolio")}>Portfolio</div>
            <div className={`navbar-item ${view==="contact"? "selected" : ""}`} onClick={() => setView("contact")}>Contact</div>
            <div className={`navbar-item ${view==="resume"? "selected" : ""}`} onClick={() => setView("resume")}>Resumé</div>
            </div>
        </nav>
    )
}