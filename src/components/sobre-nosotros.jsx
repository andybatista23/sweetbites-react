import React from "react";
import '../styles/sobre-nosotros.css';

function sobrenosotros() {
  return (
    <>
      <section className="csobrenosotros" id="sobrenosotros">
        <h2 className="sobrenosotros">Sobre nosotros</h2>
        <p className="sobrenosotros-text">
          Bienvenido a <strong>SweetBites</strong>, tu rincón dulce favorito. Nos especializamos en crear 
          postres artesanales que combinan tradición, creatividad y sabores únicos. Cada producto es elaborado 
          cuidadosamente con ingredientes de la más alta calidad y mucho amor, pensando en ofrecerte una experiencia 
          deliciosa que haga especial tu día.
        </p>
        <p className="sobrenosotros-text">
          En <strong>SweetBites</strong> creemos que cada bocado cuenta, por eso nos esforzamos en innovar, 
          mantener frescura y sorprender a nuestros clientes con nuevas creaciones. Únete a nuestra comunidad 
          de amantes del dulce y déjate llevar por el sabor que solo nosotros podemos ofrecer.
        </p>
      </section>

      <section className="sobrenosotros-extra">
        <div className="mision">
          <h3>Nuestra misión</h3>
          <p>Crear postres artesanales que llenen de dulzura los momentos más importantes de la vida, usando ingredientes naturales y procesos responsables.</p>
        </div>

        <div className="valores">
          <h3>Valores</h3>
          <ul>
            <li>Calidad y sabor</li>
            <li>Compromiso con el cliente</li>
            <li>Sostenibilidad</li>
            <li>Creatividad</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default sobrenosotros;
