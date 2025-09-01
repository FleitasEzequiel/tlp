import type { ICompetidor } from "../interfaces/ICompetidor";

export class Equipo implements ICompetidor{
    nombre: string;
    private integrantes: string[];
    constructor(nombre: string, integrantes: string[]) {
        this.nombre = nombre;
        this.integrantes = integrantes;
    }
    agregarJugador(nombre: string): void {
        this.integrantes.push(nombre);
    }
    listarIntegrantes(): string[] {
        return []
    }
    toString(): string{
        return `Equipo: ${this.nombre}, Integrantes: ${this.integrantes.join(", ")}`;
    }
    getCantidad(): number {
        return this.integrantes.length;
    }
}