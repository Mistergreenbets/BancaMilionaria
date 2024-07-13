const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://mistergreenbets.github.io/BancaMilionaria/json/meu.json);
xhr.onload = () => {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    // Use os dados do JSON
  } else {
    console.error('Erro ao carregar o arquivo JSON:', xhr.statusText);
  }
};
xhr.send();
