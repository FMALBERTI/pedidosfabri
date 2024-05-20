import React from 'react';
import './Producto.css';

const Producto = ({ producto, agregarAlCarrito }) => {
  return (
    <div>
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  );
};

export default Producto;