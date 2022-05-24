import React from "react";
import "../assets/css/Container.css";
import Data from "./Data";
import Form from "./Form";

const Container = () => {
  return (
    <>
      <div className="container">
        <Form />
        <Data />
      </div>
    </>
  );
};

export default Container;
