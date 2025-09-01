import type { Deporte } from "./Deporte";
import type { Equipo } from "./Equipo";
import type { Resultado } from "./Resultado" ;

export class Partido {
    id: number;
    local: Equipo;
    visitante : Equipo;
    deporte: Deporte;
    resultado?: Resultado;
    constructor(id: number, local: Equipo, visitante: Equipo, deporte: Deporte, resultado?: Resultado) {
        this.id = id;
        this.local = local;
        this.visitante = visitante;
        if (this.local == this.visitante){ throw new Error("El equipo local no puede ser el mismo que el visitante") }
        this.deporte = deporte;
        if (this.deporte.validar(this.local) == false || this.deporte.validar(this.visitante) == false){
            throw new Error("La cantidad de jugadores no es valida para el deporte");
        }
        this.resultado = resultado;
    }
    toString(): string{
        return `${this.local.nombre} vs ${this.visitante.nombre} - Deporte: ${this.deporte.nombre}`;
    }
    jugar(): void {
        // Simular el resultado del partido
    }
}