// import { Container, Row, Col, Button } from "react-bootstrap";
// import { useEffect } from "react";
// import SocialLinks from "../SocialLinks";
// import "./Hero.css"
// import Skills from "../Skills";

// function Hero() {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       document.getElementById("hero-title").classList.add("animate__fadeIn");
//       document
//         .getElementById("hero-description")
//         .classList.add("animate__fadeIn");
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//       <Container className="hero rounded-3 p-1 px-lg-5 animate__animated">
//         <Row className="d-flex align-items-center p-1 px-lg-5 animate__animated">
//           <Col md={8} className="text-center">
//             <h1 id="hero-title" className="animate__animated">
//               Hola, soy Marco
//             </h1>
//             <p id="hero-description" className="animate__animated">
//               Desarrollador web con experiencia en React y Node.
//               <br /> Busco formar parte de proyectos donde pueda aportar valor,
//               seguir creciendo y enfrentar nuevos desafíos
//             </p>
//             <div className="hero_buttons">
//               <Button href="#proyectos" variant="primary" className="hero_button hero_button_proyectos m-1">
//                 Ver Proyectos
//               </Button>
//               {/* <Button href="#contacto" variant="info">
//               Descargar C.V
//             </Button> */}
//               <Button
//                 href="/docs/CV_Marco.pdf"
//                 variant="info"
//                 // download="CV_Marco.pdf"
//                 className="hero_button hero_button_proyectos m-1 text-light"
//               >
//                 Descargar C.V
//               </Button>
//             </div>
//             <SocialLinks />
//           </Col>

//           <Col md={4} className="d-flex justify-content-center">
//             {/* <img
//               src="images/fotoperfil.jpeg"
//               alt="Foto de Marco"
//               className="img-fluid rounded-circle"
//               style={{ maxWidth: "200px" }}
//             /> */}
//             <Skills/>
//           </Col>
//         </Row>
//       </Container>
//   );
// }

// export default Hero;

