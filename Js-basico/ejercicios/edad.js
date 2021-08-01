var hanna = {
    nombre: 'Hanna',
    apellido: 'Anaya',
    edad: 18
}
var alejandra = {
    nombre: 'Alejandra',
    apellido: 'Uval',
    edad: 17
}
var carlos = {
    nombre: 'Carlos',
    apellido: 'Morales',
    edad: 20
}
var jessica = {
    nombre: 'Jessica',
    apellido: 'Mendez',
    edad: 15
}
var lazaro = {
    nombre: 'Lazaro',
    apellido: 'Puerto',
    edad: 13
}

var MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayorde edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('NO SE PERMITE EL ACCESO DE MENORES DE EDAD')
    }
}