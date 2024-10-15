import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { modificarUnValor } from "../store/miSlice";
import { eliminarUnValor } from "../store/miSlice";

import Trabajador from "./Trabajador";

const Gestion = () => {
  const dispatch = useDispatch();
  const listaTrabajadores = useSelector(
    (state) => state.misTrabajadores.trabajadores
  );

  const actualizar = (departamento, index) => {
    dispatch(
      modificarUnValor({ index: index, nuevoDepartamento: departamento })
    );
  };

  const eliminar = (valor) => {
    dispatch(
      eliminarUnValor({
        nombre: valor.name.first,
        apellido: valor.name.last,
        telefono: valor.cell,
      })
    );
  };
  return (
    <>
      <h1>Trabajadores: </h1>
      <Link to="/candidatos">
        <button>Candidatos</button>
      </Link>
      <div className="usuarios">
        {listaTrabajadores.map((valor, index) => (
          <Trabajador
            valor={valor}
            index={index}
            onActualizar={actualizar}
            onEliminar={eliminar}
          />
        ))}
      </div>
    </>
  );
};

export default Gestion;
