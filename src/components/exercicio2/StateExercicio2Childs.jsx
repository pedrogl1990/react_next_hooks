import React from "react";

function StateExercicio2Childs(props) {
  return (
    <div className="contador">
      <p>
        Contador {props.counter}: {props.valor}
      </p>
      <button
        onClick={() =>
          props.adicionar(props.setValor, props.valor, props.fator)
        }
      >
        Incrementar
      </button>
      <button
        onClick={() => props.diminuir(props.setValor, props.valor, props.fator)}
      >
        Decrementar
      </button>
    </div>
  );
}

export default StateExercicio2Childs;
