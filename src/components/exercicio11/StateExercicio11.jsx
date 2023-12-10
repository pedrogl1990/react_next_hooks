import React, { useState } from "react";
import StateExercicio11Child1 from "./StateExercicio11Child1";

function StateExercicio11() {
  const [texto, setTexto] = useState("");

  return (
    <>
      <label>texto:</label>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <StateExercicio11Child1 texto={texto} />
    </>
  );
}

export default StateExercicio11;
