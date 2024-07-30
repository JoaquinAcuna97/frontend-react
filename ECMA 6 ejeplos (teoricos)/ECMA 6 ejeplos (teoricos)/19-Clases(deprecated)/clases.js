class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    obtenerDatos() {
        return `marca:${this.marca}, modelo: ${this.modelo}, anio: ${this.anio}`;
    }
    saludar() {
        console.log("Hola soy un vehículo");
    }
}


class Auto extends Vehiculo {
    constructor(marca, modelo, anio, numPuertas) {
        super(marca, modelo, anio);
        this.numPuertas = numPuertas;
    }
    //se sobreescribe el método heredado
    obtenerDatos() {
        let metodoHeredado = super.obtenerDatos();
        return `${metodoHeredado}, puertas:${this.numPuertas}`
    }
    queSoy() {
        console.log("Soy un auto");
    }
    modificarPuertas(puertas) {
        this.numPuertas = puertas;
    }
}


const auto = new Auto("Nissan", "Versa", 2019, 5);
auto.saludar();
auto.queSoy();
console.log(auto.obtenerDatos());
auto.modificarPuertas(4);
console.log(auto.obtenerDatos());
