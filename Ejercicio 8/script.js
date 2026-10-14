// Función que genera un número aleatorio
// entre un mínimo y un máximo

function azar(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Mostrar el número generado

function mostrarNumero() {

    let numero = azar(-5, 10);

    console.log("Número aleatorio:", numero);

    document.getElementById("resultado").innerHTML =
        "<h2>Resultado</h2>" +
        "<p>El número generado es: " + numero + "</p>";
}