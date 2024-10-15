import React, { useEffect, useState } from "react";
import Candidato from "./Candidato";
import { useDispatch, useSelector } from "react-redux";
import { agregarUnValor } from "../store/miSlice";
import { Link } from "react-router-dom";

const Listado = () => {
  const dispatch = useDispatch();
  const [candidatos, setCandidatos] = useState([]);
  const listaTrabajadores = useSelector(
    (state) => state.misTrabajadores.trabajadores
  );

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((response) => response.json())
      .then((datos) => setCandidatos(datos.results));
  }, []);

  const buscarUno = (index) => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((datos) => {
        const provisional = [...candidatos];
        provisional[index] = { ...datos.results[0] };
        setCandidatos(provisional);
      });
  };

  const guardarUno = (valor, index) => {
    const nuevoValor = { ...valor, departamento: "" };
    dispatch(agregarUnValor(nuevoValor));
    buscarUno(index);
  };
  return (
    <>
      <h1>Candidatos: </h1>
      <Link to="/gestion">
        <button>Trabajadores</button>
      </Link>
      <div className="presentacion">
        {candidatos.map((valor, index) => (
          <Candidato
            key={valor.login.uuid}
            valor={valor}
            index={index}
            onBuscarUno={buscarUno}
            onGuardarUno={guardarUno}
          />
        ))}
      </div>
      <hr />
      <div className="candidatos">
        {listaTrabajadores.map((valor, index) => (
          <Link key={valor.login.uuid} to="/gestion">
            <button>{valor.name.first}</button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Listado;
