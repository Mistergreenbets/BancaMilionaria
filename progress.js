// Suponha que você tenha uma função que atualiza o progresso, por exemplo, quando algo é carregado.
function updateProgress(value) {
  const progressBar = document.querySelector('.progress-');
  progressBar.style.width = value + '%';
  const progressValue = document.querySelector('.progress-value');
  progressValue.textContent = value + '%';
}

// Exemplo de uso:
// Atualize o progresso com um valor entre 0 e 100 para refletir o progresso real.
updateProgress(95); // Isso definirá a barra de progresso em 95% com animação.
