import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header({ links }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          Portafolio
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)} 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map((link, index) => (
                 <Nav.Link key={index} href={link.href} onClick={() => setExpanded(false)}>
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
