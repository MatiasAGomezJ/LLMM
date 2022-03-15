// Creamos un diccionario para guardar a los participantes
var participantes = {};

// Localizamos el formulario para trabajar con el
var formulario = document.getElementsByTagName("form")[0];

function guardarDatos() {
    // Accedemos al nombre de id `nom`
    let nombreParticipante = formulario.nom.value;
    // Accedemos al nombre de id `estudis`
    let estudiosParticipante = formulario.estudis.value;

    // Guardmos el nombre como clave y los estudios como valor
    participantes[nombreParticipante] = estudiosParticipante;
}

function mostrarParticipantes() {
    // Crea un texto vacio
    let texto = "";

    // Por cada participante en la lista
    for (const persona in participantes) {
        // Añade al texto su nombre y sus estudios
        texto += persona + ": " + participantes[persona] + "\n";
    }
    // Despues muestra el texto
    alert(texto);
}
