function buscarEnlaces() {
    let enlacesObject = document.getElementsByTagName("a");
    let enlaces = Array.from(enlacesObject);
    let texto = "";

    // Numero de enlaces
    texto += "1. Numero de enlaces: " + enlaces.length;

    // Ultimo enlace
    texto += "\n2. Ultimo enlace: " + enlaces[enlaces.length - 1];

    // Enlaces de google
    let numEnlacesGoogle = enlaces.filter(enlaze => enlaze.href.includes("google")).length;
    texto += "\n3. Numero de enlaces de google: " + numEnlacesGoogle;
    
    alert(texto);
}