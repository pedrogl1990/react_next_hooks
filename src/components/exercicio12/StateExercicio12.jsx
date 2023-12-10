import React, { useState } from "react";
import StateExercicio12Child1 from "./StateExercicio12Child1";

function StateExercicio12() {
  const [texto, setTexto] = useState("");
  const [textos, setTextos] = useState([]);

  const guardartextos = () => {
    setTextos((prev) => [...prev, texto]);
    setTexto("");
  };

  return (
    <>
      <label>texto:</label>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={guardartextos}>Guardar Valor</button>
      <StateExercicio12Child1 texto={texto} />
      <ul>
        {textos.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </>
  );
}

export default StateExercicio12;
