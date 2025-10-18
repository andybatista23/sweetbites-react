import { useState, useEffect } from "react";
import "../styles/Lista.css";

function Lista() {
  const imagesModules = import.meta.glob("../assets/img/Brownies*.{jpg,jpeg}", { 
    eager: true, 
    query: '?url',
    import: 'default'
  });
  const images = Object.values(imagesModules);

  const [index, setIndex] = useState(0);

  // Cambio automático cada 5 segundos con desvanecimiento suave
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="lista-container">
      
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Imagen ${i + 1}`}
          className={`lista-img ${i === index ? "active" : ""}`}
        />
      ))}

      {images.length === 0 && <div>No hay imágenes disponibles</div>}
    </div>
  );
}

export default Lista;