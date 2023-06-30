import "./navigation.css"

export default function Navigation({view, setView}) {
    
    return (
        <nav id="navContainer">
            <div id="navBuddy"></div>
            <div id="navbar">
            <div class="navbar-item" onClick={() => setView("about")}>About</div>
            <div class="navbar-item" onClick={() => setView("portfolio")}>Portfolio</div>
            <div class="navbar-item" onClick={() => setView("contact")}>Contact</div>
            <div class="navbar-item" onClick={() => setView("resume")}>Resumé</div>
            </div>
        </nav>
    )
}