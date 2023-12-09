import React from "react";

function StateExercicio5Child(props) {
  return (
    <>
      <button onClick={props.aumentar}>+</button>
      <button onClick={props.diminuir}>-</button>
    </>
  );
}

export default StateExercicio5Child;
