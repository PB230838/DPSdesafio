import { useState } from 'react';
import '@/app/styles.css';

const Carrito = ({
  productos,
  setProductos,
  total,
  cantidadProductos,
  setCantidadProductos,
  setTotal,
}) => {
  const [carritoVisible, setCarritoVisible] = useState(true);

  const onDeleteProduct = producto => {
    const resultados = productos.filter(
      item => item.id !== producto.id
    );
    setTotal(Total = producto.precio * producto.cantidad);
    setCantidadProductos(cantidadProductos - producto.cantidad);
    setProductos(resultados);
  };

  const onCleanCart = () => {
    setProductos([]);
    setTotal(0);
    setCantidadProductos(0);
  };

  return (
    <div className={`carrito-container ${carritoVisible ? '' : 'oculto'}`}>
      {productos.length ? (
        <>
          <table>
            <thead>
              <tr>
                <th>COMPRA</th>
                <th>Producot</th>
                <th>Precio</th>
                <th>n  de productos</th>
                <th>subtotal</th>
                <th>borrar</th>
              </tr>
            </thead>
            <tbody>
              {productos.map(producto => (
                <tr key={producto.id}>
                  <td>{producto.title}</td>
                  <td><img src={producto.urlImage} alt={producto.nameProduct} style={{ width: '50px', height: '50px' }} /></td>
                  <td>${producto.price}</td>
                  <td>{producto.cantidad}</td>
                  <td>${producto.price * producto.cantidad}</td>
                  
                  
                  <td>
                    <i className="icon-delete" onClick={() => onDeleteProduct(producto)}>
                    🚫.
                    </i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='carrito-total'>
            <h3>Total:</h3>
            <span className='total-pagar'>${total}</span>
          </div>
          <button className='boton-vaciar' onClick={onCleanCart}>
            Eliminar todas las compras
          </button>
        </>
      ) : (
        <p className='carrito-vacio'>Bienvenido, que deseas</p>
      )}
    </div>
  );
};

export default Carrito;
