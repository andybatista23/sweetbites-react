import React, { useEffect, useRef } from 'react';

const ModalMensaje = ({ visible, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (visible && modalRef.current) {
      // Reinicia la animación removiendo y agregando la clase
      modalRef.current.classList.remove('modal-mensaje-animado');
      // Forzar reflow para reiniciar la animación
      void modalRef.current.offsetWidth;
      modalRef.current.classList.add('modal-mensaje-animado');
    }
  }, [visible]);

  if (!visible) return null;
  return (
    <div className="modal-contacto" style={{zIndex: 1200}}>
      <div className="modal-content modal-mensaje-animado" ref={modalRef}>
        {/* Check animado SVG con animación de trazo */}
        <div className="check-animado">
          <svg width="64" height="64" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="30" fill="none" stroke="#4BB543" strokeWidth="4" />
            <polyline 
              className="checkmark"
              points="18,34 28,44 46,24"
              fill="none"
              stroke="#4BB543"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2>¡Gracias por tu mensaje!</h2>
        <p>Te contactaré inmediatamente.<br/>Tu mensaje ha sido enviado correctamente.</p>
        <button className="cta-btn" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ModalMensaje;
