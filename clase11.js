var hanna = {
    nombre: 'Hanna',
    apellido: 'Anaya',
    edad: 18,
    tecnica: true,
    cocinera: false,
    estudiante: true,
    cantante: false,
    guitarrista: false,
    drone: false
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.tecnica) {
        console.log('Tecnica')
    }
    if (persona.cocinera) {
        console.log('Cocinera')
    }
    if (persona.estudiante) {
        console.log('Estudiante')
    }
    if (persona.cantante) {
        console.log('Cantante')
    }
    if (persona.guitarrista) {
        console.log('Guitarrista')
    }
    if (persona.drone) {
        console.log('Drone')
    }
}

var MAYORIA_DE_EDAD = 18

function esMayorDeEdAD(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdAD(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
 } 