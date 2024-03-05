import React, { useState } from 'react';
import { data, json } from "../app/json";
import styles from "@/app/styles.css";

const Registro = ({ onAgregarProducto }) => {
  const [cantidad, setCantidad] = useState(1);

  const handleCantidadChange = (event) => {
    setCantidad(parseInt(event.target.value));
  };

  return (
    <div className='items-container'>
      {json.map(producto => (
        <div className='item' key={producto.id}>
          <figure>
            <img src={producto.urlImage} alt={producto.nameProduct} />
          </figure>
          <div className='info-producto'>
            <h2>{producto.nameProduct}</h2>
            <p className='precio'>${producto.price}</p>
            <div className='agregar-al-carrito'>
              <input
                id={`cantidad_${producto.id}`}
                type="number"
                value={cantidad}
                onChange={handleCantidadChange}
                min={1}
              />
              <button onClick={() => onAgregarProducto(producto, cantidad)}>
                Comprar 
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Registro;