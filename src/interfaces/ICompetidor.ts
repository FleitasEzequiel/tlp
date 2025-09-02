import type { Jugador } from "../models/Jugador";

export interface ICompetidor {
    nombre: string;
    listarIntegrantes(): Jugador[];
}