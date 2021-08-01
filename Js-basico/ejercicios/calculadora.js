resultado = document.getElementById("resultado");

var operacion;
var n1;
var n2;

function num() {
    
    var cero = document.getElementById('cero');
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent  + "0";
    }
    var uno = document.getElementById('uno');
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent  + "1";
    }
    var dos = document.getElementById('dos');
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent  + "2";
    }
    var tres = document.getElementById('tres');
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent  + "3";
    }
    var cuatro = document.getElementById('cuatro');
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent  + "4";
    }
    var cinco = document.getElementById('cinco');
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent  + "5";
    }
    var seis = document.getElementById('seis');
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent  + "6";
    }
    var siete = document.getElementById('siete');
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent  + "7";
    }
    var ocho = document.getElementById('ocho');
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent  + "8";
    }
    var nueve = document.getElementById('nueve');
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent  + "9";
    }
    
    var igual = document.getElementById('igual');
    igual.onclick = function(e){
        n2 = resultado.textContent;
        resolver();
    }
}

function operaciones(op) {
    var ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },

        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        },
        
        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        },

        dividir: function dividirNumeros(n1, n2) {
            return (parseInt(n1) / parseInt(n2));
        }

    };
}

function limpiar(){
    resultado.textContent = "";
  }

  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = n1 + n2;
        break;
      case "-":
          res = n1 - n2;
          break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n1 / n2;
        break;
    }
    resultado.textContent = res;
};