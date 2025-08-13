/**
 *NETFLIX 
Una agencia vende planes Netflix (A: para 1 TV, B: para 2 TVs, C: para 5 TVs), así: A= 
suscripción $3, B= suscripción $5, C= suscripción $10; además el suscriptor debe pagar un 10% 
adicional del valor de la suscripción por servicio de conexión (menos el plan C, que ya lo incluye). 
En este sentido, se desea conocer: a) precio a pagar por cada suscriptor, b) porcentaje de 
suscriptores que no pagaron servicio de conexión, c) cuál es el plan favorito. 
La agencia manifiesta que el formato para la salida de los requerimientos solicitados es: 

El suscriptor con cedula 15457858 paga 3.3$ 
El suscriptor con cedula 15457859 paga 5.5$ 
El suscriptor con cedula 15457667 paga 10$ 
Porcentaje de suscriptores que no pagaron servicio de conexión: 33.33% 
Cuál es el plan favorito: Iguales de favorito: Plan A, Plan B y Plan C. 

La salida corresponde a los siguientes datos del suscriptor (cedula, tipo plan): 

(15457858, A) (15457859, B) (15457667, C) 
 */

import Cl_suscriptor from "./Cl_suscriptor.js";
import Cl_agencia from "./Cl_agencia.js";


const suscriptor1: Cl_suscriptor = new Cl_suscriptor(15457858, "A");
const suscriptor2: Cl_suscriptor = new Cl_suscriptor(15457859, "B");
const suscriptor3: Cl_suscriptor = new Cl_suscriptor(15457667, "C");


const agencia: Cl_agencia = new Cl_agencia();

agencia.procesarSuscriptores(suscriptor1);
agencia.procesarSuscriptores(suscriptor2);
agencia.procesarSuscriptores(suscriptor3);


let salida: HTMLElement | null = document.getElementById("salida");
if (salida) {
    salida.innerHTML = 
    `El suscriptor con cedula ${suscriptor1.cedula} paga ${suscriptor1.montoAPagar()}$<br>` +
    `El suscriptor con cedula ${suscriptor2.cedula} paga ${suscriptor2.montoAPagar()}$<br>` +
    `El suscriptor con cedula ${suscriptor3.cedula} paga ${suscriptor3.montoAPagar()}$<br>` +
    `Porcentaje de suscriptores que no pagaron servicio de conexión: ${agencia.porcentajeNoPagaronSerC()}%<br>` +
    `Cuál es el plan favorito: ${agencia.planFavorito()}`;
}
