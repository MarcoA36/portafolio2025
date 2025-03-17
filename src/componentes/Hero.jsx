import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect } from "react";

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
    <section className="hero-section d-flex align-items-center" id="home">
      <Container>
        <Row className="d-flex align-items-center px-5">
          <Col md={8} className="text-center">
            <h1 id="hero-title" className="animate__animated">
              Hola, soy Marco
            </h1>
            <p id="hero-description" className="animate__animated">
              Desarrollador web con experiencia en React y Node.
              <br /> Busco formar parte de proyectos donde pueda aportar valor,
              seguir creciendo y enfrentar nuevos desafíos. Siempre con ganas de
              aprender y mejorar.
            </p>
            <div className="buttons">
            <Button href="#proyectos" variant="primary" className="m-1">
              Ver Proyectos
            </Button>
            {/* <Button href="#contacto" variant="info">
              Descargar C.V
            </Button> */}
            <Button
              href="/docs/CV_Marco.pdf"
              variant="info"
              // download="CV_Marco.pdf"
              className="m-1"
            >
              Descargar C.V
            </Button>
            </div>
           
          </Col>

          <Col md={4} className="d-flex justify-content-center">
            <img
              src="/fotoperfilDibujo.png"
              alt="Foto de Marco"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "200px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
