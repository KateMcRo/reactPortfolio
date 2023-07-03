import "./footer.css"

export default function Footer () {
    return (
        <div className="footer flex container">
            <a href="https://github.com/KateMcRo" aria-label="Kate Roger's Github profile">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/KateMcRo/" aria-label="Kate Roger's LinkedIn profile">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://instagram.com/ohkate_life" aria-label="Kate Roger's Instagram profile">
                <i className="fa-brands fa-instagram"></i>
            </a>
        </div>
    )
}