import React, { useRef } from "react";
import Skills from "../componentes/Skills";
import Projects from "../componentes/Projects";
import Hero from "../componentes/Hero";

const Home = () => {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="container mt-4">
      <Hero />
      <Skills onSkillSelect={scrollToProjects} />
      <Projects projectsRef={projectsRef} />
    </main>
  );
};

export default Home;
