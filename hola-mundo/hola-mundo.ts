interface IPersona {
    nombre: string;
    apellidos: string;
    obtenerNombreCompleto(): string;
}

class Persona implements IPersona {
    constructor(public nombre: string, public apellidos: string) {
        // las propiedades ya se asignan directamente con el valor de los parámetros del constructo ;)
    }

    obtenerNombreCompleto() {
        return `${this.nombre} ${this.apellidos}`;
    }
}

function holaMundo(persona: Persona) {
    console.log(`¡Hola ${persona.obtenerNombreCompleto()} ! Bienvenido a TypeScript`);
}

holaMundo({ nombre: 'Mario', apellidos: 'Pérez', obtenerNombreCompleto: () => 'Mario Perez' });

const persona = new Persona('Mario', 'Pérez');
holaMundo(persona);
