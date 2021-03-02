import React from "react";
import {Button} from "react-bootstrap";
import "./Error.css";
const Error = ({history}) => {
  return (
    <div className="error">
      <img src="https://i.stack.imgur.com/6M513.png" alt="erreur" />
      <Button onClick={() => history.goBack()}>Go Back</Button>
    </div>
  );
};

export default Error;
