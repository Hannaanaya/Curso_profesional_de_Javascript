var hanna = {
    nombre: 'Hanna',
    apellido:'Anaya',
    altura: 1.56
}

var alan = {
    nombre: 'Alan',
    apellido:'Perez',
    altura: 1.72
}

var martin = {
    nombre: 'Martín',
    apellido:'Gomez',
    altura: 1.67
}

var dario = {
    nombre: 'Dario',
    apellido:'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido:'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido:'Barros',
    altura: 1.76
}

var personas = [hanna, alan, martin, dario, vicky, paula]

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}