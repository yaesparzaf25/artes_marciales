import React, { useState } from "react";

const HorarioSelector = () => {
  const [horarioSeleccionado, setHorarioSeleccionado] = useState("");

  const handleSeleccion = (e) => {
    setHorarioSeleccionado(e.target.value);
  };

  return (
    <div>
      <h2>Selecciona un horario:</h2>
      <select value={horarioSeleccionado} onChange={handleSeleccion}>
        <option value="">Selecciona un horario</option>
        <option value="6-7pm">6-7 pm</option>
        <option value="7-8pm">7-8 pm</option>
      </select>
      {horarioSeleccionado && (
        <p>Has seleccionado: {horarioSeleccionado}</p>
      )}
    </div>
  );
};

export default HorarioSelector;
