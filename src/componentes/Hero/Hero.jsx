import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect } from "react";
import SocialLinks from "../SocialLinks";
import "./Hero.css";
import ButtonRef from "../Buttons/ButtonRef";
import Skills from "../Skills/Skills";

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
    <Container className="hero rounded-3 p-1 px-lg-5 animate__animated">
      <Row className="d-flex align-items-center p-1 px-lg-5 animate__animated">
        <Col md={8} className="text-center p-5">
          <h1 id="hero-title" className="animate__animated">
            Hola, soy Marco
          </h1>
          <p id="hero-description">
            Desarrollador web con conocimientos en Frontend y Backend.
            <br /> Busco formar parte de proyectos donde pueda aportar valor,
            seguir creciendo y enfrentar nuevos desafíos.
          </p>

          <div className="hero_buttons">
            <ButtonRef href="#proyectos">Ver Proyectos</ButtonRef>
            <ButtonRef href={"/docs/CV_Marco.pdf"}>Descargar CV</ButtonRef>
          </div>

          <SocialLinks />
        </Col>

        <Col md={4} className="d-flex justify-content-center p-3">
          <Skills />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
