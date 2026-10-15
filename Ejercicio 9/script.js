function invertirCadena(cadena) {
  return cadena.split('').reverse().join('');
}

document.getElementById('btnInvertir').addEventListener('click', () => {
  const texto = document.getElementById('cadenaInput').value;
  const textoInvertido = invertirCadena(texto);
  document.getElementById('resultado').innerHTML = `<strong>Texto invertido:</strong> ${textoInvertido}`;
});