function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

document.getElementById('btnBuscar').addEventListener('click', () => {
  const limite = parseInt(document.getElementById('numLimite').value);
  if (isNaN(limite) || limite < 1) {
    document.getElementById('resultado').innerHTML = 'Introduce un número entero mayor que 0.';
    return;
  }

  const primos = [];
  for (let i = 1; i <= limite; i++) {
    if (esPrimo(i)) primos.push(i);
  }

  document.getElementById('resultado').innerHTML = `
    <p>Números primos entre 1 y ${limite}:</p>
    <p><strong>[${primos.join(', ')}]</strong></p>
  `;
});