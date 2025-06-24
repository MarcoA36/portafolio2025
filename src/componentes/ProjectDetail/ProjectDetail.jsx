// import { Card, Button, Modal, Row, Col, Carousel } from "react-bootstrap";
// import { useState } from "react";
// import "./ProjectDetail.css";
// import ButtonRef from "../Buttons/ButtonRef";
// import { projectsData } from "../../data";

// function ProjectDetails() {
//   const [showCarouselModal, setShowCarouselModal] = useState(false); 
//   const [selectedProject, setSelectedProject] = useState(null); 

//   const handleOpenCarouselModal = (project) => {
//     setSelectedProject(project); 
//     setShowCarouselModal(true); 
//   };

//   const handleCloseCarouselModal = () => {
//     setShowCarouselModal(false);
//   };

//   return (
//     <>
//       <div className="projects-container">
//         {projectsData.map((project, idx) => (
//           <Card key={idx} className="my-4 rounded-4 p-3 project_detail">
//             <Card.Body>
//               <Row>
//                 <Col
//                   md={12}
//                   className="d-flex flex-column justify-content-center"
//                 >
//                   <Card.Title className="card_title fs-1">{project.title}</Card.Title>
//                   <Card.Text className="card_description fs-5">{project.description}</Card.Text>
//                   <Card.Text className="card_features fs-5">
//                     <h5 className="fw-bold mb-2">Características</h5>
//                     <ul className="ps-3">
//                       {project.features.map((feature, i) => (
//                         <li key={i} >{feature}</li>
//                       ))}
//                     </ul>
//                   </Card.Text>
//                   <h6 className="fw-bold mb-2">Tecnologías usadas:</h6>
//                   <div className="skills">
//                     {project.skills.map((skill, i) => (
//                       <Button key={i} className="m-1" disabled size="sm">
//                         {skill}
//                       </Button>
//                     ))}
//                   </div>

//                   {/* Botón para abrir el modal con las imágenes */}
//                   <div className="buttons d-flex gap-1 mt-3">
//                     <ButtonRef
//                       onClick={() => handleOpenCarouselModal(project)} // Abre el modal con el proyecto seleccionado
//                     >
//                       Imágenes
//                     </ButtonRef>
//                     {project.repositorio && (
//                       <ButtonRef href={project.repositorio}>
//                         Repositorio
//                       </ButtonRef>
//                     )}
//                     {project.link && (
//                       <ButtonRef href={project.link}>Sitio</ButtonRef>
//                     )}
//                   </div>
//                 </Col>
//               </Row>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//       <Modal
//         show={showCarouselModal}
//         onHide={handleCloseCarouselModal}
//         centered
//         className="custom-modal"
//       >
//         <Modal.Body className="d-flex justify-content-center align-items-center">
//           {selectedProject?.images?.length > 0 && (
//             <Carousel>
//               {selectedProject.images.map((img, idx) => (
//                 <Carousel.Item key={idx} className="text-center">
//                   <p className="text-light bg-dark p-1 rounded bg-opacity-75 mb-1">{img.description}</p>
//                   <img
//                     className="mb-3 rounded-3"
//                     src={img.src}
//                     alt={`Imagen ${idx}`}
//                     style={{
//                       height: "auto", 
//                       maxHeight: "calc(100vh - 100px)", 
//                       objectFit: "contain",
//                       borderRadius: "8px",
//                     }}
//                   />
//                 </Carousel.Item>
//               ))}
//             </Carousel>
//           )}
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default ProjectDetails;






import { Card, Button, Row, Col } from "react-bootstrap";
import { projectsData } from "../../data";
import "./ProjectDetail.css";
import { FaGithub, FaImage, FaExternalLinkAlt } from "react-icons/fa";

function ProjectDetails() {
  return (
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
                backgroundImage: `url(${project.images?.[0]?.src})`,
              }}
            />
            <Card.Body>
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

              {/* {project.link && (
                <Button
                  variant="accent"
                  className="learn-more-btn"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar
                </Button>
              )} */}

{/* <div className="buttons d-flex flex-wrap justify-content-center gap-2 mt-auto">
  {project.images?.length > 0 && (
    <Button
      variant="secondary"
      className="learn-more-btn-alt"
      onClick={() => alert("Mostrar imágenes")} // Acá podés reemplazar con tu modal
    >
      Imágenes
    </Button>
  )}
  {project.repositorio && (
    <Button
      variant="secondary"
      className="learn-more-btn-alt"
      href={project.repositorio}
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </Button>
  )}
  {project.link && (
    <Button
      variant="accent"
      className="learn-more-btn"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      Visitar
    </Button>
  )}
</div>
 */}



{/* <div className="buttons d-flex flex-wrap justify-content-center gap-2 mt-auto">
  {project.images?.length > 0 && (
    <Button
      variant="secondary"
      className="learn-more-btn-alt d-flex align-items-center gap-2"
      onClick={() => alert("Mostrar imágenes")}
    >
      <FaImage />
      Imágenes
    </Button>
  )}
  {project.repositorio && (
    <Button
      variant="secondary"
      className="learn-more-btn-alt d-flex align-items-center gap-2"
      href={project.repositorio}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub />
      GitHub
    </Button>
  )}
  {project.link && (
    <Button
      variant="accent"
      className="learn-more-btn d-flex align-items-center gap-2"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaExternalLinkAlt />
      Visitar
    </Button>
  )}
</div> */}

<div className="buttons d-flex flex-wrap justify-content-center gap-2 mt-auto">
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
      variant="accent"
      className="learn-more-btn d-flex align-items-center gap-2"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaExternalLinkAlt />
      Visitar
    </Button>
  )}
</div>




            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProjectDetails;
