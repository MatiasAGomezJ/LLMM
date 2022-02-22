// Valores del usuario
var nom_usuari = prompt("Escrui el teu nom:");
var edat_usuari = prompt("Escrui la teva edat:");
var estatura_usuario = prompt("Escrui la teva estatura:");
var estat_civil_usuari = prompt("Escrui el teu estat civil:");

// El objeto del usuario
var individuo = {
    nom: nom_usuari,
    edat: edat_usuari,
    estatura: estatura_usuario,
    estat_civil: estat_civil_usuari
};

// Guardamos en una lista las llaves del objeto
individuo_llaves = Object.keys(individuo);

// Por cada una de los valores en la lista
individuo_llaves.forEach(llave => {
    // Guardamos el valor al que corresponde esa llave
    let valor = individuo[llave];
    
    // Pasamos por la funcion la llave,...
    // ... explicado lo que hace en la funcion
    llave_mod = capitalize_only_first_letter(llave);

    // Convertimos los barras baja en espacios
    llave_mod = llave_mod.replace("_", " ");

    // Pasamos por la funcion la valor,...
    // ... explicado lo que hace en la funcion
    valor_mod = capitalize_only_first_letter(valor);

    // Escribimos en el documento
    document.write(llave_mod + ": " + valor_mod);

    // Creamos un separador
    let separador = ", ";

    // Si el "estat_civil" es igual a "solter"...
    if(individuo["estat_civil"].toLowerCase() == "solter"){
        // ...entonces es separador sera un salto de linea...
        separador = "<br>";
    } else if (individuo_llaves.at(-1) == llave) {
        // ...si no es "solter" y ademas estamos en en ultimo elemento,...
        // ...el separador estará vacio, ya que no hay nada que separar
        separador = ""
    }
    
    // Escribe es separador
    document.write(separador);
});

// Funcion la cual devuelve una string con solo...
// ... la primera letra en mayuscula y el resto en minuscula
function capitalize_only_first_letter(string) {
    
    // Pasamos todo el string a minuscula
    string = string.toLowerCase();

    // Pillamos la primera letra del string, la pasamos a mayuscula...
    // ...y la guardamos en una variable
    first_letter_from_string = string.charAt(0).toUpperCase();

    // Guardamos en otra variable la palabra sin la primera letra
    string_without_first_letter = string.slice(1);

    // Devolvemos la letra en mayuscula concatenada a la palabra sin la primera letra
    return first_letter_from_string + string_without_first_letter;
};