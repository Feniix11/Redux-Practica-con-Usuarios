import { createSlice } from "@reduxjs/toolkit";

export const miSlice = createSlice({
  name: "misTrabajadores",
  initialState: {
    trabajadores: [],
  },
  reducers: {
    agregarUnValor: (state, action) => {
      state.trabajadores = [...state.trabajadores, action.payload];
    },
    modificarUnValor: (state, action) => {
      const { index, nuevoDepartamento } = action.payload;

      state.trabajadores[index].departamento = nuevoDepartamento;
    },
    eliminarUnValor: (state, action) => {
      const { nombre, apellido, telefono } = action.payload;

      state.trabajadores = state.trabajadores.filter(
        (valor) =>
          valor.name.first !== nombre &&
          valor.name.last !== apellido &&
          valor.cell !== telefono
      );
    },
  },
});

export const departamentosSlice = createSlice({
  name: "misDepartamentos",
  initialState: {
    departamentos: [
      "Departamento de Finanzas",
      "Departamento de Recursos Humanos",
      "Departamento de Marketing y Publicidad",
      "Departamento Comercial",
      "Departamento de Compras",
      "Departamento de Logística",
      "Departamento de Gestión y Administración",
      "Departamento Directivo",
    ],
  },
  reducers: {},
});

export const { agregarUnValor } = miSlice.actions;
export const { modificarUnValor } = miSlice.actions;
export const { eliminarUnValor } = miSlice.actions;
