//Se importa todo el contenido de math (default se debe importar //aparte)
//index.js (1)
import porDefecto, * as math from "./libreria.js"
let radioArgumento = 2;
console.log(`Area es: ${math.calcularAreaCirculo(radioArgumento)}`);
console.log(`El valor de phi es: ${math.phi}`);



//se hace un alias para phi a pi
//index.js (2)
import { calcularAreaCirculo, phi as pi } from "./libreria.js";
let radioArgumento2 = 2;
console.log(`Area2 es: ${calcularAreaCirculo(radioArgumento2)}`);
console.log(`El valor de pi es: ${pi}`);


//se puede importar el valor por defecto y directamente asignar
//un nuevo nombre
import alias from "./libreria.js";
console.log(alias);
