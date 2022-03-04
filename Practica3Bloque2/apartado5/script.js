function validacio() {
    let formulario = document.getElementById("formulario");

    try {
        checkNombre();
        checkTelefono();
        // checkCorreo();
        // La ciudad y el pais no tienen nada que haya que comprobar
        checkNumTarjeta();

        // texto = "Informacion" + "\nNom: " + formulario.nombre.value + "\nCorreo electronico: " + formulario.correo.value;
        // if (formulario.telefono.value != "") {
        //     texto += "\nTelefono: " + formulario.telefono.value;
        // }
        // alert(texto);
        console.log(formulario.nombre.value);
        console.log(formulario.telefono.value);
        console.log(formulario.ciudad.value);
        console.log(formulario.pais.value);
        console.log(formulario.correo.value);
        console.log(formulario.numTarjeta.value);
        alert("stop");
    } catch (error) {
        alert("Ha habido un error.\n" + error + ".");
    }
}

function checkNombre() {
    let valor = formulario.nombre.value;

    regEx = /^[A-Z]{1}\w+$/;

    if (valor == "") return;

    if (valor.length > 10) {
        throw "La nombre tiene que tener máximo 10 carácteres";
    }

    if (!regEx.test(valor)) {
        throw "El nombre no es válido, tiene que comenzar con 1 mayuscula";
    }
}

function checkTelefono() {
    let valor = formulario.telefono.value;

    if (valor == "") return;

    if (isNaN(Number(valor))) {
        throw "El numero de teléfono solo debe tener caracteres numéricos";
    }

    if (valor.length != 9) {
        throw "El numero de telefono tiene que tener exactamente 9 digitos";
    }
}

// function checkCorreo() {
//     let valorCorreo = formulario.correo.value;

//     let regEx = /^\w+@+\w+\.+[a-zA-Z]{2,4}$/;

//     if (!regEx.test(valorCorreo)) {
//         throw "La direccion del correo no és vàlida";
//     }
// }

function checkNumTarjeta() {
    let valor = formulario.numTarjeta.value;

    if (valor == "") return;

    regEx = /^\d{4}\-\d{4}\-\d{4}\-\d{4}$/;

    if (!regEx.test(valor)) {
        throw "El numero de la tarjeta de credito no es válido, tiene que seguir el siguiente patrón\nPatrón => '1234-1234-1234-1234'";
    }
}

añadirInformacion();

function añadirInformacion() {
    let formulario = document.getElementById("formulario");
    
    formulario.nombre.value = "Jaime"
    formulario.telefono.value = "123456789"
    formulario.ciudad.value = "Ja"
    formulario.pais.value = "Ime"
    formulario.correo.value = "jaime@jaime.jaime"
    formulario.numTarjeta.value = "1234-1234-1234-1234"
}
