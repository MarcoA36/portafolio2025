import { Container, Button } from "react-bootstrap";
import { useEffect } from "react";
import SocialLinks from "../SocialLinks";
import "./Hero.css";
import ButtonRef from "../Buttons/ButtonRef";

function Hero() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("hero-title").classList.add("animate__fadeIn");
      document
        .getElementById("hero-description")
        .classList.add("animate__fadeIn");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className="hero d-flex flex-column justify-content-center align-items-center text-center rounded-3 p-4 animate__animated">
      <h1 id="hero-title" className="animate__animated">
        Hola, soy Marco
      </h1>
      <p id="hero-description" className="animate__animated">
        Desarrollador web con experiencia en React y Node.
        <br /> Busco formar parte de proyectos donde pueda aportar valor,
        seguir creciendo y enfrentar nuevos desafíos.
      </p>


      <div className="hero_buttons">
        <ButtonRef href="#proyectos">
        Ver Proyectos 
        </ButtonRef>
        <ButtonRef href={"/docs/CV_Marco.pdf"}>
          Descargar CV
        </ButtonRef>
      </div>

      <SocialLinks />
    </Container>
  );
}

export default Hero;
