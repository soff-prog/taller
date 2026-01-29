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

// seleccionamos todos los "Ver modelos"
const verModelos = document.querySelectorAll('.p-5 a');

verModelos.forEach((boton, index) => {
    boton.addEventListener('click', (e) => {
    e.preventDefault(); 

    // para que lleve a la card
    if(index === 0) {
      // card deportivas
    window.location.href = '/src/pages/motos.html#deportivas';
    } else if(index === 1) {
      // card adventure
    window.location.href = '/src/pages/motos.html#adventure';
    }
    });

  // hover
    boton.addEventListener('mouseover', () => {
    boton.style.transform = 'scale(1.05)';
    boton.style.transition = 'transform 0.2s';
    });

    boton.addEventListener('mouseout', () => {
    boton.style.transform = 'scale(1)';
    });
});
