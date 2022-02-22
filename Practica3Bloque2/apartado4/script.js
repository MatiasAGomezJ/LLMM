// * Hoy es un buen dia
// * 22:22 22/2/22

function validacio() {
    let formulario = document.getElementById("formulario");

    checkMail();
}

function checkMail() {
    let correoCaja = formulario.correo;
    correoCaja.value = "jesuscristo@gmail.com";

    if (checkIfVacio(correoCaja)) {
        alert("El " + texto.name + " esta vacio");
        return false;
    }

    if (!/^\w+@+\w+\.+[a-zA-Z]{2,4}$/.test(correoCaja.value)) {
        alert("L'adreça de correu no és vàlida");
        return false;
    }
}

function checkIfVacio(texto) {
    return texto.value == null || texto.value.length == 0 ? true : false;
}
