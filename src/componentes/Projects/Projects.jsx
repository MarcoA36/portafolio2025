
import { Card, Badge } from "react-bootstrap";

import { useApp } from "../../context/AppContext";
import { projectsData } from "../../data";

function Projects({ onProjectSelect }) {
  const { setSelectedSkill, setSelectedProject } = useApp();

  return (
      <div className="row g-4">
        {projectsData.map((project, idx) => (
          <div key={idx} className="col-md-4 d-flex">
            <Card
              className="shadow-lg border-0 rounded-4 w-100 d-flex flex-column"
              onClick={() => {
                setSelectedProject(project);
                onProjectSelect(); // Navegar a la vista de detalles
              }}
              style={{ cursor: "pointer", transition: "transform 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-dark fw-bold">
                  {project.title}
                </Card.Title>
                <Card.Text
                  className="text-muted flex-grow-1"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
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
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
  );
}

export default Projects;