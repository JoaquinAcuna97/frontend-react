let nombreInput = document.getElementById("nombre");
let passwordInput = document.getElementById("password");
const parrafo = document.getElementById("parrafo");

const urlApiObligatorio = "https://dwallet.develotion.com/";

const loginApiObligatorio = async (usuario, password) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({ "usuario": usuario, "password": password });
    const requestOptions = { method: 'POST', headers: myHeaders, body: raw, redirect: 'follow' };
    return fetch(`${urlApiObligatorio}login.php`, requestOptions)
        .then(response => {
            console.log('response', response);
            return response.text();
        })
        .then(result => {
            console.log('result', result);
            const parseo = JSON.parse(result);
            //la api devuelve el codigo en la respuesta y eventualmente
            //si hubo un error un mensaje acorde (esta api en caso de error devuelve mensaje y codigo)
            if (parseo.codigo != 200) {
                //como hubo un error, la api devuelve el objeto respuesta en un promise.reject
                //lo que implica que sera catcheado mas abajo ya que se esta diciendo que la promesa fallo
                return Promise.reject(parseo);
            } else {
                return result;
            }
        })
        .catch(
            //aca se puede llegar porque se lanzo un error en el segundo then o bien hubo un error que
            //no se pudo controlar
            (error) => {
                console.log('error', error)
                //se termina lanzando un error el mensaje depende de si el error tenia un mensaje
                //se muestra el mensaje que se supone nos devolvio la api, sino se muestra el mensaje
                //hubo un error
                throw new Error(error.mensaje ? error.mensaje : "Hubo un error");
            }
        );
}

const ejecutarBoton = () => {
    const nombre = nombreInput.value;
    const password = passwordInput.value;

    parrafo.setAttribute('style', 'color:black');
    parrafo.innerText = "Enviando...";

    loginApiObligatorio(nombre, password).then(
        (r) => {
            parrafo.setAttribute('style', 'color:green');
            parrafo.innerText = r.toUpperCase();

        }
    ).catch(
        (e) => {
            console.log('e', e);
            parrafo.setAttribute('style', 'color:red');
            parrafo.innerText = e;
        }
    )
}
document.getElementById("botonOperar").addEventListener("click", ejecutarBoton);



