import React, { useState, useEffect } from 'react';

function ClienteList() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/clientes')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo obtener la lista de clientes');
        }
        return response.json();
      })
      .then((data) => {
        setClientes(data);
      })
      .catch((error) => {
        console.error('Error al obtener datos de clientes:', error);
      });
  }, []);

  return (
    <div>
      <h2>Listado de Clientes</h2>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            {cliente.nombre} {cliente.apellido} - Edad: {cliente.edad}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClienteList;
