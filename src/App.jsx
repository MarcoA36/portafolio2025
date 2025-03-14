import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Home from "./vistas/Home";
import ProjectDetails from "./vistas/ProjectDetails";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
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




// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./componentes/Header";
// import Footer from "./componentes/Footer";
// import Home from "./vistas/Home";
// import SistemaGestionDoc from "./vistas/Projects/SistemaGestionDoc";
// import AppChoferDoc from "./vistas/Projects/AppChoferDoc";
// import DiarioDigitalDoc from "./vistas/Projects/DiarioDigitalDoc";


// function App() {
//   return (
//     <div className="app">
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/proyectos/sistema-gestion" element={<SistemaGestionDoc />} />
//           <Route path="/proyectos/app-chofer" element={<AppChoferDoc />} />
//           <Route path="/proyectos/diario-digital" element={<DiarioDigitalDoc />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
