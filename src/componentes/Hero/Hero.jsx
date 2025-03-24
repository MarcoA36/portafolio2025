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
      <Row className="hero_row d-flex align-items-center p-1 animate__animated">
        <Col md={8} className="text-center">
          <div className="d-flex flex-column gap-1">
            <h1 id="hero-title" className="hero_title">
              Hola, soy Marco
            </h1>
            <div id="hero-description" className="hero_description">
              <h3>
                {" "}
                <span>Desarrollador web</span> <br /> con conocimientos en
                Frontend y Backend
              </h3>
              <h4 className="text-secondary">
                {" "}
                Busco formar parte de proyectos donde pueda aportar valor,
                seguir creciendo y enfrentar nuevos desafíos.
              </h4>
            </div>

            <div className="hero_buttons">
              <ButtonRef href="#proyectos">Ver Proyectos</ButtonRef>
              <ButtonRef href={"/docs/CV_Marco.pdf"}>Descargar CV</ButtonRef>
            </div>

            <SocialLinks />
          </div>
        </Col>

        <Col md={4} className="d-flex justify-content-center">
          <Skills />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
