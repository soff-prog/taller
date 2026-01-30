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

const nombre = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const formulario = document.getElementById("formulario");

const patrones = {
  usuario: /^[a-zA-ZÀ-ÿ\s]{3,16}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  clave: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
};

const mostrarError = (input, id) => {
  document.getElementById(id).classList.remove("hidden");
  input.classList.add("border-red-500");
};

const eliminarError = (input, id) => {
  document.getElementById(id).classList.add("hidden");
  input.classList.remove("border-red-500");
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let valido = true;

  if (!patrones.usuario.test(nombre.value)) {
    mostrarError(nombre, "error-username");
    valido = false;
  } else eliminarError(nombre, "error-username");

  if (!patrones.correo.test(email.value)) {
    mostrarError(email, "error-email");
    valido = false;
  } else eliminarError(email, "error-email");

  if (!patrones.clave.test(password.value)) {
    mostrarError(password, "error-password");
    valido = false;
  } else eliminarError(password, "error-password");

  if (password.value !== confirmPassword.value || confirmPassword.value === "") {
    mostrarError(confirmPassword, "error-confirmPassword");
    valido = false;
  } else eliminarError(confirmPassword, "error-confirmPassword");

  if (valido) {
    alert("Registro exitoso :)");
    formulario.reset();
  }
});
