import React from "react";
import { useState } from "react";

function StateExercicio7() {
  const [logado, setLogado] = useState(false);

  return (
    <>
      {logado ? <p>Usuário logado</p> : <p>Usuário não logado</p>}
      <button onClick={() => setLogado(!logado)}>
        {logado ? "Logout" : "Login"}
      </button>
    </>
  );
}

export default StateExercicio7;
