import '../css/style.css';
import 'flowbite';

const contenedor = document.getElementById("contenedor-accesorios");

//para cargar los accesorios
const cargarAccesorios = async () => {
  try {
    const respuesta = await fetch("/data/accesorios.json");
    if (!respuesta.ok) throw new Error("Error al cargar accesorios");

    const datos = await respuesta.json();
    contenedor.innerHTML = "";

    datos.forEach((item) => {
      contenedor.innerHTML += `
        <div class="p-6 bg-slate-800 text-white rounded-xl shadow-lg border hover:border-red-800 transition">
          <div class="h-40 flex items-center justify-center mb-4 overflow-hidden">
            <img src="${item.imagen}" class="h-full object-contain hover:scale-110 transition">
          </div>

          <h2 class="font-bold text-lg mb-2">${item.nombre}</h2>
          <p class="text-sm text-gray-300 mb-2">${item.Especificaciones}</p>
          <span class="text-red-600 font-bold">$${item.precio}</span>

          <button
            data-nombre="${item.nombre}"
            data-precio="${item.precio}"
            class="btn-agregar w-full bg-red-700 hover:bg-red-600 py-2 rounded-lg mt-4 font-bold">
            Agregar al carrito
          </button>
        </div>
      `;
    });

  } catch (error) {
    contenedor.innerHTML =
      `<p class="text-red-500 col-span-full text-center">Error al cargar</p>`;
  }
};

cargarAccesorios();

let carrito = JSON.parse(localStorage.getItem("carrito-general")) || [];

//contador
const actualizarContador = () => {
  const contador = document.getElementById("carrito-contador");
  const carritoActual = JSON.parse(localStorage.getItem("carrito-general")) || [];

  if (contador) {
    contador.innerText = carritoActual.length;
  }
};

//para que se agrege al carrito
contenedor.addEventListener("click", (e) => {
  const boton = e.target.closest(".btn-agregar");
  if (!boton) return;

  const card = boton.closest("div");

  const nombre = card.querySelector("h2").innerText;
  const precio = card.querySelector(".text-red-600").innerText.replace("$", "");

  const producto = {
    nombre: nombre,
    precio: precio
  };

  carrito.push(producto);
  localStorage.setItem("carrito-general", JSON.stringify(carrito));

  actualizarContador();
});

actualizarContador();
