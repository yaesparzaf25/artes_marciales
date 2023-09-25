// import React from 'react';
// import LOGO from '../assets/images/logo.png';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <img className="logo" src={LOGO} alt="logo" />
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import LOGO from '../assets/images/logo.png';
import ClienteList from './ClientList'; // Importa el componente ClienteList

function Navbar() {
  const [mostrarClientes, setMostrarClientes] = useState(false); // Estado para controlar la visibilidad de ClienteList

  const handleMostrarClientes = () => {
    setMostrarClientes(true); // Al hacer clic en el botón, establece mostrarClientes en true
  };

  return (
    <nav className="navbar">
      <img className="logo" src={LOGO} alt="logo" />
    </nav>
  );
}

export default Navbar;
