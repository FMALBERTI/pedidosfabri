import logo from './logo.jpg';
import './App.css';

import React, { useState } from 'react';
import productos from './data/productos';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
import Ticket from './components/Ticket';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [productosDisponibles, setProductosDisponibles] = useState(productos);

  const agregarAlCarrito = (producto) => {
    if (producto.stock > 0) {
      setCarrito([...carrito, producto]);
      setProductosDisponibles(productosDisponibles.map(p =>
        p.id === producto.id ? { ...p, stock: p.stock - 1 } : p
      ));
    }
  };

  const eliminarDelCarrito = (index) => {
    const producto = carrito[index];
    setCarrito(carrito.filter((_, i) => i !== index));
    setProductosDisponibles(productosDisponibles.map(p =>
      p.id === producto.id ? { ...p, stock: p.stock + 1 } : p
    ));
  };

  return (
    <div className="App">
      <h1>Cafe y Repostería Malberti</h1>
      <div className="productos-container">
        {productosDisponibles.map(producto => (
          <Producto key={producto.id} producto={producto} agregarAlCarrito={agregarAlCarrito} />
        ))}
      </div>
      <div className="carrito">
        <h2>Carrito</h2>
        <Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
      </div>
      <div className="ticket">
        <h2>Ticket</h2>
        <Ticket carrito={carrito} />
      </div>
    </div>
  );
}

export default App;
