/**
 * Strings, Boolean, Number, Array, Tuplas, Enums, Any, Void
 *
 */

let nombre_variable: string = "Nombre";

let edad: number = 25;

let lista: number[] = [1, 2, 3];
let lista2: Array<number> = [1, 2, 3];

let tupla: [string, number];
tupla = ["David", 25];

enum Animales {
  Perro,
  Gato,
  Pajaro,
}

let animal: Animales = Animales.Gato;

let cualquiera: any = true;

let nada: void = undefined;

/*Clases*/

class NombreClase {
  _propiedad: string;

  constructor(propiedad: string) {
    this._propiedad = propiedad;
  }

  get propiedad(): string {
    return this._propiedad;
  }

  set propiedad(propiedad: string) {
    this._propiedad = propiedad;
  }

  printMsg(): string {
    return "Esta clase tiene: " + this._propiedad;
  }
}

/*Interface*/

interface LogInterface {
  msg: string;
  date?: number;
}

function Logger(log: LogInterface) {
  console.log(log.msg);
}

/**Módulos y Namespace*/

//import {Validator } from './path';

//export class validator

//Namespace son como paquetes
namespace Validacion {
  export interface ValidadorNumero {
    isValid(n: number): boolean;
  }

  export class validacionLongitud implements ValidadorNumero {
    isValid(n: number): boolean {
      return true;
    }
  }
}

let validador: Validacion.ValidadorNumero = new Validacion.validacionLongitud();

console.log({ validador: validador });

/*Genéricos-> Van a indicar el tipo de dato que es en los logs*/

function compare<T>(arg1: T, arg2: T): T {
  if (arg1 > arg2) {
    return arg1;
  } else {
    return arg2;
  }
}

/*Decoradores o anotaciones*/


