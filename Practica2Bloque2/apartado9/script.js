function guardarDatos() {
    let usuario = crearUsuario();

    añadirUsuarioAlBody(usuario);
}

function crearUsuario() {
    let formulario = document.getElementById("formDeportistas");

    let usuario = {};

    let datosAGuardar = ["nombre", "edad", "deporte", "colorCamiseta", "añoComienzoDeporte"];

    for (const item of datosAGuardar) {
        if (formulario[item].value == "") {
            alert("Introduce informacion en todos los cuadros de texto y fecha");
            // Aqui va algo para parar el script
        }
        usuario[item] = formulario[item].value;
        console.log(usuario);
    }

    return usuario;
}

function añadirUsuarioAlBody(usuario) {
    // Guardamos el id del seccion que supuestamente existe
    let idSection = "section" + usuario.deporte;
    let section = document.getElementById(idSection);

    // Si no existe ...
    if (section == null) {
        // ... lo crea
        section = crearSection(section, idSection, usuario);
    }

    // Guardamos la lista donde estarán todos los deportistas
    let lista = section.getElementsByTagName("ul")[0];

    // Creamos el nuevo item con los datos del deportista
    let itemLista = document.createElement("li");
    let texto = usuario.nombre + ", " + usuario.edad + " anys, color camiseta " + usuario.colorCamiseta + ", " + usuario.añoComienzoDeporte;
    itemLista.appendChild(document.createTextNode(texto));
    lista.appendChild(itemLista);
}

function crearSection(section, idSection, usuario) {
    section = document.createElement("section");
    section.id = idSection;

    let tituloSection = document.createElement("h2");
    tituloSection.appendChild(document.createTextNode(usuario.deporte));
    section.appendChild(tituloSection);

    let lista = document.createElement("ul");
    section.appendChild(lista);

    let body = document.getElementsByTagName("body")[0];
    body.appendChild(section);

    return section;
}
