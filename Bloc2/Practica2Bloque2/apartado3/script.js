function checkEdad() {
    let formulario = document.getElementById("form");
    let edad = formulario.edad.value;

    // Operador ternario
    // ... = condicion ? expresion si true : expresion si false;
    let texto = edad >= 16 ? "Puedes acceder a http://www.caib.es" : "Eres demasiado joven para acceder al portal de FP";

    alert(texto);
}
