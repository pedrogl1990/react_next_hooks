import React from "react";
import { useState } from "react";

function App() {
  const [valor, setValor] = useState(0);

  const incrementar = () => {
    setValor(valor + 1);
  };

  const decrementar = () => {
    setValor(valor - 1);
  };

  return (
    <>
      <p>Contador: {valor}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </>
  );
}

export default App;
