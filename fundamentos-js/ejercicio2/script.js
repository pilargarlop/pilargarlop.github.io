
let numeros = [];

// Rellenar el array con 100 números aleatorios
for (let i = 0; i < 100; i++) {
    let numero = Math.floor(Math.random() * 101);
    numeros.push(numero);
}

// Mostrar todos los números usando console.table()
console.table(numeros);

// Filtrar números entre 20 y 50
let filtrados = numeros.filter(function(numero) {
    return numero >= 20 && numero <= 50;
});

// Mostrar los números filtrados
console.log("Números entre 20 y 50:");
console.table(filtrados);

// Mostrar también el resultado en la página
document.getElementById("resultado").innerHTML +=
    "<p>Se han generado 100 números aleatorios.</p>" +
    "<p>Los números entre 20 y 50 aparecen en la consola.</p>";