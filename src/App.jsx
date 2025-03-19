import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./componentes/Footer";
import Home from "./vistas/Home";
import ProjectDetails from "./vistas/ProjectDetails";
import ScrollToTop from "./componentes/ScrollToTop";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/proyectos/:id" element={<ProjectDetails />} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}


export default App;

