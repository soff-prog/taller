import '../css/style.css';
import 'flowbite';

let carrito = JSON.parse(localStorage.getItem("carrito-general")) || [];

//contador
const actualizarContador = () => {
  const contador = document.getElementById("carrito-contador");
  const carritoActual = JSON.parse(localStorage.getItem("carrito-general")) || [];

  if (contador) {
    contador.innerText = carritoActual.length;
  }
};
actualizarContador();