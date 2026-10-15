function obtenerPares(arr) {
  return arr.filter(num => num % 2 === 0);
}

document.getElementById('btnFiltrar').addEventListener('click', () => {
  const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 22, 33, 40];
  const pares = obtenerPares(datos);
  document.getElementById('resultado').innerHTML = `
    <p>Array original: [${datos.join(', ')}]</p>
    <p><strong>Números pares:</strong> [${pares.join(', ')}]</p>
  `;
});