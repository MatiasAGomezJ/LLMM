function validacio() {
    let formulario = document.getElementById("formulario");

    try {
        // checkNombre();
        // checkCorreo();
        checkTel();
    } catch (error) {
        alert("Ha habido un error.\n" + error + ".");
    }
}

function checkNombre() {
    let input = formulario.nombre;
    // ! Borrar
    input.value = "Matias";

    // Esto no deberia nunca dar error ya que en el ...
    // ... formulario tiene el atributo required. Por ...
    // ... lo tanto jamas deberia estar vacio.
    checkIfVacio(input);
}

function checkCorreo() {
    let input = formulario.correo;
    // ! Borrar
    input.value = "gmail@gmail.com";

    checkIfVacio(input);

    if (!/^\w+@+\w+\.+[a-zA-Z]{2,4}$/.test(input.value)) {
        throw "L'adreça de correu no és vàlida";
    }
}

function checkTel() {
    let input = formulario.telefono;
    // ! Borrar
    input.value = "971456289";

    // Esto no deberia nunca dar error ya que en el ...
    // ... formulario tiene el atributo required. Por ...
    // ... lo tanto jamas deberia estar vacio.
    checkIfVacio(input);

    if (isNaN(Number(input.value))) {
        throw "El numero de teléfono solo debe tener caracteres numéricos";
    }

    if (input.value.length != 9) {
        throw "El numero de " + input.name + " tiene que tener exactamente 9 digitos";
    }
}

function checkIfVacio(cajaTexto) {
    if (cajaTexto.value == null || cajaTexto.value.length == 0) {
        throw "El " + cajaTexto.name + " esta vacio";
    }
}
