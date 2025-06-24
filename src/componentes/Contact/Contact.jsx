import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt} from "react-icons/fa";

const Contacto = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-content">
        <div className="contact-left">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" name="name" placeholder="Nombre" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <textarea name="message" rows="5" placeholder="Mensaje" required />
            <div className="form-buttons">
              <button type="submit" className="btn-accent">Enviar</button>
              {/* <button type="reset" className="btn-reset">Reset</button> */}
            </div>
          </form>
        </div>

        <div className="contact-right">
          <div className="info-block">
            <FaMapMarkerAlt />
            <div>
              <h5>Olavarría</h5>
              <p>Buenos Aires<br />Argentina</p>
            </div>
          </div>

          <div className="info-block">
            <FaEnvelope />
            <div>
              <h5>Email</h5>
              <a href="mailto:info@untitled.tld">marco_95_5@yahoo.com</a>
            </div>
          </div>

          <div className="info-block">
            <FaPhone />
            <div>
              <h5>Número</h5>
              <p>+5942284656640</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
