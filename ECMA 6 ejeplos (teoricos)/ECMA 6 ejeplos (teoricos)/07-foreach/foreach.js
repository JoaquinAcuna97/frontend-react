//for each recibe una callback y la ejecuta para cada elemento de un arreglo
const arreglo = ["Bart", "Homero", "Lisa"];

//se le pasa un callback (una función) al forech
const callback = (valor) => console.log(valor);

arreglo.forEach(callback);

//el callback se le puede pasar directamente con una función anónima
//en este caso x=>console.log(x) ( o sea no tiene un nombre)
arreglo.forEach(x => console.log(x));