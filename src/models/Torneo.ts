import type { Partido } from "./Partido";

class Torneo {
    partidos: Partido[];

    constructor(partidos: Partido[]) {
        this.partidos = partidos;
    }
    programarPartido(){
        console.log("Partido programado");
    }
    listarPartidos(){
        return this.partidos;
    }
    buscarPartidos(id:number){
        return this.partidos.find(partido => partido.id === id);
    }

}