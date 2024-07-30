
const callback = (resolve, reject) => {
    try {
        //se hacen cosas, si todo sale bien se devuelve un resolve
        resolve("Salio todo bien");
    } catch (error) {
        reject(error);
    }
}
const promesa = new Promise(callback);


promesa.then((result) => {
    console.log(result)
}, (error) => {
    console.log(error);
});