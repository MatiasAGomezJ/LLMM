var primer_nombre = parseInt(prompt("Escriu un nombre:"));
var segon_nombre = parseInt(prompt("Escriu un altre nombre:"));

if (primer_nombre < segon_nombre) {
    document.write(primer_nombre + " < " + segon_nombre);
} else {
    document.write(primer_nombre + " > " + segon_nombre);
}