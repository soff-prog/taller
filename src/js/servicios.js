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

// seleccionamos las tarjetas o card
const tarjetasServicios = document.querySelectorAll('section.bg-white .block.p-6');

// dinamismo cuando aplaste alguna de las tarjetas
tarjetasServicios.forEach(tarjeta => {

  tarjeta.addEventListener('click', () => {
    limpiarSeleccion();
    tarjeta.classList.add('selected');
  });

  // Hover
  tarjeta.addEventListener('mouseenter', () => {
    tarjeta.style.transform = 'scale(1.05)';
    tarjeta.style.transition = 'transform 0.3s ease';
  });

  // click en ver detalles
  const enlace = tarjeta.querySelector('a');
  if (enlace) {
    enlace.addEventListener('click', (e) => {
      e.preventDefault(); 
      const nombreServicio = tarjeta.querySelector('h5').innerText;
      alert(`Has hecho click en "${nombreServicio}"`);
        });
  }
});

