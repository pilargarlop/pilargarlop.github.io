function palabraMasLarga(frase) {
  const palabras = frase.split(/\s+/);
  let masLarga = '';
  for (let palabra of palabras) {
    if (palabra.length > masLarga.length) {
      masLarga = palabra;
    }
  }
  return masLarga;
}

document.getElementById('btnBuscar').addEventListener('click', () => {
  const texto = document.getElementById('fraseInput').value.trim();
  if (!texto) return;
  
  const resultado = palabraMasLarga(texto);
  document.getElementById('resultado').innerHTML = `La palabra más larga es: <strong>"${resultado}"</strong> (${resultado.length} caracteres).`;
});