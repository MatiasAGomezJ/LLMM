var numeros = [];

for (let i = 0; i < 10; i++) {
    let numero = prompt("Introduze el " + (i + 1) + "º numero: ");
    numeros.push(parseInt(numero));
}

numeros.sort(function (a, b) {
    return a - b;
});

alert(numeros);
