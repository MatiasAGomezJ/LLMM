function guardarDatos() {
    let usuario = crearUsuario();

    añadirUsuarioAlBody(usuario);
}

function crearUsuario() {
    // Guarda el formulario
    let formulario = document.getElementById("formDeportistas");

    // Declaramos un objeto usuario
    let usuario = {};

    // Datos del formulario que se guardará
    let datosAGuardar = ["nombre", "edad", "deporte", "colorCamiseta", "añoComienzoDeporte"];

    for (const item of datosAGuardar) {
        // Si el value esta vacio para la ejecucion del script
        if (formulario[item].value == "") {
            alert("Introduce informacion en todos los cuadros de texto y fecha");

            // Esto sirve para que el programa pare su ejecución
            // No he encontrado ninguna otra manera de pararlo
            throw "No se han introducido datos en todas las celdas";
        }

        // Si el item es la fecha
        if (item == "añoComienzoDeporte") {
            // Crea una variable de tipo Date
            let fecha = new Date(formulario[item].value);
            // y formatealo para que se vea como DD/MM/YYYY
            usuario[item] = fecha.toLocaleDateString();
            continue;
        }

        // Guarda el valor en una llave con el mismo nombre del item
        usuario[item] = formulario[item].value;
    }

    return usuario;
}

function añadirUsuarioAlBody(usuario) {
    // Guardamos el id del seccion ...
    let idSection = "section" + usuario.deporte;

    // ... y el section que supuestamente existe
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
    // Creamos el texto
    let texto = usuario.nombre + ", " + usuario.edad + " anys, el color de la camiseta es " + usuario.colorCamiseta + ", " + usuario.añoComienzoDeporte;
    // y lo añadimos con createTextNode
    itemLista.appendChild(document.createTextNode(texto));

    // Para acabar añadimos el item a la lista
    lista.appendChild(itemLista);
}

function crearSection(section, idSection, usuario) {
    // Crea el elemento section
    section = document.createElement("section");
    // Y le da a la id el valor de idSection
    section.id = idSection;

    // Crea un titulo h2
    let tituloSection = document.createElement("h2");
    // Como texto pone el nombre del deporte
    tituloSection.appendChild(document.createTextNode(usuario.deporte));
    // Y lo añade al section
    section.appendChild(tituloSection);

    // Crea una lista ul
    let lista = document.createElement("ul");
    // Y lo añade al sectoin
    section.appendChild(lista);

    // Por ultimo guardamos el body
    let body = document.getElementsByTagName("body")[0];
    // Para añadirle el section
    body.appendChild(section);

    // Y lo devolvemos para trabajar con el
    return section;
}
