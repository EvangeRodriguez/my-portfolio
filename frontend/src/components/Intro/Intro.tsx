import React, { useState, useEffect } from 'react';
import './Intro.css';

const Intro: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Simulando el evento de finalización de la animación
    const simulateAnimationEnd = () => {
      if (!animationComplete) {
        setAnimationComplete(true);
        window.location.href = '/home'; 
      }
    };

    // Llamar a la función de simulación después de un tiempo (por ejemplo, 3 segundos)
    const animationTimer = setTimeout(simulateAnimationEnd, 4000);

    return () => {
      clearTimeout(animationTimer);
    };
  }, [animationComplete]);

  return (
    <div className="intro-container">
      <div className="line-container">
        <div className="eva">
          <span className="typing-animation">Evangelina Rodriguez</span>
        </div>
        <div className="blink-caret">|</div>
      </div>
      <div className="line-container">
        <div className="dev">
          <span className="typing-animation">Developer</span>
        </div>
        <div className="blink-caret">|</div>
      </div>
    </div>
  );
}

export default Intro;

