function calcDescuento() {
    let formulario = document.getElementById("formularioDescuento");
    let marcaCoche = formulario.marca.value;
    let precio = formulario.precio.value;

    let descuento = 1.0;
    switch (marcaCoche) {
        case "ford":
            descuento -= 0.1;
            break;
        case "seat":
            descuento -= 0.08;
            break;
        case "citroen":
            descuento -= 0.06;
            break;
        case "audi":
            descuento -= 0.04;
            break;
        default:
            descuento -= 0.0;
            break;
    }

    alert("El descuento será de un " + Math.round((1 - descuento) * 100) + "%");

    let precioFinal = precio * descuento;
    
    alert("El precio final del coche es " + precioFinal + " €");
}
