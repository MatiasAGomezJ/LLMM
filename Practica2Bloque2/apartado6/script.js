function mostrarContenido() {
    let ps = document.getElementsByTagName("p");

    for (const p in ps) {
        p.style.display = "block";
    }
}