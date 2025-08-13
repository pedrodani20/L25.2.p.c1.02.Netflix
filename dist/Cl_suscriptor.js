export default class Cl_suscriptor {
    constructor(cedula, tipo) {
        this._cedula = cedula;
        this._tipo = tipo;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
    montoAPagar() {
        if (this._tipo === "A") {
            return 3.3;
        }
        else if (this._tipo === "B") {
            return 5.5;
        }
        else if (this._tipo === "C") {
            return 10;
        }
        return 0;
    }
    noPagaServicioConexion() {
        if (this._tipo === "C") {
            return true;
        }
        return false;
    }
}
