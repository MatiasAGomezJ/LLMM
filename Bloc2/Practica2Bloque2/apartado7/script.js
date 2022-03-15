function hacerInvisible() {
    let img = getImagen();
    img.style.display = "none";
}

function hacerVisible() {
    let img = getImagen();
    img.style.display = "block";
}

function hacerGrande() {
    let img = getImagen();
    img.width *= 1.05;
}
function hacerPequeño() {
    let img = getImagen();
    img.width *= 0.95;
}

function getImagen() {
    return document.getElementsByTagName("img")[0];
}
