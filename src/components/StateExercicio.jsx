import React from "react";
import { useState } from "react";

function StateExercicio() {
  const [valor1, setValor1] = useState(1);
  const [valor2, setValor2] = useState(1);

  const adicionar = (func, value, fator) => {
    func(value + fator);
  };

  const diminuir = (func, value, fator) => {
    func(value - fator);
  };

  return (
    <>
      <p>{valor1}</p>
      <button onClick={() => adicionar(setValor1, valor1, 1)}>+</button>
      <button onClick={() => diminuir(setValor1, valor1, 1)}>-</button>
      <hr />
      <p>{valor2}</p>
      <button onClick={() => adicionar(setValor2, valor2, 1)}>+</button>
      <button onClick={() => diminuir(setValor2, valor2, 1)}>-</button>
      <hr />
      <p>
        O resultado de {valor1} x {valor2} = {valor1 * valor2}
      </p>
    </>
  );
}

export default StateExercicio;
