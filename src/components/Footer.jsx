import React from "react";
import "../styles/Footer.css";
import instagramIcon from "../assets/img/instagram.png";

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-logo">
        <h2>SweetBites</h2>
        <p>Si Dios te dio la idea, te dará los clientes</p>
      </div>

      <div className="footer-social">
        <a
          href="https://www.instagram.com/sweetbites_desert2024?igsh=MXRlZjMyMmliZG12bg=="
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={instagramIcon} alt="Instagram" className="icon-img" />
        </a>
      </div>

      {/* NUEVO APARTADO DE CONTACTO */}
      <div className="footer-contact">
        <p>📍 Dirección: Prolongación Buena Vista #1234, Santiago de los Caballeros, República Dominicana</p>
        <p>📞 Teléfono: +1 809-298-5331</p>
        <p>📮 Código Postal: 51000</p>
      </div>

      <div className="footer-copy">
        <p>© {new Date().getFullYear()} Andy Batista. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
