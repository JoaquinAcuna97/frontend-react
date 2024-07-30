let addams = { nombre: 'Homero', apellido: "Addams" };
let simpsons = { apellido: 'Simpsons', edad: 38 };

//se realiza una copia del objeto
let addamsClonado = { ...addams };
console.log(addamsClonado);

//Se combinan los objetos, aquellos campos comunes se sobreescriben con los parámetros más a la
//derecha, en este caso apellido queda Simpsons
let mergedFamilias = { ...addams, ...simpsons };
console.log(mergedFamilias);