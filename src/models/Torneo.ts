import type { IIdentificable } from "../interfaces/IIdentificables";
import type { Partido } from "./Partido";

export class Torneo {
    id: IIdentificable;
    nombre: string;
    private partidos: Partido[];

    constructor(id: IIdentificable,nombre: string,partidos: Partido[]) {
        this.id = id;
        this.nombre = nombre;
        this.partidos = partidos;
    }
    programarPartido(partido: Partido){
        console.log("Partido programado");
        this.partidos.push(partido);
    }
    listarPartidos(){
        return this.partidos;
    }
    buscarPartidos(id:string){
        return this.partidos.find(partido => partido.id.id == id);
    }
    jugarTorneo(){
        if (this.partidos.length === 0) {
            throw new Error("No hay partidos programados en el torneo");
        }
        this.partidos.forEach(partido => {
            console.log(partido.jugar());
        })
        console.log("Torneo finalizado");
    }
}