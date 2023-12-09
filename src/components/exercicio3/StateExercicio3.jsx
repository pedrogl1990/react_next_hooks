import React from "react";
import { useState } from "react";
import StateExercicio3Child from "./StateExercicio3Child";

function StateExercicio3() {
  const [valor, setValor] = useState(1);

  const atualizar = () => {
    setValor(1000);
  };

  return (
    <>
      <p>Valor: {valor}</p>
      <hr />
      <StateExercicio3Child atualizar={atualizar} />
    </>
  );
}

export default StateExercicio3;
