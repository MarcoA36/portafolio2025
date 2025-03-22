import {
  Card,
  Button,
  Carousel,
  Modal,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import { useApp } from "../../context/AppContext";
import { useState } from "react";
import "./ProjectDetail.css";
import ButtonRef from "../Buttons/ButtonRef";

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
      <Card className="my-4 rounded-4 p-3 project_detail">
        <Card.Body>
          <Row>
            {/* Carrusel en el lado izquierdo */}
            <Col
              md={4}
              className="d-flex flex-column justify-content-center p-3"
            >
              {selectedProject.images && selectedProject.images.length > 0 && (
                <Carousel className="carrousel">
                  {selectedProject.images.map((img, idx) => (
                    <Carousel.Item key={idx}>
                      <img
                        className="carrousel_image d-block w-100 rounded-3"
                        src={img.src}
                        alt={`Slide ${idx}`}
                        style={{
                          objectFit: "contain",
                          maxHeight: "50vh",
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
                  <Button key={i} className="m-1" disabled size="sm">
                    {skill}
                  </Button>
                ))}
              </div>

              <div className="buttons d-flex gap-1 mt-3">
                {selectedProject.repositorio && (
                  <ButtonRef href={selectedProject.repositorio}>
                    Repositorio
                  </ButtonRef>
                )}
                {selectedProject.link && (
                  <ButtonRef href={selectedProject.link}>
                    Visitar Sitio
                  </ButtonRef>
                )}
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Modal para mostrar imagen en tamaño completo */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body>
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
