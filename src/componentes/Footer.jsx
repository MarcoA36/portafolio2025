import { Container } from "react-bootstrap";
import SocialLinks from "./SocialLinks";
import { FaMapMarkerAlt} from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className="footer bg-dark text-white py-3">
      <Container className="text-center">
      <div class="card bg-dark text-light">
           <SocialLinks githubColor="text-light"/>

              <p>
                <FaMapMarkerAlt /> Olavarría, Buenos Aires,
                Argentina
              </p>
            </div>
        {/* <p>© {new Date().getFullYear()} M.A Portafolio.</p> */}
      </Container>
    </footer>
   
  );
}

export default Footer;

