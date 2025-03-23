// import { Button } from "react-bootstrap";
// import "./ButtonRef.css"
// const ButtonRef = ({ href, children, className= "button-default" }) => {
//   return (
//     <Button
//       href={href}
//       className={`${className} m-1`} 
//     >
//       {children}
//     </Button>
//   );
// };

// export default ButtonRef;



import { Button } from "react-bootstrap";
import "./ButtonRef.css";

const ButtonRef = ({ href, onClick, children, className = "button-default" }) => {
  return (
    <Button
      className={`${className} m-1`}
      href={href || undefined} // Solo agrega href si existe
      onClick={onClick || undefined} // Solo agrega onClick si existe
      rel={href ? "noopener noreferrer" : undefined} // Seguridad para enlaces externos
    >
      {children}
    </Button>
  );
};

export default ButtonRef;
