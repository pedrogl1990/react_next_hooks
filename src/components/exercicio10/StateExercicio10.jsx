import React, { useState } from "react";
import StateExercicio10Child1 from "./StateExercicio10Child1";
import StateExercicio10Child2 from "./StateExercicio10Child2";

function StateExercicio10() {
  const [umVisivel, setUmVisivel] = useState(true);

  const mudarComponente = () => {
    setUmVisivel(!umVisivel);
  };
  return (
    <>
      {umVisivel ? <StateExercicio10Child1 /> : <StateExercicio10Child2 />}
      <button onClick={mudarComponente}>Mudar componente</button>
    </>
  );
}

export default StateExercicio10;
