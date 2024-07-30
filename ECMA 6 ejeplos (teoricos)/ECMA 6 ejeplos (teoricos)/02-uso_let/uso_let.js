//con let la segunda definicion no compila
let let1 = 3;
//let let1 = 4; //no se puede usar las variables let antes de definirlas

//no se puede usar la variable antes de definirla
console.log(let2);
let let2 = 1;

//let mantiene el alcance dentro del scope de la funcion
function alcanceLet() {
    let let3 = 3;
    console.log(let3, "dentro");
}
alcanceLet();
console.log(let3, "fuera"); //esto no compila porque la variable se mantiene en el scope de la funcion

//let mantiene el alcance dentro del scope del bloque
let let4 = 4
if (let4 == 4) {
    let4 = "cambiado";
    let let5 = 5;
}
console.log(let4, "let 4");
//dentro del if se creo let5 pero no es visible fuera del bloque if
console.log(let5, "let 5");