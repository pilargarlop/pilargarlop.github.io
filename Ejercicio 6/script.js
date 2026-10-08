function comprobarNumero() {

    // Obtener el número del campo de entrada

    let numero = Number(document.getElementById("numero").value);

    // Comprobar si es par o impar

    if (numero % 2 === 0) {

        console.log("El número es par.");

        document.getElementById("resultado").innerHTML =
            "<h2>Resultado</h2>" +
            "<p>El número " + numero + " es par.</p>";

    } else {

        console.log("El número es impar.");

        document.getElementById("resultado").innerHTML =
            "<h2>Resultado</h2>" +
            "<p>El número " + numero + " es impar.</p>";
    }
}