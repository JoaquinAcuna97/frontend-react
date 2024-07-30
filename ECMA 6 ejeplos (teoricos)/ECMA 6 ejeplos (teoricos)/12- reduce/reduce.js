//reduce recibe un callback y opcionalmente un valor inicial (si no se recibe se asigna 0 por defecto)
//a su vez la función recibe dos parámetros el primero se llama acumulador y el segundo sería el
//iterador el cual va tomando los respectivos valores del arreglo original
//la función va ejecutando una operación con el acumulador y el iterador, el resultado
//se va guardando en el acumulador para utilizarse en la siguiente iteración.
//reduce devuelve un valor a partir del array original
const arreglo = [1, 2, 3, 4];
const reducer = (acumulador, valorActual) => acumulador + valorActual;
//la suma inicia en 0 ya que no se pasó un valor inicial
console.log(arreglo.reduce(reducer));
//la suma inicia en 5
console.log(arreglo.reduce(reducer, 5));

const arreglo2 = ["a", "b", "c"];
const reducer2 = (acumulador, valorActual) => acumulador.concat(valorActual);
console.log(arreglo2.reduce(reducer2));
console.log(arreglo2.reduce(reducer2, "z"));

//En este caso se quiere devolver un array con los elementos de origen
const arreglo3 = ["a", "b", "c"];
const reducer3 = (acumulador, valorActual) => {
    console.log('acumulador', acumulador);
    acumulador.push(valorActual);
    return acumulador;
};
console.log(arreglo3.reduce(reducer3, []));

//otro modo es con concat, o con spread, luego lo veremos
