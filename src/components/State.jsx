import React from "react";
import { useState } from "react";

function App() {
  const [valor, setValor] = useState(0);

  const incrementar = (v) => {
    setValor(valor + v);
  };

  const decrementar = (v) => {
    setValor(valor - v);
  };

  return (
    <>
      <p>Contador: {valor}</p>
      <button onClick={() => incrementar(1)}>Incrementar</button>
      <button onClick={() => incrementar(10)}>Incrementar 10x</button>
      <button onClick={() => decrementar(1)}>Decrementar</button>
      <button onClick={() => decrementar(10)}>Decrementar 10x</button>
    </>
  );
}

export default App;
