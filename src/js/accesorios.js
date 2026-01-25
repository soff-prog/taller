import '../css/style.css'; 
import 'flowbite';  

//para seleccionar los botones comprar
const botonesComprar = Array.from(document.querySelectorAll('a')).filter(btn => btn.textContent.trim() === "Comprar");

//con un click muestra una alerta
botonesComprar.forEach(boton => {
  boton.addEventListener('click', function(event) {
    event.preventDefault(); // evita que el enlace navegue
    alert('¡Producto agregado al carrito!');
  });
});

