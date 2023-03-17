import React from "react";

const StreamerTitle = (props) => {
  return (
    <div className="py-2 mr-2">
      <h3 className="text-xl font-bold flex-wrap ">{props.title}</h3>
    </div>
  );
};

export default StreamerTitle;
