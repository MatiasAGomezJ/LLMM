var palabra = prompt("Escribe algo:")

var longitud_palabra = palabra.length

var texto = '"' + palabra + '" contiene ' + longitud_palabra + " carácter"

if (longitud_palabra == 0) {
    texto = "No has escrito nada"
}
if (longitud_palabra > 1) {
    texto += "es"
}

document.write(texto)