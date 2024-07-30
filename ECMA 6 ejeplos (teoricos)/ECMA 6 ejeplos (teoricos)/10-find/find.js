//find recibe un callback, el cual debe devolver un valor booleano
//para cada elemento del array se ejecuta la función pasada como parámetro
//en caso de que la función devuelva true, find retorna el primer elemento para el 
//cual la función devuelve true
const frutas = [
    { nombre: 'manzana', cantidad: 2 },
    { nombre: 'uva', cantidad: 1 },
    { nombre: 'pera', cantidad: 5 }
];
//Al usar llaves se debe agregar return, sino no se está devolviendo nada y no anda
let quieroPera = frutas.find(fruta => {
    fruta.nombre === 'pera';
})
console.log(quieroPera);

let quieroUva = frutas.find(fruta => fruta.nombre === 'uva');
console.log(quieroUva);