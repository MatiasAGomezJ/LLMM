var numTitulosTotal = 0;

function creadorTitulos() {
    let numTitulos = prompt("Cuantos títulos quieres añadir?");
    let header = document.getElementsByTagName("header")[0];        // Elemento en el cual añadiremos el nuevo elemento
    let adan = document.getElementById("adan");                     // Elemento que será posterior al nuevo elemento

    for (let i = 0; i < numTitulos; i++) {
        numTitulosTotal++;
        let nuevoTitulo = document.createElement("h1");             // Creamos el nuevo elemento
        nuevoTitulo.innerHTML = "Título numero " + numTitulosTotal; // Y añadimos texto dentro
        header.insertBefore(nuevoTitulo, adan);
    }
}
