import { Button } from "react-bootstrap";
import "./ButtonRef.css"
const ButtonRef = ({ href, children, className= "button-default" }) => {
  return (
    <Button
      href={href}
      className={`${className} m-1`} 
    >
      {children}
    </Button>
  );
};

export default ButtonRef;
