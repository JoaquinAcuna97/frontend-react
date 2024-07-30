//las funciones comunes se pueden usar antes de definirlas (hoisting)
console.log(funcionDuplicar(4), "funcionDuplicar");
function funcionDuplicar(x) {
    return x * 2;
}

//arrows function no se puede usar antes de definirla (se recomienda usar const para definir arrow function)
//console.log(arrowDuplicar(4));
const arrowDuplicar = (x) => {
    return x * 2;
}

//en caso de tener un solo parámetro de entrada se puede omitir los paréntesis en caso de no tener parámetros o tener 
//más de uno hay que agregarlos
const arrowDuplicarUnParametro = x => {
    return x * 2;
}
console.log(arrowDuplicarUnParametro(3), "arrowDuplicarUnParametro");

//en caso de ejecutar una sola instrucción y esta es return se puede omitir las llaves y la palabra return
const arrowDuplicarSimplificado = x => x * 2
console.log(arrowDuplicarUnParametro(4), "arrowDuplicarSimplificado");

//En caso de usar llaves no hay un return implícito es decir lo siguiente no devuelve nada
const arrowSinRetorno = (x) => {
    x * 2;
}

//no se puede hacer new de una arrow function
//Arrow function toma this de su ámbito adjunto ya que no tiene this en su ámbito local.
//Arrow function se introdujo para que sea más intuitivo el uso de this
window.age = 18; // <-- ¿me notas?
function Person() {
    this.age = 19; // <-- ¿me notas?
    console.log(this, "this");
    setTimeout(function () {// <-- La función tradicional se está ejecutando en el ámbito de window
        console.log("edad funcion comun", this, this.age); // genera "10" porque la función se ejecuta en el ámbito de window
    }, 100);
}
const p = new Person(); //probar sin hacer new (como método)


function PersonFlecha() {
    this.age = 20; // <-- ¿me notas?
    setTimeout(() => {// <-- arrow function ejecutándose en el ámbito de "pf" (una instancia de PersonFlecha)
        console.log("edad función flecha", this.age); // genera "42" porque la función se ejecuta en el ámbito de PersonFlecha
    }, 100);
}
const pf = new PersonFlecha();