import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ModalForm from "./ModalForm";
import Footer from "./Footer";
import Publicidad from "./Publicidad";
import Navbar from "./navbar";

function Perfil() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [datosUsuario, setDatosUsuario] = useState({});

  const eliminarClase = () => {
    const datosAEliminar = {
      fecha: datosUsuario.fecha,
      hora: datosUsuario.hora,
    };

    fetch(`http://localhost:8000/api/clientes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosAEliminar),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.response) {
          setDatosUsuario(data.datos);
        } else {
          console.error("Error al eliminar la clase.");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud DELETE:", error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:8000/api/clientes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setDatosUsuario(data);
        }
      })
      .catch((error) => {});
  }, [id, navigate]);

  return (
    <>
    <Navbar props={"login"} />
      <div className="head-perfil">
        <h1>¿TODO LISTO, {datosUsuario.nombre}?</h1>
        <h2>¡EMPECEMOS!</h2>
      </div>
      <div className="contenedor-info">
        <div className="info-perfil">
          <h2>
            <strong>TUS DATOS</strong>
          </h2>
          <p>
            <strong>ID:</strong> {datosUsuario.id}
          </p>
          <p>
            <strong>Nombre: </strong>
            {datosUsuario.nombre} {datosUsuario.apellido}
          </p>
          <p>
            <strong>Edad: </strong>
            {datosUsuario.edad} años
          </p>
        </div>
        <div className="editar-eliminar">
          <h2>Elige tu clase.</h2>
          <ModalForm />
          <h2>Tu clase es:</h2>
          <div className="tabla">
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Cancelar cita</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{datosUsuario.fecha}</td>
                  <td>{datosUsuario.hora}</td>
                  <td>
                    <button onClick={eliminarClase}>Eliminar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="Seccion-publicidad">
          <h2>LO NUEVO:</h2>
          <h3>Adquierelo en el gimnasio.</h3>
          <Publicidad/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Perfil;
