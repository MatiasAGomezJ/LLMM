var a = 4;

try {
    t = a + b;
    alert(t);
} catch (error) {
    alert("Ha habido un error.\n" + error);
}

function comprovar() {
    var num = document.getElementById("x").value;
    try {
        if (num == "") {
            throw "No s'ha introduït cap número";
        }
        if (isNaN(num)) {
            throw "La dada introduïda no és un número";
        }
        num = Number(num);
        if (num > 10) {
            throw "el número introduït és massa gran";
        }
        if (num < 5) {
            throw "el número introduït és massa petit";
        }
    } catch (err) {
        alert("Error: " + err + ".");
    } finally {
        document.getElementById("x").value = " ";
    }
}

