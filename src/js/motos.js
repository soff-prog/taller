import '../css/style.css'; 
import 'flowbite';  

// para seleccionar tarjetas
const tarjetas = document.querySelectorAll('.w-full.max-w-sm');

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
    tarjetas.forEach(t => t.classList.remove('selected'));
    tarjeta.classList.add('selected');
    });

  // hover
    tarjeta.addEventListener('mouseover', () => {
    tarjeta.style.transform = 'scale(1.03)';
    tarjeta.style.transition = 'all 0.3s ease';
    });

    tarjeta.addEventListener('mouseout', () => {
    tarjeta.style.transform = 'scale(1)';
    tarjeta.style.transition = 'all 0.3s ease';
    });
});

//botón comprar
const botonesComprar = document.querySelectorAll('.w-full.max-w-sm button');

botonesComprar.forEach(btn => {
    btn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que se seleccione la tarjeta al comprar
    const nombreMoto = btn.closest('.w-full.max-w-sm').querySelector('h5').innerText;
    alert(`${nombreMoto} agregado al carrito`);
    });
});