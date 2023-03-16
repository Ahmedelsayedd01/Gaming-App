import React from "react";
import { Link } from "react-router-dom";

const Live = (props) => {
  return (
    <div className="absolute top-4 right-5">
      <Link to={props.link} className="btn-s text-">
        {props.name}
      </Link>
    </div>
  );
};

export default Live;
