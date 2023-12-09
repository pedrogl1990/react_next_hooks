import React from "react";
import { useState } from "react";
import StateExercicio4Child from "./StateExercicio4Child";

function StateExercicio4() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);

  return (
    <>
      <p>
        A adição de {valor1} com {valor2} = {valor1 + valor2}
      </p>
      <hr />
      <StateExercicio4Child fator={5} valor={valor1} setValor={setValor1} />
      <hr />
      <StateExercicio4Child fator={10} valor={valor2} setValor={setValor2} />
    </>
  );
}

export default StateExercicio4;
