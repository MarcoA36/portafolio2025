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
    <Container fluid className="hero-section px-4 px-lg-5">
  <Row className="hero-content align-items-center">
    <Col lg={7} className="text-start text-lg-start d-flex flex-column gap-3">
      <h1 className="hero-title">Hola, soy <span>Marco</span></h1>
      <h3 className="hero-subtitle">Desarrollador Web Full Stack</h3>
      <p className="hero-description">
        Me especializo en crear experiencias digitales fluidas y atractivas.<br />
        Apasionado por la tecnología, siempre listo para nuevos desafíos.
      </p>
      <div className="hero-buttons d-flex flex-wrap gap-3">
        <ButtonRef href="#proyectos">Ver Proyectos</ButtonRef>
        <ButtonRef href="/docs/CV_Marco.pdf">Descargar CV</ButtonRef>
      </div>
      {/* <SocialLinks githubColor="text-light"/> */}
      <SocialLinks />
    </Col>

    <Col lg={5} className="d-flex justify-content-center">
    
      <Skills />
    </Col>
  </Row>
</Container>

  );
}

export default Hero;
