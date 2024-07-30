//considerando la siguiente arrow function,
//La misma retorna el json obtenido
let llamada = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/10")
        .then((response) => response.json())
        .then((json) => json);
};

//ejecutamos una llamada normal sin 
//async await
let f1 = () => {
    let respuesta = llamada();
    console.log(`respuesta`, respuesta);
};

//ahora realizamos una llamada con async await
//dentro de un try catch
let f2 = async () => {
    try {
        let respuesta = await llamada();
        console.log(`respuesta`, respuesta);
    } catch (error) {
        console.log(error);
    }
};

//Ejecutando ambas funciones
f1();
f2();