
const promesaEmpleado = () => {
  return new Promise((resolve, reject) => {
    try {
      const random = Math.trunc(Math.random() * 2);
      console.log('random', random);
      if (random == 1) {
        resolve("Salio todo bien");
      } else {
        reject("El negocio fallo");
      }
    } catch (error) {
      reject(error);
    }
  })
}

const ejecutarBoton = () => {
  const parrafo = document.getElementById("parrafo");
  promesaEmpleado().then(
    (r) => {
      console.log('r', r);
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




