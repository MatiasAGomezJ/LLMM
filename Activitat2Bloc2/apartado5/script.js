var primer_nombre = parseInt(prompt("Escriu un nombre:"));
var segon_nombre = parseInt(prompt("Escriu un altre nombre:"));

function biggest(x, y) {
    let texte = x + " es mes gran que " + y;
    if (x < y) {
        texte = y + " es mes gran que " + x;
    }
    return texte;
}

document.write(biggest(primer_nombre, segon_nombre));