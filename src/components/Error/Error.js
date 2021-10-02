import React from "react";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-bg">
      <MenuBar></MenuBar>
      <h1 className="text-danger mt-5">Cant found error 404 !!!</h1>
    </div>
  );
};

export default Error;
