import type { IIdentificable } from "../interfaces/IIdentificables";

export class Jugador {
    id: IIdentificable
    nombre: string;
    edad: number;
    posicion?: string;
    constructor(id: IIdentificable, nombre: string, edad: number, posicion?: string) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.posicion = posicion;
    }
    toString():string{
        return `ID: ${this.id} - Edad: ${this.edad} - Posicion: ${this.posicion ?? 'No definida'}`;
    }
}