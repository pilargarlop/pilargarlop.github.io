document.getElementById('btnContar').addEventListener('click', () => {
  const frase = document.getElementById('fraseInput').value.trim();
  if (!frase) {
    document.getElementById('resultado').innerHTML = 'Por favor, escribe una frase.';
    return;
  }
  const palabras = frase.split(/\s+/);
  document.getElementById('resultado').innerHTML = `La frase contiene <strong>${palabras.length}</strong> palabra(s).`;
});