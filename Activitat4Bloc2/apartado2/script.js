function changer() {
    let input_usuario = prompt("Escribe el texto que quieras: ");

    let h3 = document.getElementById("h3");

    h3.innerHTML = input_usuario;
}