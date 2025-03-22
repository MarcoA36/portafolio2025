import React, { useRef } from "react";
import Skills from "../../componentes/Skills/Skills";
import Projects from "../../componentes/Projects";
import ProjectDetails from "../../componentes/ProjectDetail/ProjectDetail";
import Hero from "../../componentes/Hero/Hero";
import "./Home.css";
import Header from "../../componentes/Header/Header";
import { useApp } from "../../context/AppContext";

const Home = () => {
  const { selectedProject } = useApp();
  const projectDetailsRef = useRef(null);
  const scrollToProjectDetails = () => {
    projectDetailsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Inicio", href: "#home" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#footer" },
  ];

  return (
    <>
      <Header links={links} />
      <main className="container mt-4 home_main">
        <section
          className="hero-section home_section d-flex align-items-center"
          id="home"
        >
          <Hero />
        </section>
        <section id="habilidades" className="py-5 home_section">
          <h2 className="text-center my-2">Tecnologías</h2>
          <Skills />
        </section>
        <section id="proyectos" className="py-5 home_section">
          <h2 className="text-center my-4">Proyectos</h2>
          <Projects onProjectSelect={scrollToProjectDetails} />
        </section>

        {/* Solo mostrar la sección si hay un proyecto seleccionado */}
        {selectedProject && (
          <section ref={projectDetailsRef} className="home_section">
            <ProjectDetails />
          </section>
        )}
      </main>
    </>
  );
};

export default Home;
