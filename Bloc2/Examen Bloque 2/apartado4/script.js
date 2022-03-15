function calcular() {
    // Primero preguntamos al usuario por un numero
    let numero = parseInt(prompt("Escribe un numero mayor que cero: "));

    // Comprobamos que sea mayor que cero
    if (numero <= 0) {
        // Si no lo es le avisamos y salimos del programa
        alert("El numero que has escrito es menor o igual a cero");
        return;
    }

    // Creamos dos variable con las que vamos a trabajar
    let sum = 0;
    let mult = 1;

    // Hacemos un for con el numero como el indice
    for (let i = numero; i > 0; i--) {
        // En cada ciclo:
        
        // Sumamos el numero
        sum = sum + i;

        // Multiplicamos el numero
        mult = mult * i;

        // En el siguiente ciclo el numero se reducirá en 1 y lo hará otra vez ...
        // ... hasta que el indice llegue a 0
    }

    // Mostramos por pantalla las variables
    alert("Suma: " + sum + "\nMultiplicacion: " + mult);
}