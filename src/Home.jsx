import React from "react";
import './App.css';
import './estilos/home.css'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import cssFondo from "./assets/Fondo.png"; // Importa la imagen


function Home() {
    const navigate = useNavigate();

    const hireMeClick = () => {
        navigate('/About');
    }

    const letsTalkClick = () => {
        navigate("/About");
    }
    

    return (
        <div className="home-content">
            <h1>Hi, I'm Joiner Mendoza</h1>
            <h2>Frontend Developer</h2>
            <p>
                Hello! I'm <b>Joiner Joel Mendoza Velasquez</b>, a passionate Frontend Developer with a love for bringing ideas to life across the web. My journey in the world of web development is based on combining HTML, CSS, and JavaScript to create engaging and visual experiences.
            </p>

            <div className="btn-box">
                <button onClick={hireMeClick} className="HireMe">Hire Me</button>
                <button onClick={letsTalkClick} className="HireMe">Let's Talk</button>
              
            </div>

            <div className="home-sci">
           <a href="https://www.facebook.com/profile.php?id=61552516455550" target="_blank" rel="noopener noreferrer">
                 <FontAwesomeIcon icon={faFacebook} size="2x" className="iconHome" />
           </a>

            <a href="https://www.instagram.com/joinerjoel12/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="iconHome" />
            </a>
               
              <a href="https://github.com/Joiner-Mendoza/portafolio-hecho-con-react" target="_blank" rel="noopener noreferrer">
                 <FontAwesomeIcon icon={faGithub} size="2x" className="iconHome" />
              </a>
            </div>

            <div className="logo">
                <img src={cssFondo} alt="CSS Logo" />
            </div>
            
        </div>
        
    );
}

export { Home };
