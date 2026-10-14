// Pedir dos números al usuario

let numero1 = Number(prompt("Introduce el primer número:"));
let numero2 = Number(prompt("Introduce el segundo número:"));

// Calcular la suma

let suma = numero1 + numero2;

// Mostrar el resultado en la consola

console.log("La suma es:", suma);

// Mostrar también el resultado en la página

document.getElementById("resultado").innerHTML =
    "<h2>Resultado</h2>" +
    "<p>" + numero1 + " + " + numero2 + " = " + suma + "</p>";