import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wregi1i",
        "template_t30ubel",
        form.current,
        "LybJfHsngnMNhmfOs"
      )
      .then(() => {
        alert("Mensaje enviado correctamente");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error al enviar", error);
        alert("Hubo un error al enviar el mensaje");
      });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-content">
        <div className="contact-left">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Nombre" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <textarea name="message" rows="5" placeholder="Mensaje" required />
            <div className="form-buttons">
              <button type="submit" className="btn-accent">
                Enviar
              </button>
              {/* <button type="reset" className="btn-reset">Reset</button> */}
            </div>
          </form>
        </div>

        <div className="contact-right">
          <div className="info-block">
            <FaMapMarkerAlt />
            <div>
              <h5>Olavarría</h5>
              <p>
                Buenos Aires
                <br />
                Argentina
              </p>
            </div>
          </div>

          <div className="info-block">
            <FaEnvelope />
            <div>
              <h5>Email</h5>
              <p>marco_95_5@yahoo.com</p>
            </div>
          </div>

          <div className="info-block">
            <FaPhone />
            <div>
              <h5>Teléfono</h5>
              <p>+5942284656640</p>
            </div>
          </div>
        </div>

        {/* <div className="contact-map">
          <iframe
            title="Ubicación - Olavarría"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13116.79490593846!2d-60.333761500000005!3d-36.89230505000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95e7095ea9f2756b%3A0xf41cbccde21cfbd!2sOlavarr%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1719343600000!5m2!1ses-419!2sar"
            style={{
              width: "100%",
              height: "100%",
              border: 0,
              borderRadius: "10px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Contacto;
