document.getElementById('btnGenerar').addEventListener('click', () => {
  const numeros = [];
  const conteo = {};

  for (let i = 0; i < 100; i++) {
    const num = Math.floor(Math.random() * 20) + 1;
    numeros.push(num);
    conteo[num] = (conteo[num] || 0) + 1;
  }

  const aparecidos = Object.keys(conteo).length;
  let html = `<p><strong>Números distintos que aparecieron:</strong> ${aparecidos} de 20</p><ul>`;
  
  for (const [num, veces] of Object.entries(conteo)) {
    html += `<li>El número ${num} apareció ${veces} vez/veces.</li>`;
  }
  html += '</ul>';

  document.getElementById('resultado').innerHTML = html;
});