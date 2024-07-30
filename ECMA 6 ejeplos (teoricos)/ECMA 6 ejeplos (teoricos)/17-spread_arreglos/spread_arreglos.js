//Se utiliza para expandir un objeto iterable (arreglo, cadena) para llamadas a una función y hacer una copia en profundidad de un arreglo u objeto
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));

//al realizar una copia con el = y luego modificar la copia el original se ve afectado
const arreglo1 = ["a", "b", "c"];
const arreglo2 = arreglo1;
arreglo2.push("d");
console.log(`${arreglo1} , ${arreglo2}`)

//el modo correcto es el siguiente (SERA MUY USADO) se expande y se asigna a un array NUEVO
const arreglo3 = ["e", "f", "g"];
const arreglo4 = [...arreglo3];
arreglo4.push("h");
console.log(`${arreglo3} , ${arreglo4}`)

//A partir de un arreglo se puedo obtener una cadena continua
const items = ['This', 'is', 'a', 'sentence'];
console.log(items); // [ 'This', 'is', 'a','sentence' ]
console.log(...items); // This is a sentence

//se pueden concatenar arreglos
console.log([...arreglo2, ...arreglo4]);