// import { useState } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import "./Header.css"
// function Header({ links }) {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <Navbar className="navbar bg-light text-dark fw-semibold" expand="lg" fixed="top" expanded={expanded}>
//       <Container>
//         <Navbar.Brand className="navbar_brand " href="#home" onClick={() => setExpanded(false)}>
//           Portafolio
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           onClick={() => setExpanded(!expanded)}
//         />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             {links.map((link, index) => (
//                  <Nav.Link className="navbar_link link" key={index} href={link.href} onClick={() => setExpanded(false)}>
//                 {link.label}
//               </Nav.Link>
//             ))}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;

import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaLaptopCode, FaUser } from "react-icons/fa"; // Icono opcional
import "./Header.css";

function Header({ links }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="navbar-custom shadow-sm bg-light"
    >
      <Container>
        {/* <Navbar.Brand
          href="#home"
          className="d-flex align-items-center gap-2 brand-name"
          onClick={() => setExpanded(false)}
        >
          <FaUser size={24} />
          <span>Marco Amaolo</span>
        </Navbar.Brand> */}
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center gap-2 brand-name"
          onClick={() => setExpanded(false)}
        >
          <div
            className="d-flex justify-content-center align-items-center bg-dark text-white rounded-circle"
            style={{
              width: "36px",
              height: "36px",
              fontWeight: "bold",
              fontSize: "1rem",
              boxShadow: "0 0 4px rgba(0,0,0,0.3)",
            }}
          >
              <FaUser size={24} />
          </div>
          <span className="fw-bold fs-5">Marco Amaolo</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map((link, index) => (
              <Nav.Link
                key={index}
                href={link.href}
                onClick={() => setExpanded(false)}
                className="nav-link-custom"
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
