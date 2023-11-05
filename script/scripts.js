// Fechar o menu após clicar em um link
const menu = document.getElementById('menu');
const links = menu.getElementsByTagName('a');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    menu.style.display = 'none';
  });
      }
