// function auto(MARCA, MODELO, AÑO) {
//     this.marca = MARCA,
//     this.modelo = MODELO,
//     this.año = AÑO
// }

// var autos = [];

// for (let i = 0; i < 30; i++) {
//     var marca = prompt("Ingresa la marca del auto");
//     var modelo = prompt("Ingresa el modelo del auto");
//     var año = prompt("Ingresa el año del auto");
//     autos.push(new auto (marca, modelo, año))
// }

// for(let i = 0 ; i < autos.length ; i++){
//     console.log(autos[i]);
//   }


var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 1000 },
    { nombre: "Laptop", costo: 2000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audífonos", costo: 1700 },
];

//var articulosFiltrados = articulos.filter(function (articulo) {
    //return articulo.costo <= 500
//});

var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 700;
});