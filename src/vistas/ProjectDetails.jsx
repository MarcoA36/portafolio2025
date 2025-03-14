import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { projectsData } from "../data";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  // Buscar el proyecto correspondiente por ID
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    fetch(`/proyectos/${id}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => setContent("# Proyecto no encontrado 😢"));
  }, [id]);

  return (
    <div className="container mt-4">
      {/* <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}>
        Volver
      </button> */}
      
      {project && (
        <div className="mb-3">
          {project.repositorio && (
            <a href={project.repositorio} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-dark me-2">
                Repositorio GitHub
              </button>
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">
                Visitar Sitio
              </button>
            </a>
          )}
        </div>
      )}

      <div className="card p-4 shadow-lg markdown">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      <button className="btn btn-dark m-3" onClick={() => navigate("/")}>
        Volver
      </button>
    </div>
  );
}

export default ProjectDetails;
