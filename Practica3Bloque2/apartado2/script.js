function demanarAE() {
    let lletra = prompt("Introdueix una una vocal (només A o B): ");
    try {
        if (lletra.toLowerCase() == "a") {
            alert("Perfecte, has triat la A");
        } else if (lletra.toLowerCase() == "e") {
            alert("Perfecte has triat la E");
        } else {
            throw "El valor pasado no es una A ni una E";
        }
    } catch (error) {
        alert("Ha habido un error.\n" + error);
    }
}
