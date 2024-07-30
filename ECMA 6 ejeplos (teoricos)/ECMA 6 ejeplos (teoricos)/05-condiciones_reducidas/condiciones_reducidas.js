//utilizando if, else
let esValido = true;
let mensaje;
if (esValido) {
    mensaje = "Acceso correcto";
} else {
    mensaje = "Acceso denegado";
}
console.log(mensaje);

//lo mismo se puede hacer en una sola línea en lugar de un if else
mensaje = esValido ? "Acceso correcto" : "Acceso denegado";
console.log(mensaje);

//Se usa también para asignar valores por defecto
function setPersona(data) {
    const person = {
        nombre: data.nombre ? data.nombre : "Sin nombre"
    }
    return person;
}
const persona = setPersona({})
console.log(persona);