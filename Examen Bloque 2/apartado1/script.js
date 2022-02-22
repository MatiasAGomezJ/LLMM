function añadirH2() {
    // Primero crea el elemento H2
    let elemento = document.createElement("h2");
    // Despues creamos texto dentro del elemento con `createTextNode`
    elemento.appendChild(document.createTextNode("Examen JavaScrip"));
    // Lo siguiente será localizar donde queremos que se muestre
    let padre = document.getElementsByTagName("header")[0];
    // Y para finalizar lo añadimos.
    padre.appendChild(elemento);
}

function añadirP() {
    // Primero crea el elemento P
    let elemento = document.createElement("p");
    // Despues creamos texto dentro del elemento con `createTextNode`
    elemento.appendChild(document.createTextNode("Aprenent Javascript"));
    // Lo siguiente será localizar donde queremos que se muestre
    let nodePare = document.getElementsByTagName("section")[0];
    // Y para finalizar lo añadimos.
    nodePare.appendChild(elemento);
}

function darColorH2() {
    // Localizamos el elemento que queremos modificar
    let h2 = document.getElementsByTagName("h2")[0];
    // Y despues modificamos su clase con el atributo `className`
    h2.className = "donaColor";
}