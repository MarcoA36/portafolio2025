// import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function Header({vista}) {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
//       <Container>
//       <Navbar.Brand as={Link} to="/">Portafolio</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="/#proyectos">Proyectos</Nav.Link>
//             <Nav.Link href="/#habilidades">Habilidades</Nav.Link>
//             <Nav.Link href="/#contacto">Contacto</Nav.Link>
//           </Nav>
          
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;




import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header({ links }) {

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map((link, index) => (
              <Nav.Link key={index} href={link.href}>
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
