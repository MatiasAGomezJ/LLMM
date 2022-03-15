function preguntarCadenas() {

    // Primero creamos una variable que se pondra en el bucle, esta guardará...
    // ... la informacion de si las palabras son iguales
    let sonIguales = false;

    // Creamos el bucle mirando la variable anterior
    while (!sonIguales) {

        // Primero avisamos al usuario que tendra que introducir dos cadenas iguales
        alert("Ahora tendras que escribir 2 cadenas de texto, tienen que ser iguales para salir del bucle");
        // Le preguntamos por la primera ...
        let cadena1 = prompt("Escribe la primera cadena");
        // ... y por la segunda
        let cadena2 = prompt("Escribe la segunda cadena");
        
        // Si son iguales modificamos el valor de la variable `sonIguales` a true ...
        // ... por lo que saldrá del bucle, "while(!true) == while(false)"
        sonIguales = (cadena1 == cadena2) ? true : false;
        // Operador ternario
        //... = condicion ? expresion si es true : expresion si es false;
    }

    // Avisamos al usuario de que ha salido del bucle
    alert("Las cadenas son iguales");
}