
export class Resultado {
    private golesLocal: number;
    private golesVisitante: number;
    constructor(golesLocal: number, golesVisitante: number) {
        this.golesLocal = golesLocal;
        this.golesVisitante = golesVisitante;
    }
    toString(local: string,visitante: string): string{
        return `${local} ${this.golesLocal} - ${visitante} ${this.golesVisitante}`;
    }
    setLocal(golesLocal: number): void {
        this.golesLocal = golesLocal;
    }
    setVisitante(golesVisitante: number): void {
        this.golesVisitante = golesVisitante;
    }
    

}