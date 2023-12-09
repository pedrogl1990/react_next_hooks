import React from "react";
import { useState } from "react";
import StateExercicio8Child1 from "./StateExercicio8Child1";
import StateExercicio8Child2 from "./StateExercicio8Child2";
import StateExercicio8Child3 from "./StateExercicio8Child3";

function StateExercicio8() {
  const [selecionado, setSelecionado] = useState("");
  let componenteSelecionado = "";

  switch (selecionado) {
    case "":
      componenteSelecionado = <p>Nenhum componente exibido</p>;
      break;
    case "child1":
      componenteSelecionado = <StateExercicio8Child1 />;
      break;
    case "child2":
      componenteSelecionado = <StateExercicio8Child2 />;
      break;
    case "child3":
      componenteSelecionado = <StateExercicio8Child3 />;
      break;
    default:
      break;
  }

  return (
    <>
      <select onChange={(e) => setSelecionado(e.target.value)}>
        <option value="">Nenhum</option>
        <option value="child1">Child 1</option>
        <option value="child2">Child 2</option>
        <option value="child3">Child 3</option>
      </select>
      {componenteSelecionado}
    </>
  );
}

export default StateExercicio8;
