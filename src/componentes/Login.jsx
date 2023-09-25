import React, { useState } from "react";
import SignUp from "./SignUp";

function Login() {
  const [showLogin, setShowLogin] = useState(true);

  const handleSignUpClick = () => {
    setShowLogin(false);
  };

  const handleIngresarClick = () => {
    const idInput = document.getElementById("id-input");
    const userId = idInput.value;

    fetch(`http://localhost:8000/api/clientes/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userId }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta del servidor:", data);

        if (data.existe) {
          alert("Usuario encontrado en la base de datos.");
        } else {
          alert("Usuario no encontrado en la base de datos.");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  };

  return (
    <div className="App">
      {showLogin ? (
        <div className="index">
          <h1>REGISTRO DE CLASES</h1>
          <div className="principal">
            <div className="botones">
              <form className="write-id">
                <h2>¿Ya formas parte de nuestro equipo?</h2>
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
                    onClick={handleIngresarClick}
                  >
                    INGRESAR
                  </button>
                </div>
              </form>
              <div className="nuevo">
                <h2>¿Eres nuevo?</h2>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSignUpClick}
                >
                  INSCRIBIRSE
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {showLogin || <SignUp />}
    </div>
  );
}

export default Login;
