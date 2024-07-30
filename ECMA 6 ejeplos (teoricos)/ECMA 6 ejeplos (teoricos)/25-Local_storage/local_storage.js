let claveInput = document.getElementById("clave");
let valorInput = document.getElementById("valor");
const parrafo = document.getElementById("parrafo");

let localStorage = window.localStorage;

const ejecutarGuardar = () => {
    localStorage.setItem(claveInput.value, valorInput.value);
}
const ejecutarRecuperar = () => {
    const dato = localStorage.getItem(claveInput.value);
    parrafo.innerText = dato;
}
const ejecutarBorrar = () => {
    localStorage.removeItem(claveInput.value);
}
const ejecutarClear = () => {
    localStorage.clear();
}
document.getElementById("botonGuardar").addEventListener("click", ejecutarGuardar);
document.getElementById("botonRecuperar").addEventListener("click", ejecutarRecuperar);
document.getElementById("botonBorrar").addEventListener("click", ejecutarBorrar);
document.getElementById("botonClear").addEventListener("click", ejecutarClear);


