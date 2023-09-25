import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Perfil() {
  const navigate = useNavigate();
  const { nombre } = useParams();
  const [datosUsuario, setDatosUsuario] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/api/clientes/${nombre}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setDatosUsuario(data);
        }
        // else {
        //   navigate("/error");
        // }
      })
      .catch((error) => {});
  }, [nombre, navigate]);

  return (
    <>
      <head className="head-perfil"></head>
      <div>
        <h1>Perfil de Usuario</h1>
        <p>Nombre: {nombre}</p>
      </div>
    </>
  );
}

export default Perfil;
