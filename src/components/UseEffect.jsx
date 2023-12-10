import React from "react";
import { useState, useEffect } from "react";

function UseEffectComp() {
  const [valor, setValor] = useState(0);
  const [nome, setNome] = useState("");

  const incrementar = (v) => {
    setValor(valor + 1);
  };

  const definirNome = () => {
    setNome("Pedro Leite");
  };

  // vai controlar a execução de um trecho de código com a renderização inicial ou de um determinado valor

  useEffect(() => {
    console.log("renderizado apenas no inicio");
  }, []);

  useEffect(() => {
    console.log("renderizado quando o valor é alterado");
  }, [valor]);

  useEffect(() => {
    console.log("renderizado quando o nome é alterado");
  }, [nome]);

  useEffect(() => {
    console.log("renderizado quando o nome e valor sejam alterados");
  }, [valor, nome]);

  return (
    <>
      <p>Contador: {valor}</p>
      <button onClick={() => incrementar(1)}>Incrementar</button>
      <hr />
      <p>Nome: {nome}</p>
      <button onClick={definirNome}>Definir nome</button>
    </>
  );
}

export default UseEffectComp;
