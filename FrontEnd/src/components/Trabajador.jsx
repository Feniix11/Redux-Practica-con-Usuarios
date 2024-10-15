import React from "react";
import { useSelector } from "react-redux";

const Trabajador = ({ valor, index, onActualizar, onEliminar }) => {
  const departamentos = useSelector(
    (state) => state.misDepartamentos.departamentos
  );
  return (
    <>
      <div className="columna">
        <div className="fotoUsuario">
          <img src={valor.picture.large} alt="" />
        </div>
        <div className="nombreUsuarios">
          <strong>
            {valor.name.last}, {valor.name.first}
          </strong>
        </div>
        <div>{valor.location.city}</div>
        <div>({valor.location.country})</div>
        <div>
          <select
            value={valor.departamento || "Selecciona:"}
            onChange={(event) => onActualizar(event.target.value, index)}
          >
            <option disabled>Selecciona:</option>
            {departamentos.map((departamento, i) => (
              <option key={i} value={departamento}>
                {departamento}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button className="rojo" onClick={() => onEliminar(valor)}>
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default Trabajador;
