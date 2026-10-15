document.getElementById('btnTransformar').addEventListener('click', () => {
  const texto = document.getElementById('textoInput').value;
  if (!texto) return;

  const mayus = texto.toUpperCase();
  const minus = texto.toLowerCase();

  document.getElementById('resultado').innerHTML = `
    <p><strong>Mayúsculas:</strong> ${mayus}</p>
    <p><strong>Minúsculas:</strong> ${minus}</p>
  `;
});