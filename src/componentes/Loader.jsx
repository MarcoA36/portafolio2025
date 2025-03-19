import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Spinner animation="border" role="status" variant="success" style={{ width: "4rem", height: "4rem" }} />
  </div>
);

export default Loader;
