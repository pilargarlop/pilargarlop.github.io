function calcularPromedio(arr) {
  const suma = arr.reduce((acumulador, num) => acumulador + num, 0);
  return suma / arr.length;
}

document.getElementById('btnPromedio').addEventListener('click', () => {
  const notas = [8.5, 7.0, 9.2, 6.5, 10.0, 5.8];
  const promedio = calcularPromedio(notas);
  document.getElementById('resultado').innerHTML = `
    <p>Array de datos: [${notas.join(', ')}]</p>
    <p><strong>Promedio calculado:</strong> ${promedio.toFixed(2)}</p>
  `;
});