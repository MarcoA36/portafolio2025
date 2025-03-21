// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
// import { Spinner } from "react-bootstrap";
// import { projectsData } from "../data";
// import Header from "../componentes/Header";

// function ProjectDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [content, setContent] = useState("");
//   const [loading, setLoading] = useState(true);

//   const project = projectsData.find((p) => p.id === id);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`/proyectos/${id}.md`)
//       .then((res) => res.text())
//       .then((text) => setContent(text))
//       .catch(() => setContent("# Proyecto no encontrado 😢"))
//       .finally(() => setLoading(false));
//   }, [id]);

//   // Links personalizados para esta vista
//   const links = [
//     project?.repositorio && { label: "Repositorio", href: project.repositorio },
//     project?.link && { label: "Visitar Sitio", href: project.link },
//     { label: "Contacto", href: "#footer" }
//   ].filter(Boolean);

//   return (
//     <>
//       <Header links={links} />
//       <div className="container mt-5  d-flex flex-column ">
//         <div className="card p-4 shadow-lg markdown flex-grow-1">
//           {loading ? (
//             <div className="text-center">
//               <Spinner animation="border" role="status" />
//             </div>
//           ) : (
//             <>
//             <ReactMarkdown>{content}</ReactMarkdown>
//             {project && (
//           <div className="mb-3">
//             <button className="btn border border-2 m-3" onClick={() => navigate("/")}>
//               Volver
//             </button>
//             {project.repositorio && (
//               <a
//                 href={project.repositorio}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button className="btn btn-dark me-2">
//                   Repositorio GitHub
//                 </button>
//               </a>
//             )}
//             {project.link && (
//               <a href={project.link} target="_blank" rel="noopener noreferrer">
//                 <button className="btn btn-primary">Visitar Sitio</button>
//               </a>
//             )}
//           </div>
//         )}
//             </>

//           )}
//         </div>
//         {/* {project && (
//           <div className="mb-3">
//             <button className="btn border border-2 m-3" onClick={() => navigate("/")}>
//               Volver
//             </button>
//             {project.repositorio && (
//               <a
//                 href={project.repositorio}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button className="btn btn-dark me-2">
//                   Repositorio GitHub
//                 </button>
//               </a>
//             )}
//             {project.link && (
//               <a href={project.link} target="_blank" rel="noopener noreferrer">
//                 <button className="btn btn-primary">Visitar Sitio</button>
//               </a>
//             )}
//           </div>
//         )} */}
//       </div>
//     </>
//   );
// }

// export default ProjectDetails;

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Spinner } from "react-bootstrap";
import { projectsData } from "../data";
import Header from "../componentes/Header";
import Loader from "../componentes/Loader";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    setLoading(true);
    fetch(`/proyectos/${id}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => setContent("# Proyecto no encontrado 😢"))
      .finally(() => setLoading(false));
  }, [id]);

  // Links personalizados para esta vista
  const links = [
    project?.repositorio && { label: "Repositorio", href: project.repositorio },
    project?.link && { label: "Visitar Sitio", href: project.link },
    { label: "Contacto", href: "#footer" },
  ].filter(Boolean);

  return (
    <>
      <Header links={links} />
      <div className="container mt-5  d-flex flex-column ">
        {loading ? (
          // <div className="text-center">
          //   <Spinner animation="border" role="status" />
          // </div>
          <Loader />
        ) : (
          <div className="card p-4 shadow-lg markdown flex-grow-1">
            <>
              <ReactMarkdown>{content}</ReactMarkdown>
              {project && (
                <div className="mb-3 d-flex flex-wrap gap-2">
                  <button
                    className="btn border border-2"
                    onClick={() => navigate("/")}
                  >
                    Volver
                  </button>
                  {project.repositorio && (
                    <a
                      href={project.repositorio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark"
                    >
                      Repositorio GitHub
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Visitar Sitio
                    </a>
                  )}
                </div>
              )}
            </>
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectDetails;
