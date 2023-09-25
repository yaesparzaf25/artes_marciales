import React, { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

Modal.setAppElement("#root");

function ModalForm() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleHourChange = (e) => {
    setSelectedHour(e.target.value);
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = () => {
    if (!selectedDate || !selectedHour || !userId) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const dataToSend = {
      fecha: selectedDate.toISOString().split("T")[0],
      hora: selectedHour,
      id: userId,
    };
    fetch(`http://localhost:8000/api/clientes/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta del servidor:", data);
      })
      .catch((error) => {
        alert("Hubo un error en la solicitud.");
      });

    closeModal();
  };

  return (
    <div>
      <button className="boton-editar" onClick={openModal}>
        Editar o Añadir Clase
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Editar o Añadir Clase"
        className="modal-container"
        overlayClassName="modal-overlay"
      >
        <h2>Seleciona un día y hora</h2>
        <label>Selecciona una fecha:</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          withPortal
        />
        <select value={selectedHour} onChange={handleHourChange}>
          <option value="">Selecciona una hora</option>
          <option value="5-6pm">5-6pm</option>
          <option value="6-7pm">6-7pm</option>
        </select>
        <label>Ingresa tu id:</label>
        <input type="text" value={userId} onChange={handleUserIdChange} />
        <button className="boton-form" onClick={handleSubmit}>
          Enviar
        </button>
        <button className="boton-form " onClick={closeModal}>
          Cerrar
        </button>
      </Modal>
    </div>
  );
}

export default ModalForm;
