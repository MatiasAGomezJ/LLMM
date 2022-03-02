function validacio() {
    let formulario = document.getElementById("formulario");

    try {
        // Nada que comprobar del nombre
        checkCorreo();
        checkTelefono();
        checkContraseña();
    } catch (error) {
        alert("Ha habido un error.\n" + error + ".");
    }

    texto = "Informacion" + "\nNom: " + formulario.nombre.value + "\nCorreo electronico: " + formulario.correo.value;

    if (formulario.telefono.value != "") {
        texto += "\nTelefono: " + formulario.telefono.value;
    }

    alert(texto);
}

function checkCorreo() {
    let input = formulario.correo;

    let regEx = /^\w+@+\w+\.+[a-zA-Z]{2,4}$/;

    if (!regEx.test(input.value)) {
        throw "La direccion del correo no és vàlida";
    }
}

function checkTelefono() {
    let input = formulario.telefono;

    // Si el input está vacio para la funcion
    if (input.value == "") return;

    if (isNaN(Number(input.value))) {
        throw "El numero de teléfono solo debe tener caracteres numéricos";
    }

    if (input.value.length != 9) {
        throw "El numero de " + input.name + " tiene que tener exactamente 9 digitos";
    }
}

function checkContraseña() {
    let input = formulario.contraseña;

    // Si el input está vacio para la funcion
    if (input) return;

    if (input.value.length < 6) {
        throw "La contraseña tiene que tener mínimo 6 carácteres";
    }

    if (input.value.length > 10) {
        throw "La contraseña tiene que tener máximo 10 carácteres";
    }

    let regEx = /^\w+[0-9]{2}$/;

    if (!regEx.test(input.value)) {
        throw "La contraseña no es valida";
    }
}
