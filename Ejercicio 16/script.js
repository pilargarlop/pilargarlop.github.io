function celsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

document.getElementById('btnConvertir').addEventListener('click', () => {
  const celsius = parseFloat(document.getElementById('celsiusInput').value);
  if (isNaN(celsius)) {
    document.getElementById('resultado').innerHTML = 'Por favor, introduce una temperatura válida.';
    return;
  }
  const fahrenheit = celsiusAFahrenheit(celsius);
  document.getElementById('resultado').innerHTML = `<strong>${celsius} ºC</strong> equivalen a <strong>${fahrenheit.toFixed(2)} ºF</strong>`;
});