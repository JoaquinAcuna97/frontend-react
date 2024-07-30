const nombre = "Bart Simpsons";
const seudonimo = "El barto";

//se desea escribir: Hola mi nombre esBart Simpsons y mi seudónimo es "El barto", como están?;

//de la forma tradicional
console.log("Hola mi nombre es " + nombre + " y mi seudónimo es \"" + seudonimo + "\", como están?");

//Temple string nos permite escribir lo mismo de forma mas simple
console.log(`Hola mi nombre es ${nombre} y mi seudónimo es "${seudonimo}", como están?`);