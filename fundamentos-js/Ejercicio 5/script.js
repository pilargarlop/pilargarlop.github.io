// Pedir un número al usuario

let numero = Number(prompt("Introduce un número:"));

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