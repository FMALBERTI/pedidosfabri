import React from 'react';

const Carrito = ({ carrito, eliminarDelCarrito }) => {
  const total = carrito.reduce((sum, producto) => sum + producto.precio, 0);

  return (
    <div>
      <h2></h2>
      <ul>
        {carrito.map((producto, index) => (
          <li key={index}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Carrito;
