function esPalindromo(palabra) {
  const limpia = palabra.toLowerCase().replace(/\s+/g, '');
  const invertida = limpia.split('').reverse().join('');
  return limpia === invertida;
}

document.getElementById('btnVerificar').addEventListener('click', () => {
  const texto = document.getElementById('palabraInput').value.trim();
  if (!texto) return;
  
  const resultado = esPalindromo(texto);
  document.getElementById('resultado').innerHTML = resultado
    ? `<strong>"${texto}"</strong> SÍ es un palíndromo.`
    : `<strong>"${texto}"</strong> NO es un palíndromo.`;
});