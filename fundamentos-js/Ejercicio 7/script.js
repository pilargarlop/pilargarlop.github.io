function contarVocales() {

    // Obtener la palabra escrita
    let palabra = document.getElementById("palabra").value.toLowerCase();

    let vocales = "aeiou";
    let contador = 0;

    // Recorrer la palabra
    for (let i = 0; i < palabra.length; i++) {

        // Comprobar si el carácter es una vocal
        if (vocales.includes(palabra[i])) {
            contador++;
        }
    }

    // Mostrar el resultado
    console.log("Número de vocales:", contador);

    document.getElementById("resultado").innerHTML =
        "<h2>Resultado</h2>" +
        "<p>La palabra tiene " + contador + " vocales.</p>";
}