//const const1;//no compila const debe estar asignado

//no se puede reasignar la constante
const const2 = 2;
const2 = 3;

//hay que tener cuidado porque se pueden hacer cosas como esta:
const arreglo = [1];
arreglo.push(4);
console.log(arreglo, "arreglo");

//se cumple también que no se puede definir más de una vez, y se mantiene en el scope de
//bloque al igual que let