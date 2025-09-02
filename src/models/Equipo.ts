import type { ICompetidor } from "../interfaces/ICompetidor";
import type { Jugador } from "./Jugador";

export class Equipo implements ICompetidor{
    nombre: string;
    private integrantes: Jugador[];
    constructor(nombre: string, integrantes: Jugador[]) {
        this.nombre = nombre;
        this.integrantes = integrantes;
    }
    agregarJugador(jug: Jugador): void {
        if (this.integrantes.includes(jug)) throw new Error("El jugador ya pertenece al equipo");
        this.integrantes.push(jug);
    }
    listarIntegrantes(): Jugador[] {
        return this.integrantes
    }
    toString(): string{
        return `Equipo: ${this.nombre}, Integrantes: ${this.integrantes.join(", ")}`;
    }
    getCantidad(): number {
        return this.integrantes.length;
    }
   
}