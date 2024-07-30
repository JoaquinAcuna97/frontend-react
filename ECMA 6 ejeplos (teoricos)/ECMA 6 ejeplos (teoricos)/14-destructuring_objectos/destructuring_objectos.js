//Destructuring permite obtener elementos de un objeto por el nombre del campo, además se puede renombrar dichos
//elementos
const personaje = { nombre: "Bart", apellido: "Simpsons" };
const { nombre } = personaje;
console.log(nombre);
const dato = {
    country: "USA",
    address: {
        street: "Ever green",
        city: "Springfield"
    }
};
//se puede renombrar la variable agregando : y el nuevo nombre
const { country: pais } = dato;
console.log(pais);
//en caso de tener más elementos anidados se obtienen con dos puntos y llave
const { address: { street } } = dato;
console.log(street);