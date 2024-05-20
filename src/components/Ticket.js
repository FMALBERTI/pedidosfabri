import React from 'react';
import './Ticket.css';

const Ticket = ({ carrito }) => {
  const total = carrito.reduce((sum, producto) => sum + producto.precio, 0);

  return (
    <div>
      <h2></h2>
      <ul>
        {carrito.map((producto, index) => (
          <li key={index}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Ticket;