//FECHA DE HOY 
function fechaActual() {
hoy = new Date();
var dia = hoy.getDate();
var mes = hoy.getMonth();
var year = hoy.getFullYear()

if (dia < 10 ){
    dia = "0" + dia
  }
   if (mes < 10 ){
    mes = "0" + mes
  }
imprimirFecha = "<h3>" + "Hoy es" + " " +  dia + " " + "de " + mes + " " + year + "</h3>";

document.getElementById('fecha').value = imprimirFecha
};

//HORA ACTUAL
function horaReloj() {
fechaHora = new Date();
var hora = fechaHora.getHours();
var minutos = fechaHora.getMinutes();
var segundos = fechaHora.getSeconds();

var sufijo = 'a.m.';
if(hora > 12) {
hora = hora - 12;
sufijo = 'p.m.';
}

segundos++;
   
if (segundos == 60) {
  segundos = 0;
  minutos++;
  if (minutos == 60) {
    minutos = 0;
    hora++;
    if (hora == 24) {
      hora = 0;
    }
  }
}

document.getElementById("reloj").value = " "  + hora + ":" + minutos + ":" + segundos + " " + sufijo;

timeout = setTimeout("horaReloj()",1000)
}