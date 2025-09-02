import type { IIdentificable } from "../interfaces/IIdentificables";
import type { Deporte } from "./Deporte";
import type { Equipo } from "./Equipo";
import { Resultado } from "./Resultado" ;

export class Partido {
    id: IIdentificable;
    local: Equipo;
    visitante : Equipo;
    deporte: Deporte;
    resultado?: Resultado;
    constructor(id: IIdentificable, local: Equipo, visitante: Equipo, deporte: Deporte, resultado?: Resultado) {
        this.id = id;
        this.local = local;
        this.visitante = visitante;
        if (this.local == this.visitante){ throw new Error("El equipo local no puede ser el mismo que el visitante") }
        this.deporte = deporte;
        if (this.deporte.validar(this.local) == false || this.deporte.validar(this.visitante) == false){
            throw new Error("La cantidad de jugadores no es valida para el deporte");
        }
        this.resultado = resultado || new Resultado(0,0);
    }
    toString(): string{
        return `${this.local.nombre} vs ${this.visitante.nombre} - Deporte: ${this.deporte.nombre}`;
    }
    jugar(): string {
        if (!this.deporte.validar(this.local)) throw new Error("El equipo local es invalido")
        if (!this.deporte.validar(this.visitante)) throw new Error("El equipo local es invalido")
        this.resultado = new Resultado(Math.floor(Math.random() * 100) % 5,Math.floor(Math.random() * 100) % 5)
        return this.resultado.toString(this.local.nombre,this.visitante.nombre)
    }
}