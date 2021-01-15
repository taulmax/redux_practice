import React from "react";

const Counter = ({ number, plus, minus }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={plus}>PLUS</button>
        <button onClick={minus}>MINUS</button>
      </div>
    </div>
  );
};

export default Counter;
