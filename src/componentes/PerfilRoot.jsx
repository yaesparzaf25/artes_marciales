import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import "../styles/estilos.css";
import logoimagen from "../assets/images/logo.png";

function PerfilRoot() {
  const [datos, setDatos] = useState([]);
  const [datosAgrupados, setDatosAgrupados] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/api/clientes")
      .then((response) => response.json())
      .then((data) => {
        setDatos(data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  useEffect(() => {
    // Agrupa los datos por fecha
    const agrupados = {};
    datos.forEach((dato) => {
      const fecha = dato.fecha;
      if (!agrupados[fecha]) {
        agrupados[fecha] = [];
      }
      agrupados[fecha].push(dato);
    });
    setDatosAgrupados(agrupados);
  }, [datos]);

  return (
    <>
      <Navbar props={"login"} />
      <div className="contenedor-agenda">
        <div className="agenda-izquierda">
          <h1><strong>AGENDA</strong> </h1>
          <br></br>
          <h2>HOLA, Arturo.</h2>
          <img src={logoimagen} alt="logo"/>
        </div>
        <div className="agenda">
          {Object.keys(datosAgrupados).map((fecha) => (
            <div key={fecha}>
              <h2>Fecha: {fecha}</h2>
              <div className="tabla-agenda">
                <table>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Edad</th>
                      <th>Género</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datosAgrupados[fecha].map((dato) => (
                      <tr key={dato.id}>
                        <td>
                          {dato.nombre} {dato.apellido}
                        </td>
                        <td>{dato.edad}</td>
                        <td>{dato.genero}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PerfilRoot;
