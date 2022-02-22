function colorificador() {
    let isCorrect = false;
    while (!isCorrect) {
        inputLetra = prompt("Elige el color; de la letra: [R,G,B]");
        inputFondo = prompt("Elige el color del fondo: [R,G,B]");

        cLetra = selectorColor(inputLetra);
        cFondo = selectorColor(inputFondo);

        if (!(cLetra == null || cFondo == null)) {
            isCorrect = true;
        }
    }
    p = document.getElementsByTagName("p");

    for (let i = 0; i < 2; i++) {
        p[i].style.fontWeight = "bold";
        p[i].style.color = cLetra;
        p[i].style.backgroundColor = cFondo;
    }
}

function selectorColor(c) {
    let cUpper = c.toUpperCase();
    let color = "";
    switch (cUpper) {
        case "R":
            color = "red";
            break;
        case "G":
            color = "green";
            break;
        case "B":
            color = "blue";
            break;

        default:
            color = null;
            break;
    }
    return color;
}