function mostrarContenido() {
    let ps = document.getElementsByTagName("p");

    for (let i = 0; i < ps.length; i++) {
        let p = ps[i];
        p.style.display = "block";
    }
}