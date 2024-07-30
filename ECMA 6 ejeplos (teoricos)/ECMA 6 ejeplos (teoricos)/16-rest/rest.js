//se pueden recibir un número desconocido de parámetros mediante rest (...param)
//siempre debe ir como último parámetro de la función
// eventualmente la función puede tener rest, como único parámetro
//En el ejemplo se toman los dos primeros parámetros como saludos, y el resto se
//consideran nombres cuyo tamaño en principio no se conoce
function armarSaludo(saludo, finSaludo, ...nombres) {
    console.log(saludo, finSaludo, nombres);
    nombres.forEach(nombre => {
        console.log(`${saludo} ${nombre} ${finSaludo}`);
    })
}
armarSaludo("Hola", "bienvenido", "Jose", "Pedro", "Roberto");
function armarSaludo2(...nombres) {
    let [primerNombre, segundoNombre] = nombres;
    console.log(`Nombres: ${primerNombre} , ${segundoNombre}`);
}
armarSaludo2("Jose");
//en este caso segundo nombre daría indefinido