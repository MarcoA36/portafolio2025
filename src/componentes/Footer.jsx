import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-3">
      <Container className="text-center">
        <p>© {new Date().getFullYear()} M.A Portafolio. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}

export default Footer;
