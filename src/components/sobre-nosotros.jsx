import React from "react";
import '../styles/sobre-nosotros.css';

function sobrenosotros() {
  return (
    <div className="csobrenosotros">
      <h2 className="sobrenosotros"id="sobrenosotros">Sobre nosotros</h2>
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
    </div>
  );
}

export default sobrenosotros;
