import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
const SocialLinks = () => {
  return (
    <div id="contacto" className="social-links mt-3">
      <a
        href="https://github.com/MarcoA36"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} className="m-2 text-dark" />
      </a>
      <a href="mailto:marcoamaolo91@gmail.com">
        <FaEnvelope size={24} className="m-2" />
      </a>
      <a href="https://wa.me/+5492284656640">
        <FaWhatsapp size={24} className="m-2 text-success" />
      </a>
    </div>
  );
};

export default SocialLinks;
