//Se le pueden asignar valores por defecto a los parámetros de las funciones, para que
//en caso de no ser pasados en las llamadas, tomen esos valores por defecto
function f(x, y = 3, z = 5) {
    return x + y + z
}
console.log(f(1));
console.log(f(1, 1));
console.log(f(1, 1, 1));
console.log(f());
//en el último caso al no pasar parametros, x queda como indefinido por lo que f devuelve NaN