import "./navigation.css"

export default function Navigation({view, setView}) {
    
    return (
        <nav id="navContainer">
            <div id="navBuddy"></div>
            <div id="navbar">
            <div class={`navbar-item ${view==="about"? "selected" : ""}`} onClick={() => setView("about")}>About</div>
            <div class={`navbar-item ${view==="portfolio"? "selected" : ""}`} onClick={() => setView("portfolio")}>Portfolio</div>
            <div class={`navbar-item ${view==="contact"? "selected" : ""}`} onClick={() => setView("contact")}>Contact</div>
            <div class={`navbar-item ${view==="resume"? "selected" : ""}`} onClick={() => setView("resume")}>Resumé</div>
            </div>
        </nav>
    )
}