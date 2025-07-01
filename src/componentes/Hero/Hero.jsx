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
    <Row className="hero-content align-items-center">
      {/* <Col lg={7} className="text-center text-lg-start d-flex flex-column gap-3"> */}
      <Col
        lg={7}
        className="text-center text-lg-start d-flex flex-column align-items-center align-items-lg-start gap-3"
      >
        <h1 className="hero-title">
          Desarrollador Web <br />
          <span>Full Stack</span>
        </h1>
        {/* <h3 className="hero-subtitle">Desarrollador Web Full Stack</h3> */}
        <p className="hero-description d-none d-lg-block">
          Desde 2021, formándome a partir de la creación de proyectos. <br />
          <span className="text-muted">
  Buscando mejorar la calidad constantemente y siguiendo las prácticas recomendadas por la industria.
</span>


        </p>
        <SocialLinks />
        <div className="hero-buttons d-flex flex-column flex-sm-row flex-wrap gap-3 mb-3">
          <ButtonRef href="#proyectos" className="flex-fill text-center">
            Ver Proyectos
          </ButtonRef>
          <ButtonRef
            href="/docs/CV_Marco.pdf"
            className="flex-fill text-center"
          >
            Descargar CV
          </ButtonRef>
        </div>
      </Col>

      <Col lg={5} className="d-flex justify-content-center">
        <Skills />
      </Col>
    </Row>
  );
}

export default Hero;
