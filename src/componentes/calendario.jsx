import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const Calendario = () => {
  const [events, setEvents] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelect = ({ start }) => {
    const currentDate = new Date();
    const selectedDate = new Date(start);

    if (selectedDate >= currentDate) {
      setSelectedDate(start);
      setShowCalendar(false);
    } else {
      alert('Selecciona una fecha del día de hoy en adelante.');
    }
  };

  const handleOpenCalendar = () => {
    setShowCalendar(true);
  };

  return (
    <div>
      <button onClick={handleOpenCalendar}>Abrir Calendario</button>
      {showCalendar && (
        <div>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            selectable
            onSelectSlot={handleSelect}
          />
        </div>
      )}
      {selectedDate && (
        <div>
          <p>Fecha seleccionada:</p>
          <p>{moment(selectedDate).format('LL')}</p>
        </div>
      )}
    </div>
  );
};

export default Calendario;
