//map recibe como parámetro un callback y devuelve un NUEVO arreglo
//para cada elemento del arreglo original aplica la función y lo asigna al nuevo arreglo
//lo que hace es mapear un arreglo con el otro aplicando una función

const numeros = [1, 2, 3, 4];
const duplicados = numeros.map((x) => x * 2);
console.log(duplicados);

//map tambien nos devuelve el índice
const callback = (valor, indice) => console.log(`indice:${indice}: ${valor}`);
numeros.map(callback);