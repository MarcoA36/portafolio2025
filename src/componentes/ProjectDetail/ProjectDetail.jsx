import { useState } from "react";
import { Card, Button, Row, Col, Modal, Carousel } from "react-bootstrap";
import { projectsData } from "../../data";
import "./ProjectDetail.css";
import { FaGithub, FaImage, FaExternalLinkAlt } from "react-icons/fa";

function ProjectDetails() {
  const [showCarouselModal, setShowCarouselModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenCarouselModal = (project) => {
    setSelectedProject(project);
    setShowCarouselModal(true);
  };

  const handleCloseCarouselModal = () => {
    setShowCarouselModal(false);
  };

  return (
    <>
      <Row className="gx-4 gy-5 justify-content-center project-grid">
        {projectsData.map((project, idx) => (
          <Col
            key={idx}
            xs={12}
            sm={12}
            md={6}
            lg={4}
            className="d-flex justify-content-center"
          >
            <Card className="project-card text-center shadow-sm rounded-4 p-3">
              <div
                className="project-image"
                style={{
                  backgroundImage: `url(${project.mainImage})`,
                }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="project-title">
                  {project.title}
                </Card.Title>

                <Card.Text className="project-description">
                  {project.description}
                </Card.Text>

                <div className="skills mb-3 d-flex flex-wrap justify-content-center gap-2">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="buttons d-flex justify-content-center gap-2 mt-auto">
                  {project.images?.length > 0 && (
                    <Button
                      variant="secondary"
                      className="icon-btn"
                      onClick={() => handleOpenCarouselModal(project)}
                    >
                      <FaImage />
                    </Button>
                  )}
                  {project.repositorio && (
                    <Button
                      variant="secondary"
                      className="icon-btn"
                      href={project.repositorio}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </Button>
                  )}
                  {project.link && (
                    <Button
                      // variant="accent"
                      className="learn-more-btn d-flex align-items-center gap-2 icon-btn"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      {/* <span>Visitar</span> */}
                      <span>Visitar</span>
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* <Modal
        show={showCarouselModal}
        onHide={handleCloseCarouselModal}
        centered
        className="custom-modal"
      >
        <Modal.Body className="d-flex justify-content-center align-items-center flex-column">
          {selectedProject?.images?.length > 0 ? (
            <Carousel>
              {selectedProject.images.map((img, idx) => (
                <Carousel.Item key={idx}>
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <p className="text-light bg-dark p-1 rounded bg-opacity-75 mb-2 text-center">
                      {img.description}
                    </p>
                    <img
                      className="mb-3 rounded-3"
                      src={img.src}
                      alt={`Imagen ${idx}`}
                      style={{
                        height: "auto",
                        maxHeight: "70vh",
                        width:"100%",
                        objectFit: "contain",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <p className="text-muted">No hay imágenes disponibles</p>
          )}
        </Modal.Body>
      </Modal> */}
      <Modal
  show={showCarouselModal}
  onHide={handleCloseCarouselModal}
  centered
  className="custom-modal"
  size="xl"
>
  <Modal.Body
    className="d-flex justify-content-center align-items-center"
    style={{
      padding: 0,
      backgroundColor: "#1f2937",
    }}
  >
    {selectedProject?.images?.length > 0 ? (
      <Carousel
        controls={selectedProject.images.length > 1}
        indicators={false}
        interval={null}
        className="w-100"
      >
        {selectedProject.images.map((img, idx) => (
          <Carousel.Item key={idx}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "100%",
                height: "80vh",
              }}
            >
              <img
                src={img.src}
                alt={`Imagen ${idx}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    ) : (
      <p className="text-light p-4">No hay imágenes disponibles</p>
    )}
  </Modal.Body>
</Modal>

    </>
  );
}

export default ProjectDetails;
