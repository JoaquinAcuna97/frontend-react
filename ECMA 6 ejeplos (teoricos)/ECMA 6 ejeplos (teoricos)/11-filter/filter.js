//filter recibe un callback que devuelve un booleano
//para cada valor de un array se evalúa la función en caso de dar true se va
//agregando el elemento a un NUEVO arreglo
let palabras = ["hola", "como", "estas", "hoy"];
let misPalabras = palabras.filter(palabra => palabra.length >= 4);
console.log(misPalabras);

//”hoy” al ser una palabra de 3 letras no cumple con la condición de filtro
//entonces no es agregada al arreglo de retorno