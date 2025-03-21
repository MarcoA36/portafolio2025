import { Card, Button, Carousel, Modal, Row, Col, Spinner } from "react-bootstrap";
import { useApp } from "../context/AppContext";
import { useState } from "react";

function ProjectDetails() {
  const { selectedProject } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Estado para manejar la imagen seleccionada

  if (!selectedProject) {
    return (
      <p className="text-center">
        Selecciona un proyecto para ver los detalles.
      </p>
    );
  }

  const handleImageClick = (img) => {
    setSelectedImage(img); // Al hacer clic en una imagen, la seleccionamos
    setShowModal(true); // Mostramos el modal con la imagen
  };


  return (
    <>
      <Card className="my-4 bg- rounded-4 p-3">
        <Card.Body>
          <Row>
            {/* Carrusel en el lado izquierdo */}
            <Col md={4} className="d-flex flex-column justify-content-center p-3">
              {selectedProject.images && selectedProject.images.length > 0 && (
                <Carousel>
                  {selectedProject.images.map((img, idx) => (
                    <Carousel.Item key={idx}>
                      <img
                        className="d-block w-100 bg-dark rounded-3"
                        src={img.src}
                        alt={`Slide ${idx}`}
                        style={{
                          objectFit: "contain",
                          maxHeight: "50vh",
                          cursor: "pointer",
                          borderRadius: "8px",
                        }}
                        onClick={() => handleImageClick(img)} 
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              )}
            </Col>

            {/* Información en el lado derecho */}
            <Col md={8} className="d-flex flex-column justify-content-center">
              <Card.Title>{selectedProject.title}</Card.Title>
              <Card.Text>{selectedProject.description}</Card.Text>
              <Card.Text>
                <h6 className="fw-bold mb-2">Características:</h6>
                <ul className="ps-3">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </Card.Text>
              <h6 className="fw-bold mb-2">Tecnologías usadas:</h6>
              <div className="skills">
                {selectedProject.skills.map((skill, i) => (
                  <Button key={i} variant="info" className="m-1" disabled size="sm">
                    {skill}
                  </Button>
                ))}
              </div>

              <div className="buttons d-flex gap-1 mt-3">
                {selectedProject.repositorio && (
                  <a
                    href={selectedProject.repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="dark">Repositorio</Button>
                  </a>
                )}

                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary">Visitar Sitio</Button>
                  </a>
                )}
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Modal para mostrar imagen en tamaño completo */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="bg-dark">
          <img
            className="d-block w-100"
            src={selectedImage?.src}
            alt="Imagen seleccionada"
            style={{
              objectFit: "contain",
              maxHeight: "80vh",
              borderRadius: "8px",
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectDetails;
