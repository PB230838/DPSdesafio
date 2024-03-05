"use client"
import React, { useState } from "react";
import Heade from "@/components/heade";
import Registro from "@/components/Registro";
import Cart from "@/components/Carrito";


export default function Home() {
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadProductos, setCantidadProductos] = useState(0);

  const handleAgregarProducto = (producto, cantidad) => {
    const productoExistente = productos.find(item => item.id === producto.id);
    const nuevaCantidad = cantidad || 1;

    if (productoExistente) {
      const productosActualizados = productos.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + nuevaCantidad } : item
      );
      setProductos(productosActualizados);
    } else {
      setProductos([...productos, { ...producto, cantidad: nuevaCantidad }]);
    }

    setTotal(total + producto.precio * nuevaCantidad);
    setCantidadProductos(cantidadProductos + nuevaCantidad);
  };

  return (
    <>
      <heade />
      <Registro onAgregarProducto={handleAgregarProducto} />
      <Cart
        productos={productos}
        setProductos={setProductos}
        total={total}
        setTotal={setTotal}
        cantidadProductos={cantidadProductos}
        setCantidadProductos={setCantidadProductos}
      />
    </>
  );
}
