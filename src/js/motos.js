import '../css/style.css';
import 'flowbite';

const contenedor = document.getElementById("contenedor-motos");

// ===== CARGAR MOTOS =====
const cargarMotos = async () => {
  try {
    const respuesta = await fetch("/data/motos.json");
    if (!respuesta.ok) throw new Error("Error al cargar motos");

    const datos = await respuesta.json();
    contenedor.innerHTML = "";

    datos.forEach((moto) => {
      contenedor.innerHTML += `
        <div class="p-6 border rounded-xl bg-slate-900 text-white hover:border-red-900 transition shadow-lg">
          <div class="h-40 flex items-center justify-center mb-4 overflow-hidden">
            <img src="${moto.imagen}" class="h-full object-contain hover:scale-110 transition">
          </div>

          <h2 class="font-bold text-lg mb-1">${moto.nombre}</h2>
          <p class="text-red-600 font-bold mb-2">$${moto.precio}</p>

          <p class="text-sm"><b>Motor:</b> ${moto.motor}</p>
          <p class="text-sm"><b>Potencia:</b> ${moto.potencia}</p>
          <p class="text-xs text-gray-300 mt-2">${moto.Especificaciones}</p>

          <button
            data-nombre="${moto.nombre}"
            data-precio="${moto.precio}"
            class="btn-agregar mt-4 w-full bg-red-700 hover:bg-red-800 py-2 rounded-lg font-bold">
            Agregar al carrito
          </button>
        </div>
      `;
    });

  } catch (error) {
    contenedor.innerHTML = `
      <p class="text-red-600 col-span-full text-center font-bold">
        Error al cargar las motos
      </p>
    `;
  }
};

cargarMotos();

// ===== CARRITO GENERAL (IGUAL QUE LIBROS) =====
let carrito = JSON.parse(localStorage.getItem("carrito-general")) || [];

// ===== CONTADOR (REUTILIZADO) =====
const actualizarContador = () => {
  const contador = document.getElementById("carrito-contador");
  const carritoActual = JSON.parse(localStorage.getItem("carrito-general")) || [];

  if (contador) {
    contador.innerText = carritoActual.length;
  }
};

// ===== AGREGAR AL CARRITO =====
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


// ===== ACTUALIZAR CONTADOR AL CARGAR =====
actualizarContador();
