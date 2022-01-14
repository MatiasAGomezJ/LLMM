while(true) {
    input_usuario = prompt('Escribe un numero cualquiera, si quieres parar escribe "stop"');

    var texto = "El numero " + input_usuario + " es ";

    if (input_usuario.toLowerCase() == "stop") {
        break;
    };

    switch (true) {    
        case input_usuario % 2 == 0:
            texto += "par";
            break;
            
        case input_usuario % 2 >= 0:
        case input_usuario % 2 <= 0:
            texto += "impar";
            break;
                
        default:
            texto = input_usuario + " no es valido"
            break;
    }

    document.write(texto)
    document.write(".<br>")
}