//la desestructuración permite darle un nombre a los elementos de un arreglo
//desestructurar un arreglo el primer elemento se asigna a 'a' y el segundo a 'b'
const arreglo = ["hola", "mundo"];
let [a, b] = arreglo;
console.log(a, b);
//permite un modo simple de intercambiar valores
let x = "soyX";
let y = "soyY";
[x, y] = [y, x];
console.log(`x:${x}, y:${y}`);
//ignorar un valor (dejando un espacio)
const arreglo2  = ["hola", "mundo", "genial"];
const [d, , f] = arreglo2;
console.log(d, f);
//valor predeterminado, en este caso g se vuelve 1 y como no se pasó segundo parámetro
//h toma su valor predeterminado
let g, h;
[g = 5, h = 7] = [1];
console.log(g, h);