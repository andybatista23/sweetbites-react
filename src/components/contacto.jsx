// Pedido.jsx
import React, { useState, useEffect } from 'react';
import '../styles/contacto.css';
import ModalMensaje from './modalmensaje';

const Pedido = ({ onSuccess }) => {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    producto: '',
    cantidad: 1,
    mensaje: '',
    direccion: ''
  });

  const [sending, setSending] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalMensaje, setShowModalMensaje] = useState(false);

  // Bloquear scroll al abrir modal
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);

    // Generar mensaje para WhatsApp
    const mensaje = encodeURIComponent(
      `Nuevo pedido de ${form.nombre}:\nProducto: ${form.producto}\nCantidad: ${form.cantidad}\nDirección: ${form.direccion}\nTeléfono: ${form.telefono}\nMensaje: ${form.mensaje}`
    );

    // Cambia TU_NUMERO por tu número de WhatsApp con código de país, ejemplo +18001234567
    window.open(`https://wa.me/+18292985331?text=${mensaje}`, '_blank');

    setSending(false);
    setForm({
      nombre: '',
      telefono: '',
      producto: '',
      cantidad: 1,
      mensaje: '',
      direccion: ''
    });

    if (onSuccess) onSuccess();
    setShowModal(false);
    setShowModalMensaje(true);
  };

  return (
    <section className="pedido-section">
      <div className="pedido-buttons">
        <button className="btn-pedido" onClick={() => setShowModal(true)}>Hacer Pedido</button>
      </div>

      {showModal && (
        <div className="modal-pedido">
          <div className="modal-content">
            <span className="modal-close" onClick={() => setShowModal(false)}>&times;</span>
            <h2 className="modal-title">Realiza tu pedido</h2>

            <form className="pedido-form" onSubmit={handleSubmit} autoComplete="off">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />

              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
                placeholder="Ingresa tu número de teléfono"
              />

              <label htmlFor="producto">Producto:</label>
              <select
                id="producto"
                name="producto"
                value={form.producto}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un producto</option>
                <option value="Cupcake de fresa">Cupcake de fresa</option>
                <option value="Cupcake de chocolate">Cupcake de chocolate</option>
                <option value="Biscocho de vainilla">Biscocho de vainilla</option>
                <option value="Brownie">Brownie</option>
              </select>

              <label htmlFor="cantidad">Cantidad:</label>
              <input
                type="number"
                id="cantidad"
                name="cantidad"
                value={form.cantidad}
                onChange={handleChange}
                min="1"
                required
              />

              <label htmlFor="direccion">Dirección de entrega:</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={form.direccion}
                onChange={handleChange}
                placeholder="Calle, número, ciudad..."
                required
              />

              <label htmlFor="mensaje">Mensaje adicional:</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="3"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Instrucciones especiales, decoración, etc."
                style={{ maxHeight: '150px', overflowY: 'auto' }}
              />

              <button type="submit" disabled={sending}>
                {sending ? 'Enviando pedido...' : 'Enviar pedido'}
              </button>
            </form>
          </div>
        </div>
      )}

      <ModalMensaje visible={showModalMensaje} onClose={() => setShowModalMensaje(false)} />
    </section>
  );
};

export default Pedido;
