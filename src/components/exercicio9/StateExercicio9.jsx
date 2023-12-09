import React, { useState } from "react";
import "./SteteExercicio9.css";

function StateExercicio9() {
  const [estiloUm, setEstiloUm] = useState(true);

  const mudarEstilo = () => {
    setEstiloUm(!estiloUm);
  };
  return (
    <>
      <p className={estiloUm ? "paragrafo classUm" : "paragrafo classDois"}>
        Um parágrafo
      </p>
      <button onClick={mudarEstilo}>Alternar Estilo</button>
    </>
  );
}

export default StateExercicio9;
