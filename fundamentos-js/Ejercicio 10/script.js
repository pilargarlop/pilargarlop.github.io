function encontrarMayor(arr) {
  return Math.max(...arr);
}

document.getElementById('btnCalcular').addEventListener('click', () => {
  const numeros = [14, 52, 99, 3, 41, 88, 23, 105, 7];
  const mayor = encontrarMayor(numeros);
  document.getElementById('resultado').innerHTML = `
    <p>Array analizado: [${numeros.join(', ')}]</p>
    <p><strong>El número más grande es:</strong> ${mayor}</p>
  `;
});