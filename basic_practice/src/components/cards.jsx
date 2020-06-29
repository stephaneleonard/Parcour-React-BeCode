import React from "react";

const Card = (props) => {
  return (
    <div className="card-container">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default Card;
