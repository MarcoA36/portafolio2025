// import React, { useRef } from "react";
// import Skills from "../componentes/Skills";
// import Projects from "../componentes/Projects";
// import Hero from "../componentes/Hero";
// import Header from "../componentes/Header";
// import ProjectDetails from "../componentes/ProjectDetail";

// const Home = () => {
//   const projectsRef = useRef(null);

//   const scrollToProjects = () => {
//     projectsRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const links = [
//     { label: "Inicio", href: "#home" },
//     { label: "Proyectos", href: "#proyectos" },
//     { label: "Habilidades", href: "#habilidades" },
//     { label: "Contacto", href: "#footer" },
//   ];

//   return (
//     <>
//       <Header links={links} />
//       <main className="container mt-4">
//         <Hero />
//         <Skills onSkillSelect={scrollToProjects} />
//         <Projects projectsRef={projectsRef} />
//         <ProjectDetails/>
//       </main>
//     </>
//   );
// };

// export default Home;





import React, { useRef } from "react";
import Skills from "../componentes/Skills";
import Projects from "../componentes/Projects";
import Hero from "../componentes/Hero";
import Header from "../componentes/Header";
import ProjectDetails from "../componentes/ProjectDetail";

const Home = () => {
  // const projectsRef = useRef(null);
  const projectDetailsRef = useRef(null); // Agregar ref para el ProjectDetails

  // const scrollToProjects = () => {
  //   projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  const scrollToProjectDetails = () => {
    projectDetailsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Inicio", href: "#home" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Contacto", href: "#footer" },
  ];

  return (
    <>
      <Header links={links} />
      <main className="container mt-4">
        <Hero />
        <Skills />
        <Projects
          // projectsRef={projectsRef}
          onProjectSelect={scrollToProjectDetails}
        />
        <div ref={projectDetailsRef}>
          <ProjectDetails />
        </div>
      </main>
    </>
  );
};

export default Home;
