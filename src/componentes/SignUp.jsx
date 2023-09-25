import React, { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    genero: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/api/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta del servidor:", data);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  };

  return (
    <div className="signup-principal">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            required
            value={formData.apellido}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">
            Edad
          </label>
          <input
            type="number"
            className="form-control"
            id="edad"
            required
            value={formData.edad}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genero" className="form-label">
            Género
          </label>
          <select
            className="form-select"
            id="genero"
            required
            value={formData.genero}
            onChange={handleChange}
          >
            <option value="" disabled>
              Selecciona tu género
            </option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <button type="submit" className="btn-signup">
          REGISTRARSE
        </button>
      </form>
    </div>
  );
}

export default SignUp;
