//fetch permite consumir rest API, en caso de manejar json se deben hacer dos llamadas a then, la primera es la solicitud en sí, y
//la segunda es para llamar al método .json de la primer solicitud
fetch('https://jsonplaceholder.typicode.com/todos/10')
    .then(response => response.json())
    .then(json => console.log(json));

//ejemplo de post
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

//el mismo fetch parametrizado
let url = "https://jsonplaceholder.typicode.com/posts";
let objeto = {
    title: "foo",
    body: "bar",
    userId: 1,
};
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json; charset=UTF-8");
let cuerpoPost = JSON.stringify(objeto);
let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: cuerpoPost,
};
fetch(`${url}`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))