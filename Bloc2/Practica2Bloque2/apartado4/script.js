function manipularTexto() {
    let formulario = document.getElementById("form");
    let inputUsuario = formulario.cadenaTexto.value;
    
    let texto = "Cadena de texto original: " + inputUsuario;

    // Minuscula
    texto += "\n1. " + inputUsuario.toLowerCase();

    // Mayuscula
    texto += "\n2. " + inputUsuario.toUpperCase();

    // Sin las últimas 5 letras
    let subTexto = inputUsuario;
    for (let i = 0; i < 5; i++) {
        subTexto = subTexto.slice(0, -1);
    }
    texto += "\n3. " + subTexto;

    // Separar palabras
    let arrayTexto = inputUsuario.split(" ");
    texto += "\n1. " + JSON.stringify(arrayTexto); // Lo muestra con -> [ ] <-

    alert(texto);
}
