import React, { useState } from 'react';
import './IconTextSwitcher.css'; // Asegúrate de tener un archivo CSS si necesitas estilos adicionales

const IconTextSwitcher = ({ buttons }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="icon-text-switcher">
      <div className='contenedor-contenido'>
        <div className="buttons">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`icon-button ${currentIndex === index ? 'active' : ''}`}
            >
              {button.titulo}
            </button>
          ))}
        </div>
        <div className="display">
          <img
            src={buttons[currentIndex].icon}
            alt="Selected icon"
            className="current-icon"
          />
          <p className="current-text">{buttons[currentIndex].text}</p>
        </div>
      </div>
    </div>
  );
};

export default IconTextSwitcher;




