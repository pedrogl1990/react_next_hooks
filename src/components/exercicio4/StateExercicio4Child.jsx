import React from "react";

function StateExercicio4Child(props) {
  const aumentar = () => {
    props.setValor(props.valor + props.fator);
  };

  const diminuir = () => {
    props.setValor(props.valor - props.fator);
  };

  return (
    <>
      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>
    </>
  );
}

export default StateExercicio4Child;
