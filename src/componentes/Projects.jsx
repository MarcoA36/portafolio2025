import { Card, Badge, Button } from "react-bootstrap";
import { useApp } from "../context/AppContext";
import { Link } from "react-router-dom";

function Projects({ projectsRef }) {
  const { filteredProjects, selectedSkill, setSelectedSkill } = useApp();

  return (
    <section id="proyectos" className="py-5">
      <h2 ref={projectsRef} className="text-center mb-4">
        <span
          onClick={() => setSelectedSkill("")}
          style={{
            cursor: "pointer",
            borderRadius: "5px",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Mis Proyectos
        </span>{" "}
        <span className="text-primary">{selectedSkill}</span>
      </h2>

      <div className="row g-4">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="col-md-4 d-flex">
            <Card className="shadow-lg border-0 rounded-4 w-100 d-flex flex-column">
            <Card.Body className="d-flex flex-column">
                <Card.Title className="text-dark fw-bold">
                  {project.title}
                </Card.Title>
                <Card.Text
                  className="text-muted flex-grow-1"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3, // Limita a 3 líneas
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </Card.Text>
                <div>
                  <h6 className="fw-bold mb-2">Tecnologías:</h6>
                  {project.skills.map((skill, i) => (
                    <Badge key={i} pill bg="info" className="m-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button
                  as={Link}
                  to={`/proyectos/${project.id}`}
                  variant="primary"
                  className="mt-3 w-100"
                >
                  Ver Detalles
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
