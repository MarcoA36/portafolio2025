import React, { useRef } from "react";
import ProjectDetails from "../../componentes/ProjectDetail/ProjectDetail";
import "./Home.css";
import Header from "../../componentes/Header/Header";
import Hero2 from "../../componentes/Hero/Hero";
import Contact from "../../componentes/Contact/Contact";

const Home = () => {
  const projectDetailsRef = useRef(null);
  const links = [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Github", href: "https://github.com/MarcoA36" },
    { label: "Contacto", href: "#footer" },
  ];

  return (
    <>
      <Header links={links} />
      {/* <main className="container mt-4 home_main"> */}
      <main className="container-sm mt-4 home_main">


        <section
          className="hero-section home_section d-flex align-items-center"
          id="home"
        >
          <Hero2 />
        </section>
        <section
          id="proyectos"
          ref={projectDetailsRef}
          className="projects_section"
        >
          <div className="section-title-wrapper">
            <div className="section-title-box">Proyectos</div>
          </div>
          <ProjectDetails />
        </section>

        <section
          id="contacto"
          // ref={projectDetailsRef}
          className="contact_section"
        >
          <div className="section-title-wrapper">
            <div className="section-title-box">Contacto</div>
          </div>
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Home;
