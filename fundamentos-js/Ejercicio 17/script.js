document.getElementById('btnOrdenar').addEventListener('click', () => {
  const desordenados = [45, 12, 85, 32, 89, 39, 69, 5, 2];
  const ordenados = [...desordenados].sort((a, b) => a - b);
  
  document.getElementById('resultado').innerHTML = `
    <p>Original: [${desordenados.join(', ')}]</p>
    <p><strong>Ordenado (menor a mayor):</strong> [${ordenados.join(', ')}]</p>
  `;
});