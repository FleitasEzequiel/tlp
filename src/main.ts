import { Basquet } from './models/Basquet'
import { Equipo } from './models/Equipo'
import { Futbol } from './models/Futbol'
import { Jugador } from './models/Jugador'
import { Partido } from './models/Partido'
import { Torneo } from './models/Torneo'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hola mundo</h1>
`


// Creación de Equipos de Fútbol
const chacra8 = new Equipo('Chacra 8', [
    new Jugador({id:"1"},'Ana',22,'Delantero'),
    new Jugador({id:"2"},'Pedro',24,'Defensor'),
    new Jugador({id:"3"},'Luis',21,'Mediocampista'),
    new Jugador({id:"4"},'Carlos',23,'Arquero'),
    new Jugador({id:"6"},"Juan",26,'Defensor'),
    new Jugador({id:"5"},'Miguel',25,'Delantero'),
    new Jugador({id:"12"},'Sergio',27,"Mediocampista")
    ])
const chacra9 = new Equipo('Chacra 9', [
    new Jugador({id:"6"},'Ana',22,'Delantero'),
    new Jugador({id:"7"},'OrdeP',42,'Defensor'),
    new Jugador({id:"8"},'Suil',12,'Mediocampista'),
    new Jugador({id:"9"},'Solrac',32,'Arquero'),
    new Jugador({id:"10"},'Leugim',52,'Delantero'),
    new Jugador({id:"11"},"Nuaj",62,'Defensor'),
    new Jugador({id:"13"},'Oigres',72,"Mediocampista")
    ])

//Creación de un partido de fútbol
const Partidazo0 = new Partido({id:"11"}, chacra8, chacra9,new Futbol())
console.log(Partidazo0.jugar())


//Creación de un equipo de basquet    
const Sarmiento1 = new Equipo('Sarmiento 1', [
    new Jugador({id:"6"},'Ana',22,'Delantero'),
    new Jugador({id:"7"},'OrdeP',42,'Defensor'),
    new Jugador({id:"8"},'Suil',12,'Mediocampista'),
    new Jugador({id:"9"},"Nuaj",62,'Defensor'),
    new Jugador({id:"13"},'Oigres',72,"Mediocampista")
    ])

const Regatas2 = new Equipo('Regatas 2', [
    new Jugador({id:"6"},'Ana',22,'Delantero'),
    new Jugador({id:"7"},'OrdeP',42,'Defensor'),
    new Jugador({id:"8"},'Suil',12,'Mediocampista'),
    new Jugador({id:"11"},"Nuaj",62,'Defensor'),
    new Jugador({id:"22"},'Oigres',72,"Mediocampista")
    ])

//Creación de un partido de basquet
const Partidazo1 = new Partido({id:"22"}, Sarmiento1,Regatas2,new Basquet())
console.log(Partidazo1.jugar())

//Validaciones
console.log(new Basquet().validar(Sarmiento1)) 
console.log(new Basquet().validar(Regatas2) )
console.log(new Basquet().validar(chacra9)) // Devuelve False porque es de Fútbol
console.log(new Basquet().validar(chacra8)) // Devuelve False porque es de Fútbol
console.log(new Futbol().validar(chacra9))
console.log(new Futbol().validar(chacra8))
//Creación de un Torneo
const Torneo1 = new Torneo({id:"2"},"Copa Polo",[])
Torneo1.programarPartido(Partidazo0)
Torneo1.programarPartido(Partidazo1)
console.log(Torneo1.listarPartidos())
console.log(Torneo1.buscarPartidos("11"))
Torneo1.jugarTorneo()