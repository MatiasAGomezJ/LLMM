function validacio() {
    let form = document.getElementById("formulario");

    try {
        checkNombre(form);
        checkTelefono(form);
        checkCorreo(form);
        // La ciudad y el pais no tienen nada que haya que comprobar
        checkNumTarjeta(form);

        let texto = datosUsuario(form);
        alert(texto);
    } catch (error) {
        alert("Ha habido un error.\n" + error);
    }
}

function checkNombre(form) {
    let valor = form.nombre.value;

    let regEx = /^[A-Z]{1}\w+$/;

    if (valor == "") {
        throw "El nombre no puede estar vacio.";
    }

    if (valor.length > 10) {
        throw "La nombre tiene que tener máximo 10 carácteres.";
    }

    if (!regEx.test(valor)) {
        throw "El nombre no es válido, tiene que comenzar con 1 mayuscula.";
    }
}

function checkTelefono(form) {
    let valor = form.telefono.value;

    if (valor == "") return;

    if (isNaN(Number(valor))) {
        throw "El numero de teléfono solo debe tener caracteres numéricos.";
    }

    if (valor.length != 9) {
        throw "El numero de telefono tiene que tener exactamente 9 digitos.";
    }
}

function checkCorreo(form) {
    let valor = form.correo.value;

    if (valor == "") {
        throw "El correo no puede estar vacio.";
    }

    let regEx = /^\w+@domini\.[a-zA-Z]{2,4}$/;

    if (!regEx.test(valor)) {
        throw "La direccion del correo no és vàlida.\nPatron => nomsuario@domini.xxx\n    nomusuario: cualquier cosa\n    @domini: exactamente igual\n    xxx: puedes ser 2,3 o 4 letras.";
    }
}

function checkNumTarjeta(form) {
    let valor = form.numTarjeta.value;

    if (valor == "") {
        throw "El numero de la tarjeta de credito no puede estar vacio.";
    }

    let regEx = /^\d{4}\-\d{4}\-\d{4}\-\d{4}$/;

    if (!regEx.test(valor)) {
        throw "El numero de la tarjeta de credito no es válido, tiene que seguir el siguiente patrón\nPatrón => '1234-1234-1234-1234'.";
    }
}

function datosUsuario(form) {
    let datos = {};
    datos.Nombre = form.nombre.value;
    datos.Telefono = form.telefono.value;
    datos.Ciudad = form.ciudad.value;
    datos.Pais = form.pais.value;
    datos.Correo = form.correo.value;
    datos.NumTarjeta = form.numTarjeta.value;

    let texto = "";
    for (const dato in datos) {
        if (datos[dato] != "") {
            texto += `${dato}: ${datos[dato]}\n`;
        }
    }

    return texto;
}
