var dias = []
const numero_dias = 7

for (let i = 0; i < numero_dias; i++) {
    let dia = prompt("Dime el " + (i + 1) + "º dia de la semana");
    dias.push(dia);
}

dias.reverse();

for (let i = 0; i < numero_dias; i++) {
    const dia = dias[i];
    document.write(dia);
    document.write(i + 1 == dias.length ? "" : "<br>");
}