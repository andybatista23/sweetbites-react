import { useState } from "react";
import "./App.css";
import "./styles/responsive.css";
import Header from "./components/Header";
import Lista from "./components/Lista";
import Sobrenosotros from "./components/sobre-nosotros";
import Productos from "./components/Productos";
import Dividers from "./components/Lineas";
import Contact from "./components/contacto";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import analogo from "./assets/img/analogo.png";
import brownie1 from "./assets/img/Brownies-1.jpeg";
import brownie2 from "./assets/img/Brownies-2.jpeg";
import brownie4 from "./assets/img/Brownies-4.jpeg";
import brownie5 from "./assets/img/Brownies-5.jpeg";
import brownie7 from "./assets/img/Brownies-7.jpeg";

function App() {
  const [loading, setLoading] = useState(true);

  const productos = [
    {
      tipo: "cupcake",
      imagen: "1",
      nombre: "Cupcake de fresa",
      precio: "75.00",
      descripcion: "Ideal para san valentín y regarle a ese ser amado.",
    },
    {
      tipo: "cupcake",
      imagen: "2",
      nombre: "Cupcakes de oreo",
      precio: "95.00",
      descripcion: "Para los amantes del chocolate y las oreos.",
    },

    {
      tipo: "cupcake",
      imagen: "3",
      nombre: "Red Velvet relleno de mermelada",
      precio: "125.00",
      descripcion:
        "Delicioso cupcake relleno de suave mermelada artesanal, cubierto con una fina capa de glaseado y decorado con toques de crema.",
    },
    {
      tipo: "cupcake",
      imagen: "4",
      nombre: "Cupcake relleno de Chocolate",
      precio: "90.00",
      descripcion:
        "Delicioso cupcake relleno de los mejores chocolates, cubierto con chispas de chocolate.",
    },
    {
      tipo: "cupcake",
      imagen: "5",
      nombre: "Cupcake de vainilla",
      precio: "70.00",
      descripcion:
        "Suave cupcake de vainilla con aroma irresistible, relleno de exquisito chocolate fundido y cubierto con una lluvia de chispas que aportan el toque perfecto de dulzura y textura.",
    },
    {
      tipo: "cupcake",
      imagen: "6",
      nombre: "Cupcake de chocolate",
      precio: "80.00",
      descripcion:
        "Suave cupcake de chocolate, con nuestro delicioso suspiro y chispas de colores.",
    },
    {
      tipo: "biscocho",
      imagen: "1",
      nombre: "Biscocho Tres Leches",
      precio: "125.00",
      descripcion: "Biscocho clásico, suave y delicioso.",
    },
    {
      tipo: "biscocho",
      imagen: "3",
      nombre: "Cake de zanahorias",
      precio: "100.00",
      descripcion: "Delicioso biscocho de zanahoria con cobertura cremosa.",
    },
    {
      tipo: "biscocho",
      imagen: "4",
      nombre: "Brownie corazón",
      precio: "75.00",
      descripcion:
        "Brownie ideal para tu pareja dale ese dulce que solo tu le sabe dar.",
    },

     {
      tipo: "Brownies",
      imagen: "7",
      nombre: "Brownie clásico",
      precio: "75.00",
      descripcion: "Ideal para cualquier ocasión.",
    },
  ];

  const preload = [analogo, brownie1, brownie2, brownie4, brownie5, brownie7];

  return (
    <>
      {loading && (
        <Loader assets={preload} onFinish={() => setLoading(false)} />
      )}

      {!loading && (
        <>
          <Header />

          <h1 id="inicio"></h1>
          <Lista />
          <Dividers />

          <h1 id="Productos">Productos</h1>

          <Productos listaProductos={productos} productosPorPagina={3} />
          <Contact />
          <Dividers />

          <Sobrenosotros />

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
