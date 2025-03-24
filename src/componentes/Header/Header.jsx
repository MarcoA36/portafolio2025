import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css"
function Header({ links }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar className="navbar" expand="lg" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand className="navbar_brand" href="#home" onClick={() => setExpanded(false)}>
          Portafolio
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)} 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map((link, index) => (
                 <Nav.Link className="navbar_link" key={index} href={link.href} onClick={() => setExpanded(false)}>
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
