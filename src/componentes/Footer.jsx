import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-3">
      <Container className="text-center">
        <p>© {new Date().getFullYear()} M.A Portafolio.</p>
      </Container>
    </footer>
   
  );
}

export default Footer;


// <footer>
// <section
//   class="seccion__contacto bg-dark text-white pt-lg-4"
//   id="contacto"
// >
//   <div class="container p-4">
//     <div class="row mx-auto">
//       <div class="col-12 col-md-6">
//         <p>
//           <a href="https://wa.me/+542284656640" class="link_whatsapp">
//             <i class="fab fa-whatsapp"></i> Enviar whatsApp
//           </a>
//         </p>

//         <p class="link__cel">
//           <i class="fas fa-phone"></i> +54 2284656640
//         </p>
//         <p class="link__correo">
//           <i class="far fa-envelope"></i> marco_95_5@yahoo.com
//         </p>

//         <p>
//           <i class="fas fa-map-marker-alt"></i> Olavarría, Buenos Aires,
//           Argentina
//         </p>
//       </div>

//       <div class="col-12 col-md-6 col-lg-4 card__wrapper">
//         <form
//           action="https://formspree.io/f/mjvqkwej"
//           method="POST"
//           class="w-lg-50 mx-auto"
//         >
//           <div class="form-group">
//             <input
//               type="email"
//               name="email"
//               class="form-control mb-2"
//               placeholder="Email"
//             />
//             <textarea
//               name="message"
//               class="form-control mb-2 form__mensaje"
//               placeholder="Mensaje"
//             ></textarea>
//             <button type="submit" class="btn btn-secondary w-100">
//               Enviar
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// </section>
// </footer>
