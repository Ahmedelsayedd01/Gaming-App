import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <button className="btn">
      <Link to={props.link}>{props.name}</Link>
    </button>
  );
};

export default Button;
