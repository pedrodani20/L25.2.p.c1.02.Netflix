export default class Cl_suscriptor {
  private _cedula: number;
  private _tipo : string;

  constructor(cedula: number, tipo: string) {
    this._cedula = cedula;
    this._tipo = tipo;
  }
  set cedula(cedula: number) {
    this._cedula = cedula;
  }
  get cedula(): number {
    return this._cedula;
  }
  set tipo(tipo: string) {
    this._tipo = tipo;
  }
  get tipo(): string {
    return this._tipo;
  }
  montoAPagar(): number {
    if (this._tipo === "A") {
      return 3.3;
    } else if (this._tipo === "B") {
      return 5.5;
    } else if (this._tipo === "C") {
      return 10;
    } 
    return 0;
  }
  noPagaServicioConexion(): boolean {
    if (this._tipo === "C") {
      return true;
    }
    return false;
  }
}
