import { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/img/analogo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
     <div className="logo">
  <a href="#inicio">
    <img src={logo} alt="SweetBites Logo" className="logo-img" />
    SweetBites
  </a>
</div>


      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#Productos">Productos</a>
          </li>
          <li>
            <a href="#sobrenosotros">Sobre nosotros</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>

      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </header>
  );
}

export default Header;
