import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Lista from "./components/Lista";
import Sobrenosotros from "./components/sobre-nosotros";
import Productos from "./components/Productos";
import Dividers from "./components/Lineas";
import Contact from "./components/contacto";
import Footer from "./components/Footer";
function App() {
  const productos = [
    {
      tipo: "cupcake",
      imagen: "1",
      nombre: "Cupcake de fresa",
      precio: "#",
      descripcion: "Ideal para san valentín y regarle a ese ser amado.",
    },
    {
      tipo: "cupcake",
      imagen: "2",
      nombre: "Cupcakes de chocolate",
      precio: "#",
      descripcion: "Para los amantes del chocolate y las oreos.",
    },
    {
      tipo: "cupcake",
      imagen: "3",
      nombre: "Cupcake relleno de mermelada",
      precio: "#",
      descripcion:
        "Delicioso cupcake relleno de suave mermelada artesanal, cubierto con una fina capa de glaseado y decorado con toques de crema.",
    },
    {
      tipo: "cupcake",
      imagen: "4",
      nombre: "Cupcake relleno de Chocolate",
      precio: "#",
      descripcion:
        "Delicioso cupcake relleno de los mejores chocolates, cubierto con chispas de chocolate.",
    },
    {
      tipo: "cupcake",
      imagen: "5",
      nombre: "Cupcake de vainilla",
      precio: "#",
      descripcion:
        "Suave cupcake de vainilla con aroma irresistible, relleno de exquisito chocolate fundido y cubierto con una lluvia de chispas que aportan el toque perfecto de dulzura y textura.",
    },
    {
      tipo: "cupcake",
      imagen: "6",
      nombre: "Cupcake de chocolate",
      precio: "#",
      descripcion:
        "Suave cupcake de chocolate, con nuestro delicioso suspiro y chispas de colores.",
    },
    {
      tipo: "biscocho",
      imagen: "1",
      nombre: "Biscocho de vainilla",
      precio: "#",
      descripcion: "Biscocho clásico, suave y delicioso.",
    },
    {
      tipo: "biscocho",
      imagen: "3",
      nombre: "Biscocho de zanahorias",
      precio: "#",
      descripcion: "Delicioso biscocho de zanahoria con cobertura cremosa.",
    },
    {
      tipo: "biscocho",
      imagen: "4",
      nombre: "Brownie en forma de corazón",
      precio: "#",
      descripcion:
        "Brownie ideal para tu pareja dale ese dulce que solo tu le sabe dar.",
    },
    {
      tipo: "biscocho",
      imagen: "7",
      nombre: "Choco-Flan",
      precio: "#",
      descripcion: "Ideal para ese día especial con tu familia.",
    },
    {
      tipo: "biscocho",
      imagen: "8",
      nombre: "Choco-Flan",
      precio: "#",
      descripcion: "Disponible para ti en forma de corazón.",
    },
  ];

  return (
    <>
      <Header />

      <h1 id="inicio"></h1>
      <Lista />
      <Dividers/>

      <h1 id="Productos">Productos</h1>
      

      <Productos listaProductos={productos} productosPorPagina={3} />
      <Contact/>
      <Dividers/>

      <Sobrenosotros />
      
      <Footer/>
      


      
    </>
  );
}

export default App;
