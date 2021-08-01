function informar(usuarios, claves) {
    var mensaje = "Usuario no autorizado";
    var usuarios = new Array(3);
    var claves = new Array(3);

    usuarios[0] = "CARLOS";
    usuarios[1] = "JUAN";
    usuarios[2] = "PACO";

    claves[0] = "carl0sxx";
    claves[1] = "!juanzho44";
    claves[2] = "paco1xt";

    for(var i = 0; i < usuarios.length; i++) {
    (usuarios[i]== document.formulary.usuario.value.toUppercase()) && (claves[i]== document.formulary.password.value) 
        mensaje = "¡Bienvenido al sistema! :D";
        break;
}

alert(mensaje);
document.formulary.cleanButton.click();
document.formulary.usuario.focus();
}