import React, { useState } from "react";
import StateExercicio2Childs from "./StateExercicio2Childs";

function StateExercicio2Main() {
  const [valor1, setValor1] = useState(1);
  const [valor2, setValor2] = useState(1);
  const [valor3, setValor3] = useState(1);

  const adicionar = (func, value, fator) => {
    func(value + fator);
  };

  const diminuir = (func, value, fator) => {
    func(value - fator);
  };

  return (
    <div className="contadores">
      <StateExercicio2Childs
        adicionar={adicionar}
        diminuir={diminuir}
        valor={valor1}
        setValor={setValor1}
        counter={"1"}
        fator={1}
      />
      <StateExercicio2Childs
        adicionar={adicionar}
        diminuir={diminuir}
        valor={valor2}
        setValor={setValor2}
        counter={"2"}
        fator={5}
      />
      <StateExercicio2Childs
        adicionar={adicionar}
        diminuir={diminuir}
        valor={valor3}
        setValor={setValor3}
        counter={"3"}
        fator={10}
      />
    </div>
  );
}

export default StateExercicio2Main;
