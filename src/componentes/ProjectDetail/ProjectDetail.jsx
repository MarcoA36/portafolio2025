import { Card, Button, Modal, Row, Col, Carousel } from "react-bootstrap";
import { useState } from "react";
import "./ProjectDetail.css";
import ButtonRef from "../Buttons/ButtonRef";
import { projectsData } from "../../data";

function ProjectDetails() {
  const [showCarouselModal, setShowCarouselModal] = useState(false); // Estado para el modal del carrusel
  const [selectedProject, setSelectedProject] = useState(null); // Estado para el proyecto seleccionado

  const handleOpenCarouselModal = (project) => {
    setSelectedProject(project); // Asignar el proyecto seleccionado al estado
    setShowCarouselModal(true); // Abre el modal del carrusel
  };

  const handleCloseCarouselModal = () => {
    setShowCarouselModal(false); // Cierra el modal del carrusel
  };

  return (
    <>
      <div className="projects-container">
        {projectsData.map((project, idx) => (
          <Card key={idx} className="my-4 rounded-4 p-3 project_detail">
            <Card.Body>
              <Row>
                <Col
                  md={12}
                  className="d-flex flex-column justify-content-center"
                >
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Text>
                    <h6 className="fw-bold mb-2">Características:</h6>
                    <ul className="ps-3">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </Card.Text>
                  <h6 className="fw-bold mb-2">Tecnologías usadas:</h6>
                  <div className="skills">
                    {project.skills.map((skill, i) => (
                      <Button key={i} className="m-1" disabled size="sm">
                        {skill}
                      </Button>
                    ))}
                  </div>

                  {/* Botón para abrir el modal con las imágenes */}
                  <div className="buttons d-flex gap-1 mt-3">
                    <ButtonRef
                      onClick={() => handleOpenCarouselModal(project)} // Abre el modal con el proyecto seleccionado
                    >
                      Imágenes
                    </ButtonRef>
                    {project.repositorio && (
                      <ButtonRef href={project.repositorio}>
                        Repositorio
                      </ButtonRef>
                    )}
                    {project.link && (
                      <ButtonRef href={project.link}>Sitio</ButtonRef>
                    )}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </div>
      {/* <Modal show={showCarouselModal} onHide={handleCloseCarouselModal} centered>
        <Modal.Body>
          {selectedProject && selectedProject.images && selectedProject.images.length > 0 && (
            <Carousel>
              {selectedProject.images.map((img, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100 mb-3 rounded-3"
                    src={img.src}
                    alt={`Imagen ${idx}`}
                    style={{
                      objectFit: "contain",
                      // maxHeight: "80vh",
                      borderRadius: "8px",
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Modal.Body>
      </Modal> */}
      <Modal
        show={showCarouselModal}
        onHide={handleCloseCarouselModal}
        centered
        className="custom-modal"
      >
        <Modal.Body className="d-flex justify-content-center align-items-center">
          {selectedProject?.images?.length > 0 && (
            <Carousel>
              {selectedProject.images.map((img, idx) => (
                <Carousel.Item key={idx} className="text-center">
                  <img
                    className="mb-3 rounded-3"
                    src={img.src}
                    alt={`Imagen ${idx}`}
                    style={{
                      height: "auto", 
                      maxHeight: "calc(100vh - 100px)", 
                      objectFit: "contain",
                      borderRadius: "8px",
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectDetails;
