import Cl_suscriptor from './Cl_suscriptor';

export default class Cl_agencia {
  private contSuscriptores: number = 0;
  private contSuscriptoresNoPagaronSerC: number = 0;
  private tipoA: number;
  private tipoB: number;
  private tipoC: number;

  constructor() {
    this.contSuscriptores = 0;
    this.contSuscriptoresNoPagaronSerC = 0;
    this.tipoA = 0;
    this.tipoB = 0;
    this.tipoC = 0;
  }
  procesarSuscriptores(s: Cl_suscriptor): void {
    this.contSuscriptores++;
    if (s.noPagaServicioConexion()) {
      this.contSuscriptoresNoPagaronSerC++;
    }
    if (s.montoAPagar() === 3.3) {
      this.tipoA++;
    } else if (s.montoAPagar() === 5.5) {
      this.tipoB++;
    } else if (s.montoAPagar() === 10) {
      this.tipoC++;
  }
    }
  porcentajeNoPagaronSerC(): number {
    return (this.contSuscriptoresNoPagaronSerC / this.contSuscriptores) * 100;
  }
  planFavorito(): string {
    if (this.tipoA > this.tipoB && this.tipoA > this.tipoC) {
      return "El plan favorito es el plan A.";
    } else if (this.tipoB > this.tipoA && this.tipoB > this.tipoC) {
      return "El plan favorito es el plan B.";
    } else if (this.tipoC > this.tipoA && this.tipoC > this.tipoB) {
      return "El plan favorito es el plan C.";
    } else {
      return "Iguales de favorito: Plan A, Plan B y Plan C.";
    }
  }
} 
