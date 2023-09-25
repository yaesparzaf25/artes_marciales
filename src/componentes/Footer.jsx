import React from "react";
import IconoWapp from "../assets/iconosInf-02.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="politica">
            <h3><strong>Aviso de Privacidad</strong></h3>
            <p>Tu privacidad es importante para nosotros. por eso ningun dato será compartido con externos.
                La información personal es con el fin de tener una agenda.</p>
          </div>
          <div className="contacto">
            <h3>Contacto</h3>
            <p>Cualquier duda:</p>
            <p><img src={IconoWapp} alt="Icono de WhatsApp" /> (443)-491-21-36</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
