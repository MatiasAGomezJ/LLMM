function func1() {
    alert("Aquest es el meu primer script");
    document.write("Aquest es el meu primer script");
}

function func2() {
    var nom_home = prompt("Escriu el nom del home");
    var nom_dona = prompt("Escriu el nom de la dona");

    alert(nom_home + " & " + nom_dona);
}

function func3() {
    var nom_usuari = prompt("Hola, el teu nom és:");

    document.write("El teu nom es " + nom_usuari);
}

function func4() {
    var primer_nombre = parseInt(prompt("Escriu un nombre:"));
    var segon_nombre = parseInt(prompt("Escriu un altre nombre:"));

    function biggest(x, y) {
        let texte;
        if (x < y) {
            texte = y + " es mes gran que " + x;
        } else {
            texte = x + " es mes gran que " + y;
        }
        return texte;
    }

    document.write(biggest(primer_nombre, segon_nombre));
}

function func5() {
    var primer_nombre = parseInt(prompt("Escriu un nombre:"));
    var segon_nombre = parseInt(prompt("Escriu un altre nombre:"));

    function sum_of_params(x, y) {
        let suma_dels_params = x + y;
        let texte = x + " més " + y + " és igual a " + suma_dels_params;
        return texte;
    }

    document.write(sum_of_params(primer_nombre, segon_nombre));
}

function func6() {
    var nom_usuari = prompt("Escrui el teu nom:");
    var edat_usuari = prompt("Escrui la teva edat:");
    var estatura_usuario = prompt("Escrui la teva estatura:");
    var estat_civil_usuari = prompt("Escrui el teu estat civil:");

    var individuo = {
        nom: nom_usuari,
        edat: edat_usuari,
        estatura: estatura_usuario,
        estat_civil: estat_civil_usuari
    };

    individuo_llaves = Object.keys(individuo);

    individuo_llaves.forEach(llave => {
        let valor = individuo[llave];
        llave_mod = capitalize_only_first_letter(llave);
        llave_mod = llave_mod.replace("_", " ");
        valor_mod = capitalize_only_first_letter(valor);
        document.write(llave_mod + ": " + valor_mod);

        let separador = ", ";
        if(individuo["estat_civil"].toLowerCase() == "solter"){
            separador = "<br>";
        } else if (individuo_llaves.at(-1) == llave) {
            separador = ""
        }
        document.write(separador);
    });

    function capitalize_only_first_letter(string) {
        string = string.toLowerCase();
        first_letter_from_string = string.charAt(0).toUpperCase();
        string_without_first_letter = string.slice(1);
        return first_letter_from_string + string_without_first_letter;
    };
}

function func7() {
    var palabra = prompt("Escribe algo:")

    var longitud_palabra = palabra.length

    var texto = '"' + palabra + '" contiene ' + longitud_palabra + " carácter"

    if (longitud_palabra == 0) {
        texto = "No has escrito nada"
    }
    if (longitud_palabra > 1) {
        texto += "es"
    }

    document.write(texto)
}

function func8() {
    meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ]
    
    meses.forEach(mes => {
        document.write("<h3>" + mes + "<h3>")
    });
}

function func9() {
    var nota = prompt("Escribe la nota que has sacado:[0/10]");

    var texto = "???";
    switch (nota) {
        case "0":
            texto = "Un cero pero con orgullo, que ceros hay pocos";
            break;

        case "1":
            texto = "Al menos lo has intentado";
            break;

        case "2":
            texto = "Haber estudiao";
            break;

        case "3":
            texto = "Por debajo del cuatro no hace media, así que pa' junio chavalote";
            break;

        case "4":
            texto = "Tan cerca y a la vez tan lejos";
            break;

        case "5":
            texto = "Lo justo y necesario";
            break;

        case "6":
            texto = "Esta bien, pero, bueno, esta bien";
            break;

        case "7":
            texto = "Esta en la franja del bien y el notable, a partir de aquí puedes sentirte orgulloso";
            break;

        case "8":
            texto = "Nah, de locos";
            break;

        case "9":
            texto = "Tan cerca y a la vez tan lejos";
            break;

        case "10":
            texto = "Has copiado fijo";
            break;

        default:
            texto = "Haz introducido un valor erróneo, vuelva a intentarlo.";
            break;
    }

    document.write("Has sacado un " + nota);
    document.write("<br>");
    document.write(texto);
}

function func10() {
    while(true) {
        input_usuario = prompt('Escribe un numero cualquiera, si quieres parar escribe "stop"');
    
        var texto = "El numero " + input_usuario + " es ";
    
        if (input_usuario.toLowerCase() == "stop") {
            break;
        };
    
        switch (true) {    
            case input_usuario == "":
            default:
                texto = '"' + input_usuario + '" no es valido';
                break;
                
            case input_usuario % 2 == 0:
                texto += "par";
                break;
                
            case input_usuario % 2 >= 0:
            case input_usuario % 2 <= 0:
                texto += "impar";
                break;
        }
    
        document.write(texto)
        document.write(".<br>")
    }
}