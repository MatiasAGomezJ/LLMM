function validacio() {
    let formulario = document.getElementById("formulario");

    try {
        checkNombre();
        checkCorreo();
        checkTelefono();
        checkContraseña();
    } catch (error) {
        alert("Ha habido un error.\n" + error + ".");
    }
}

function checkNombre() {
    let input = formulario.nombre;

    // Esto no deberia nunca dar error ya que en el ...
    // ... formulario tiene el atributo required. Por ...
    // ... lo tanto jamas deberia estar vacio.
    checkIfVacio(input);
}

function checkCorreo() {
    let input = formulario.correo;
    
    checkIfVacio(input);

    let regEx = /^\w+@+\w+\.+[a-zA-Z]{2,4}$/;

    if (!regEx.test(input.value)) {
        throw "La direccion del correo no és vàlida";
    }
}

function checkTelefono() {
    let input = formulario.telefono;

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

function checkContraseña() {
    let input = formulario.contraseña;

    let regEx = /^\w+[0-9]{2}$/;

    checkIfVacio(input);

    if (input.value.length < 6) {
        throw "La contraseña tiene que tener mínimo 6 carácteres";
    }

    if (input.value.length > 10) {
        throw "La contraseña tiene que tener máximo 10 carácteres";
    }

    if (!regEx.test(input.value)) {
        throw "La contraseña no es valida";
    }
}

function checkIfVacio(cajaTexto) {
    if (cajaTexto.value == null || cajaTexto.value.length == 0) {
        throw 'La caja "' + cajaTexto.name + '" esta vacia';
    }
}