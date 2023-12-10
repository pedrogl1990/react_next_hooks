import React from "react";
import { useRef } from "react";

function UseRefComp() {
  const valor = useRef(0);

  // vai fazer o update do valor mas não renderiza a tela, ou seja, o valor é atualizado mas não se vê a alteração no browser

  const incrementar = (v) => {
    valor.current = valor.current + v;
    console.log(valor.current);
  };

  console.log("renderizado");

  return (
    <>
      <p>Contador: {valor.current}</p>
      <button onClick={() => incrementar(1)}>Incrementar</button>
    </>
  );
}

export default UseRefComp;
