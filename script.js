const cacaPalavra = ['cerebro', 'olimpiadas', 'endorfina', 'neuronios', 'saude mental'];
let acertos = 0;
let palavrasEncontradas = [];

document.addEventListener("DOMContentLoaded", function () {
  const buttonSubmit = document.getElementById('buttonSubmit');
  const acertosDisplay = document.getElementById('acertosDisplay');

  buttonSubmit.addEventListener('click', function () {
    const searchNamesInput = document.getElementById('searchNames');
    let searchNames = searchNamesInput.value.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    const cacaPalavraNormalized = cacaPalavra.map(word => word.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, ""));

    if (palavrasEncontradas.includes(searchNames)) {
      alert('Palavra já encontrada!');
    } else if (cacaPalavraNormalized.includes(searchNames)) {
      alert('Ok! Palavra encontrada.');
      acertos++;
      acertosDisplay.textContent = acertos;
      palavrasEncontradas.push(searchNames);
    } else {
      alert('Não foi dessa vez :(');
    }

    searchNamesInput.value = ""; // Limpa o campo de entrada após o envio
  });
});



