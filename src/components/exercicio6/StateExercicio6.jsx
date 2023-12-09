import React from "react";
import { useState } from "react";

function StateExercicio6() {
  const [cliente, setCliente] = useState({
    nome: "Pedro",
    apelido: "Leite",
    cidade: "Porto",
    email: "pgleite1990@gmail.com",
  });

  const editarInfo = (campo, dados) => {
    const updateClient = { ...cliente, [campo]: dados };
    setCliente(updateClient);
  };

  return (
    <>
      <p>Nome:{cliente.nome}</p>
      <p>Apelido:{cliente.apelido}</p>
      <p>Cidade:{cliente.cidade}</p>
      <p>Email:{cliente.email}</p>
      <button onClick={() => editarInfo("nome", "Ana Rita")}>
        Alterar Nome
      </button>
      <button onClick={() => editarInfo("apelido", "Dias")}>
        Alterar Apelido
      </button>
      <button onClick={() => editarInfo("cidade", "Ponte de Lima")}>
        Alterar Cidade
      </button>
      <button onClick={() => editarInfo("email", "a.rita.dias@hotmail.com")}>
        Alterar Email
      </button>
    </>
  );
}

export default StateExercicio6;
