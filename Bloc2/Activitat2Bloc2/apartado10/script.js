var nota = prompt("Escribe la nota que has sacado:[0/10]");

var texto = "???";
switch (nota) {
    case "0":
        texto = "Un cero pero con orgullo, que ceros hay pocos";
        break;

    case "1":
        texto = "Al menos lo has intentado";
        break;

    case "2":
        texto = "Haber estudiao";
        break;

    case "3":
        texto = "Por debajo del cuatro no hace media, así que pa' junio chavalote";
        break;

    case "4":
        texto = "Tan cerca y a la vez tan lejos";
        break;

    case "5":
        texto = "Lo justo y necesario";
        break;

    case "6":
        texto = "Esta bien, pero, bueno, esta bien";
        break;

    case "7":
        texto = "Esta en la franja del bien y el notable, a partir de aquí puedes sentirte orgulloso";
        break;

    case "8":
        texto = "Nah, de locos";
        break;

    case "9":
        texto = "Tan cerca y a la vez tan lejos";
        break;

    case "10":
        texto = "Has copiado fijo";
        break;

    default:
        texto = "Haz introducido un valor erróneo, vuelva a intentarlo.";
        break;
}

document.write("Has sacado un " + nota);
document.write("<br>");
document.write(texto);