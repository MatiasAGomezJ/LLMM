function validacio() {
    let form = document.getElementById("formulario");

    try {
        checkNombre(form);
        checkCorreo(form);
        checkTelefono(form);
        checkContraseña(form);

        let texto = datosUsuario(form);
        alert(texto);
    } catch (error) {
        alert("Ha habido un error.\n" + error.message);
    }
}

function checkNombre(form) {
    let valor = form.nombre.value;

    if (valor == "") {
        throw new Error("El nombre no puede estar vacio.");
    }
}

function checkCorreo(form) {
    let valor = form.correo.value;

    if (valor == "") {
        throw new Error("El correo no puede estar vacio.");
    }

    let regEx = /^\w+@\w+\.[a-zA-Z]{2,4}$/;

    if (!regEx.test(valor)) {
        throw new Error("La direccion del correo no és vàlida." +
            "\nPatrón => nom@dom.com\n" +
            "    nom: cualquier cosa\n" +
            "    dom: el dominio que utilices\n" +
            "    com: puedes ser 2, 3 o 4 letras");
    }
}

function checkTelefono(form) {
    let valor = form.telefono.value;

    // Si el input está vacio para la funcion
    if (valor == "") return;

    if (isNaN(Number(valor))) {
        throw new Error("El numero de teléfono solo debe tener caracteres numéricos.");
    }

    if (valor.length != 9) {
        throw new Error("El numero de telefono tiene que tener exactamente 9 digitos.");
    }
}

function checkContraseña(form) {
    let valor = form.contraseña.value;

    if (valor == "") {
        throw new Error("La contraseña no puede estar vacia.");
    }

    if (valor.length < 6) {
        throw new Error("La contraseña tiene que tener mínimo 6 carácteres.");
    }

    if (valor.length > 10) {
        throw new Error("La contraseña tiene que tener máximo 10 carácteres.");
    }

    let regEx = /^\w+[0-9]{2}$/;

    if (!regEx.test(valor)) {
        throw new Error("La contraseña no es valida, tiene que acabar con 2 números.");
    }
}

function datosUsuario(form) {
    let datos = {};
    datos.Nombre = form.nombre.value;
    datos.Telefono = form.telefono.value;
    datos.Correo = form.correo.value;
    datos.Contraseña = form.contraseña.value;

    let texto = "";
    for (const dato in datos) {
        if (datos[dato] != "") {
            texto += `${dato}: ${datos[dato]}\n`;
        }
    }

    return texto;
}
