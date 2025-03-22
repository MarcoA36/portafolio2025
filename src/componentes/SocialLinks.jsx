import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const SocialLinks = ({
  githubColor = "text-dark",
  envelopeColor = "text-primary",
  whatsappColor = "text-success",
}) => {

  const size = 32
  return (
    <div className="social-links mt-3">
      <a
        href="https://github.com/MarcoA36"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={size} className={`m-2 ${githubColor}`} />
      </a>
      <a href="mailto:marcoamaolo91@gmail.com">
        <FaEnvelope size={size} className={`m-2 ${envelopeColor}`} />
      </a>
      <a href="https://wa.me/+5492284656640">
        <FaWhatsapp size={size} className={`m-2 ${whatsappColor}`} />
      </a>
    </div>
  );
};

export default SocialLinks;
