function cambiarColorFondo(c) {

    backgroundC = "white";

    switch (c) {
        case "marron":
            backgroundC = "brown";
            break;
        case "blau":
            backgroundC = "blue";
            break;
        case "taronja":
            backgroundC = "orange";
            break;
        case "vermell":
            backgroundC = "red";
            break;
        case "verd":
            backgroundC = "green";
            break;
        case "blanc":
            backgroundC = "white";
            break;

        default:
            // Nothing
            break;
    }

    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = backgroundC;
}