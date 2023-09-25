import React, { useEffect, useState } from 'react';
import Vendas from '../assets/images/vendas_shop.jpg';
import Bucal from '../assets/images/bucal_shop.jpg';
import Guantes from '../assets/images/guantes_shop.jpg';


const Publicidad = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [Guantes, Vendas, Bucal];

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === images.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="contenedor-carrusel">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <img
                src={image}
                alt={`Imagen ${index + 1}`}
                className="d-block w-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publicidad;
