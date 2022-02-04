var moneda1, moneda2, multiplicador;
var elJuegoSigue = true;

while (elJuegoSigue) {
    var input_usuario = prompt("Que quieres convertir:\n[1] De dolares a euros\n[2] De euros a dolares");
    switch (input_usuario) {
        case "1":
            moneda1 = "$";
            moneda2 = "€";
            multiplicador = 0.88898;
            elJuegoSigue = false;
            break;

        case "2":
            moneda1 = "€";
            moneda2 = "$";
            multiplicador = 1.11102;
            elJuegoSigue = false;
            break;

        default:
            break;
    }
}

var dinero_usuario = prompt("Escribe el dinero que quiere convertir");

document.write(dinero_usuario + " " + moneda1 + " son " + (dinero_usuario * multiplicador).toFixed(2) + " " + moneda2);