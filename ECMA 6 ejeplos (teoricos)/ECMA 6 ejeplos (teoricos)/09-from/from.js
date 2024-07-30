//from recibe opcionalmente un callback (el cual aplicaríasimilar a map) y devuelve un NUEVO arreglo
console.log(Array.from([1, 2, 3], x => x + x));

//si se aplica from a una cadena de caracteres se mapea cada caracter en un elemento de un NUEVO
//arreglo
console.log(Array.from('foo'));

//además se le puede pasar un this
function Persona(nombre) {
    this.nombre = nombre;
}
const p = new Persona("Juan");
const nombres = ["José", "Pedro", "Manuel"];
const conThis = Array.from(nombres, (x) => `${p.nombre} ${x}`, p);
console.log(conThis);

const set = new Set(['foo', 'bar', 'baz', 'foo']);
const conjunto = Array.from(set);
console.log('conjunto', conjunto)


//con mapas
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];