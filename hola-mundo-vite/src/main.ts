import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      <b>Revisa la consola del navegador para ver el resultado de la función "holaMundo"</b>
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

enum ComunidadAutonoma {
  Anadlucia,
  Cataluña,
  Madrid,
}

// IMPORTANTE: const enums no generan código en JS! Se reemplazan por el valor de la constante en tiempo de compilación!
// const enum ComunidadAutonomaConstante {
//   Anadlucia,
//   Cataluña,
//   Madrid,
// }

enum Idioma {
  Español,
  Inglés,
  Frances,
}


abstract class Persona {
  edad: number | undefined;
  abstract lenguaMaterna: Idioma;

  constructor(public nombre: string, public apellidos: string, public residencia: ComunidadAutonoma) {
      this.nombre = nombre;
      this.apellidos = apellidos;
  }

  get nombreCompleto(): string {
      return `${this.nombre} ${this.apellidos}`;
  }
}

class Español extends Persona {
  lenguaMaterna = Idioma.Español

  constructor(nombre: string, apellidos: string, residencia: ComunidadAutonoma) {
    super(nombre, apellidos, residencia);
  }
}

class Extranjero extends Persona {
  lenguaMaterna: Idioma;
  añosEnEspaña: number;

  constructor(nombre: string, apellidos: string, residencia: ComunidadAutonoma, idioma: Idioma, añosEnEspaña: number) {
    super(nombre, apellidos, residencia);
    this.lenguaMaterna = idioma;
    this.añosEnEspaña = añosEnEspaña;
  }
}

function holaMundo(persona: Persona) {
  console.log(`¡Hola ${persona.nombreCompleto} ! Bienvenido a TypeScript`);
  console.log(`Vives en ${ComunidadAutonoma[persona.residencia]}`);
  if (persona.edad) {
    console.log(`${persona.nombre} tienes ${persona.edad} años`);
  }

  if (esExtranjero(persona)) {
    console.log(`Hablas ${Idioma[persona.lenguaMaterna]}`);
    console.log(`Llevas ${persona.añosEnEspaña} años viviendo en España`);
  }
}

// type guard o guardia de tipos
function esExtranjero(persona: unknown): persona is Extranjero { // true si persona es de tipo X o false

  /*if ('añosEnEspaña' in persona) {
    return true;
  }*/

  /*if ((persona as Extranjero)['añosEnEspaña'] != null) {
    return true;
  }*/

  if ((persona as object).hasOwnProperty('añosEnEspaña')) {
    return true;
  }

  return false;
}

// const persona = new Extranjero('Jurgen', 'Peters', ComunidadAutonoma.Madrid, Idioma.Frances, 8);
const persona = new Español('Mario', 'Pérez', ComunidadAutonoma.Madrid);
persona.edad = 30;
holaMundo(persona);

