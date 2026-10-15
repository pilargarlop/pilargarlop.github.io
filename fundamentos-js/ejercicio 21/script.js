function filtrarMayores(arr, limite) {
  return arr.filter(num => num > limite);
}

document.getElementById('btnFiltrar').addEventListener('click', () => {
  const umbral = parseFloat(document.getElementById('umbralInput').value);
  const numeros = [5, 12, 8, 130, 44, 3, 27, 18, 90];
  
  if (isNaN(umbral)) return;

  const resultado = filtrarMayores(numeros, umbral);
  document.getElementById('resultado').innerHTML = `
    <p>Array completo: [${numeros.join(', ')}]</p>
    <p>Filtro aplicado: Mayores que <strong>${umbral}</strong></p>
    <p><strong>Resultado:</strong> [${resultado.join(', ')}]</p>
  `;
});
