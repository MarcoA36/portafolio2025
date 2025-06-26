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
import { FaLaptopCode } from "react-icons/fa"; // Icono opcional
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
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center gap-2 brand-name"
          onClick={() => setExpanded(false)}
        >
          <FaLaptopCode size={24} />
          <span>Marco Amaolo</span>
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
