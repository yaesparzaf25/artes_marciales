import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Importa Link
import SignUp from "./SignUp";

function Login() {
  const navigate = useNavigate();
  const [mostrarLogin, setMostrarLogin] = useState(true);

  const manejarClickRegistro = () => {
    navigate("/signup");
  };

  const manejarClickIngresar = () => {
    const inputId = document.getElementById("id-input");
    const userId = inputId.value;

    fetch(`http://localhost:8000/api/clientes/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userId }),
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        if (data.id) {
          navigate(`/profile/${data.id}`);
        } else {
          alert("No se encontró el usuario");
        }
      })
      .catch((error) => {
        alert("404. Hay un error en la solicitud. No se encontró el usuario");
      });
  };

  return (
    <div className="App">
        <div className="index">
          <h1>REGISTRO DE CLASES</h1>
          <div className="principal">
            <div className="botones">
              <form className="write-id">
                <h2>¿Ya eres parte de nuestro equipo?</h2>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Introduce tu ID"
                    required
                    id="id-input"
                  />
                  <button
                    type="button"
                    className="boton-id"
                    onClick={manejarClickIngresar}
                  >
                    INGRESAR
                  </button>
                </div>
              </form>
              <div className="nuevo">
                <h2>¿Eres nuevo?</h2>
                <Link to="/signup"> {/* Utiliza Link para ir a la ruta /signup */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={manejarClickRegistro}
                  >
                    INSCRIBIRSE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Login;
