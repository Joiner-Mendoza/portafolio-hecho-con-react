import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './estilos/about.css'
import codigo from "./assets/codigo.jpg"
import portafolio from "./assets/imgPortafolio.png"
import corazon from "./assets/joi.jpg"
import next from "./assets/icon-next.svg"
import previus from "./assets/icon-previous.svg"

function About() {
  const images = [codigo, portafolio, corazon];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previusImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="about">
      <h2>About <span>Me</span></h2>
      <span className="containerArrows" onClick={nextImage}>
        <img src={next} alt="next" className="nextImage" />
      </span>
      <span className="containerArrowsNext" onClick={previusImage}>
        <img src={previus} alt="next" className="previustImage" />
      </span>
      <div className="aboutSlider">
        <div
          className="aboutSliderimg"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt="Slider Image" />
          ))}
        </div>
      </div>
      <div className="aboutContent">
        <h3>Desarrollador Frontend</h3>
        <p>I am passionate about creating compelling web experiences and am a front-end developer with a strong command of HTML, CSS, and JavaScript. My goal is to turn ideas into interactive and visually appealing interfaces. Through my experience translating designs into functional code, I aspire to make a significant impact on the way people interact online. I always seek technical excellence and keep a curious approach to the latest trends and technologies in front-end development. I am excited to continue learning and applying my skills to build a more beautiful and friendly web for all users.</p>
    
        <button className="ReadMore"> Read More</button>
      </div>
    </div>
  );
}

export { About };
