/* ============================================================
   EJERCICIO 9 - Revertir una cadena de texto
   ============================================================ */

function invertirCadena(cadena) {
  let letras = cadena.split("");
  letras.reverse();
  let invertida = letras.join("");
  return invertida;
}

function invertirCadenaCorta(cadena) {
  return cadena.split("").reverse().join("");
}

function procesar(evento) {
  evento.preventDefault();

  const campo = document.getElementById("campo-texto");
  let texto = campo.value;

  if (texto.trim() === "") {
    mostrarResultado("Error: escribe una cadena de texto primero.");
    return;
  }

  let resultado = invertirCadena(texto);

  // Mostramos en la consola del navegador
  console.log("==== Revertir cadena ====");
  console.log("Original :", texto);
  console.log("split(''):", texto.split(""));
  console.log("reverse():", texto.split("").reverse());
  console.log("join('') :", resultado);
  console.log("Versión en una línea:", invertirCadenaCorta(texto));

  // Mostramos el resultado en la capa HTML
  mostrarResultado(
    "Original:  " + texto + "\n" +
    "Invertida: " + resultado + "\n" +
    "--------------------------------\n" +
    'split("") + reverse() + join("") = "' + resultado + '"'
  );
}

/* ------------------------------------------------------------
   EVENTOS (DOM) Y FUNCIONES AUXILIARES
   ------------------------------------------------------------ */

document.getElementById("form-invertir").addEventListener("submit", procesar);

document.getElementById("btn-ejemplo").addEventListener("click", () => {
  document.getElementById("campo-texto").value = "JavaScript";
  procesar(new Event("submit"));
});

document.getElementById("btn-limpiar").addEventListener("click", () => {
  document.getElementById("campo-texto").value = "";
  limpiarConsola();
  mostrarResultado('Escribe una cadena y pulsa "Invertir cadena".');
});

function mostrarResultado(mensaje) {
  const capaResultado = document.getElementById("resultado");
  if (capaResultado) {
    capaResultado.innerText = mensaje;
  }
}

function limpiarConsola() {
  const capaConsola = document.getElementById("consola");
  if (capaConsola) {
    capaConsola.innerText = "";
  }
}