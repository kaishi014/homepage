import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        <p>© 2026 Ar Raffi Ardhiansyah</p>

        <div className="social-icons">

          <a href="https://github.com/kaishi014" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
          </a>
          <a href="https://www.linkedin.com/in/arraffi-ardhiansyah" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
          </a>
          <a href="https://www.instagram.com/kaishi014" target="_blank" rel="noopener noreferrer">
            <FaInstagram/>
          </a>

        </div>

      </div>

    </footer>

  )

}

export default Footer;