import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import LOGO from '../assets/images/logo.png';

function Navbar({ props }) {
  const [inactivo, setInactivo] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (props === 'login') {
      setInactivo(false);
    }
  }, [props]);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <img className="logo" src={LOGO} alt="logo" />
      <button
        className="btn btn-primary"
        onClick={handleLogout}
        disabled={inactivo}
      >
        Cerrar Sesión
      </button>
    </nav>
  );
}

export default Navbar;
