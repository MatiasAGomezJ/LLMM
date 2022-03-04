function validacio() {
    try {
        // Nada que comprobar del nombre
        checkCorreo();
        checkTelefono();
        checkContraseña();

        texto = datosUsuario();
        alert(texto);
    } catch (error) {
        alert("Ha habido un error.\n" + error + ".");
    }
}

function checkCorreo() {
    let valor = formulario.correo.value;

    let regEx = /^\w+@\w+\.[a-zA-Z]{2,4}$/;

    if (!regEx.test(valor)) {
        throw "La direccion del correo no és vàlida";
    }
}

function checkTelefono() {
    let valor = formulario.telefono.value;

    // Si el input está vacio para la funcion
    if (valor == "") return;

    if (isNaN(Number(valor))) {
        throw "El numero de teléfono solo debe tener caracteres numéricos";
    }

    if (valor.length != 9) {
        throw "El numero de telefono tiene que tener exactamente 9 digitos";
    }
}

function checkContraseña() {
    let valor = formulario.contraseña.value;

    if (valor.length < 6) {
        throw "La contraseña tiene que tener mínimo 6 carácteres";
    }

    if (valor.length > 10) {
        throw "La contraseña tiene que tener máximo 10 carácteres";
    }

    let regEx = /^\w+[0-9]{2}$/;

    if (!regEx.test(valor)) {
        throw "La contraseña no es valida";
    }
}

function datosUsuario() {
    let datos = {};
    datos.Nombre = formulario.nombre.value;
    datos.Telefono = formulario.telefono.value;
    datos.Correo = formulario.correo.value;
    datos.Contraseña = formulario.contraseña.value;

    texto = "";
    for (const dato in datos) {
        if (datos[dato] != "") {
            texto += `${dato}: ${datos[dato]}\n`;
        }
    }

    return texto;
}
