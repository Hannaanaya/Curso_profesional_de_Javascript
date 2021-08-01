var text = document.getElementById("texto");
var button = document.getElementById("texto");
button.addEventListener("click", enter)

function enter(e) {
    var texto = 0;
    if(texto < 100 || texto > 0)  {
        alert("Gracias por su visita")
    } else {
        alert("Error la ingresar")
    }
}

