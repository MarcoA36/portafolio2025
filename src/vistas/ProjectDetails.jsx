import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Spinner } from "react-bootstrap";
import { projectsData } from "../data";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    setLoading(true);
    fetch(`/proyectos/${id}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => setContent("# Proyecto no encontrado 😢"))
      .finally(() => setLoading(false)); // Finaliza la carga
  }, [id]);

  return (
    <div className="container mt-4">
      {project && (
        <div className="mb-3">
          {project.repositorio && (
            <a href={project.repositorio} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-dark me-2">Repositorio GitHub</button>
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">Visitar Sitio</button>
            </a>
          )}
        </div>
      )}

      <div className="card p-4 shadow-lg markdown">
        {loading ? ( 
          <div className="text-center">
            <Spinner animation="border" role="status" />
          </div>
        ) : (
          <ReactMarkdown>{content}</ReactMarkdown>
        )}
      </div>

      <button className="btn btn-dark m-3" onClick={() => navigate("/")}>
        Volver
      </button>
    </div>
  );
}

export default ProjectDetails;
