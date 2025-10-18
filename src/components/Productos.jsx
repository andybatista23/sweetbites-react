import React, { useState, useEffect } from "react";
import "../styles/Productos.css";

function Productos({ listaProductos = [], productosPorPagina = 3 }) {
  const [pagina, setPagina] = useState(0);
  const [animar, setAnimar] = useState(false);
  const [images, setImages] = useState({});

  // Cargar imágenes dinámicamente (solo .jpeg) - CORREGIDO
  useEffect(() => {
    const loadImages = () => {
      const imagesModules = import.meta.glob("../assets/img/*.jpeg", { 
        eager: true, 
        query: '?url',
        import: 'default'
      });
      const formattedImages = {};
      for (const path in imagesModules) {
        const fileName = path.split("/").pop(); // ej: "cupcake-1.jpeg"
        formattedImages[fileName] = imagesModules[path];
      }
      setImages(formattedImages);
    };
    loadImages();
  }, []);

  const totalPaginas = Math.ceil(listaProductos.length / productosPorPagina);
  const inicio = pagina * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosActuales = listaProductos.slice(inicio, fin);

  const cambiarPagina = (nuevaPagina) => {
    setAnimar(true);
    setTimeout(() => {
      setPagina(nuevaPagina);
      setAnimar(false);
    }, 200);
  };

  const handleNext = () => {
    if (totalPaginas > 1) {
      cambiarPagina((pagina + 1) % totalPaginas);
    }
  };

  const handlePrev = () => {
    if (totalPaginas > 1) {
      cambiarPagina((pagina - 1 + totalPaginas) % totalPaginas);
    }
  };

  // Función para encontrar la imagen correcta (solo .jpeg)
  const encontrarImagen = (prod) => {
    const nombreArchivo = `${prod.tipo}-${prod.imagen}.jpeg`;
    return images[nombreArchivo] || images["default.jpeg"] || "";
  };

  if (!listaProductos || listaProductos.length === 0) {
    return (
      <div className="productos-wrapper">
        <div className="no-productos">No hay productos disponibles</div>
      </div>
    );
  }

  return (
    <div className="productos-wrapper">
      <div className="productos-contenedor">
        {totalPaginas > 1 && (
          <>
            <button className="arrow prev" onClick={handlePrev}>
              &larr;
            </button>
            <button className="arrow next" onClick={handleNext}>
              &rarr;
            </button>
          </>
        )}
        
        <div className={`productos-catalogo ${animar ? "fade" : ""}`}>
          {productosActuales.map((prod, index) => {
            const imagePath = encontrarImagen(prod);

            return (
              <div key={`${prod.id || index}-${pagina}`} className="producto">
                <img
                  src={imagePath}
                  alt={prod.nombre}
                  className="producto__image"
                  onError={(e) => {
                    e.target.src = images["default.jpeg"] || "";
                    e.target.alt = "Imagen no disponible";
                  }}
                />
                <h3 className="producto__name">{prod.nombre}</h3>
                <p className="producto__precio">
                  {prod.precio ? `RD$${prod.precio}` : "Precio no disponible"}
                </p>
                <p className="producto__description">{prod.descripcion}</p>
              </div>
            );
          })}
        </div>
      </div>

      {totalPaginas > 1 && (
        <div className="paginacion-indicadores">
          {Array.from({ length: totalPaginas }, (_, i) => (
            <button
              key={i}
              className={`indicador ${i === pagina ? "activo" : ""}`}
              onClick={() => cambiarPagina(i)}
            >
              ●
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Productos;