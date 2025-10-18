import React from "react";
import "../styles/Lineas.css";

export default function Dividers() {
  return (
    <div className="dividers-container">


      {/* Divider 4: adorno tipográfico */}
      <div className="divider divider4">
        <svg
          viewBox="0 0 800 48"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad4" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#6b21a8" stopOpacity="1" />
              <stop offset="100%" stopColor="#d946ef" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Línea ornamental principal */}
          <path
            d="M0 24 C80 8, 160 8, 240 24 C320 40, 400 40, 480 24 C560 8, 640 8, 720 24 C760 32, 800 32, 800 24"
            fill="none"
            stroke="url(#grad4)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Volutas centrales */}
          <path
            d="M320 24 C332 18, 344 18, 356 24 C368 30, 380 30, 392 24"
            fill="none"
            stroke="url(#grad4)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M392 24 C404 18, 416 18, 428 24 C440 30, 452 30, 464 24"
            fill="none"
            stroke="url(#grad4)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Detalles laterales */}
          <path
            d="M96 28 C108 34, 120 34, 132 28"
            fill="none"
            stroke="url(#grad4)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M668 28 C680 34, 692 34, 704 28"
            fill="none"
            stroke="url(#grad4)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Sombra suave para efecto de relieve */}
          <path
            d="M0 26 C80 10, 160 10, 240 26 C320 42, 400 42, 480 26 C560 10, 640 10, 720 26 C760 34, 800 34, 800 26"
            fill="none"
            stroke="#6b21a8"
            strokeOpacity="0.08"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
