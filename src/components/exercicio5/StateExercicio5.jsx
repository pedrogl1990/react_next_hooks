import React from "react";
import { useState } from "react";
import StateExercicio5Child from "./StateExercicio5Child";

function StateExercicio5() {
  const [valores, setValores] = useState([0, 1, 2]);

  const aumentar = (n) => {
    let temp = [];
    temp = { ...valores };
    temp[n] = temp[n] + 1;
    setValores(temp);
  };

  const diminuir = (n) => {
    let temp = [];
    temp = { ...valores };
    temp[n] = temp[n] - 1;
    setValores(temp);
  };

  return (
    <>
      <ul>
        <li>{valores[0]}</li>
        <li>{valores[1]}</li>
        <li>{valores[2]}</li>
      </ul>
      <StateExercicio5Child
        aumentar={() => aumentar(0)}
        diminuir={() => diminuir(0)}
      />
      <StateExercicio5Child
        aumentar={() => aumentar(1)}
        diminuir={() => diminuir(1)}
      />
      <StateExercicio5Child
        aumentar={() => aumentar(2)}
        diminuir={() => diminuir(2)}
      />
    </>
  );
}

export default StateExercicio5;
