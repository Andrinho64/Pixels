/* eslint-disable no-param-reassign */

/* 1 - Adicione à página o título "Paleta de Cores" e uma
paleta contendo quatro cores distintas */

/* function addHTML(elemento) {
  return document.body.appendChild(elemento);
}

// Título
const h1 = document.createElement('h1');
h1.id = 'title';
h1.innerText = 'Paleta de Cores';
document.body.appendChild(h1);

// Paleta de Cores

const paletaDeCores = document.createElement('div');
paletaDeCores.id = 'color-palette';

const amarelo = document.createElement('div');
amarelo.className = 'color';
amarelo.id = 'color-yellow';
paletaDeCores.appendChild(amarelo);

const verde = document.createElement('div');
verde.className = 'color';
verde.id = 'color-green';
paletaDeCores.appendChild(verde);

const turquesa = document.createElement('div');
turquesa.className = 'color';
turquesa.id = 'color-turquoise';
paletaDeCores.appendChild(turquesa);

const vermelho = document.createElement('div');
vermelho.className = 'color';
vermelho.id = 'color-red';
paletaDeCores.appendChild(vermelho);

addHTML(h1);
addHTML(paletaDeCores); */

/* 2 - Adicione à página um quadro contendo 25 pixels, sendo que cada elemento
do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja
delimitado por uma borda preta de 1 pixel. */

const pixelBoard = document.createElement('div');
// eslint-disable-next-line sonarjs/no-duplicate-string
pixelBoard.id = 'pixel-board';
document.body.appendChild(pixelBoard);

for (let i = 0; i < 5; i += 1) {
  for (let j = 0; j < 5; j += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
  }
}

const pixels = document.querySelectorAll('.pixel');

for (let index = 0; index < pixels.length; index += 1) {
  const pixel = pixels[index];
  pixel.addEventListener('click', () => {
    pixel.style.backgroundColor = 'black';
  });
}

/* 3 - Crie uma função para selecionar uma cor na paleta de cores */
const color = document.getElementsByClassName('color');

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('color')) {
    for (let index = 0; index < color.length; index += 1) {
      color[index].classList.remove('selected');
    }

    event.target.classList.add('selected');
  }
});

/* 4 - Crie uma função que permita preencher um pixel
do quadro com a cor selecionada na paleta de cores */

const pixels2 = document.querySelectorAll('.pixel');

for (let i = 0; i < pixels2.length; i += 1) {
  pixels2[i].addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected');
    if (selectedColor) {
      event.target.style.backgroundColor = getComputedStyle(selectedColor).backgroundColor;
    }
  });
}

/* 5 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo
a cor de todos seus pixels com branco. */

// Criação do botão
const clearButton = document.createElement('button');
clearButton.id = 'clear-board';
clearButton.innerText = 'Limpar';

// Adiciona o botão entre a paleta de cores e o quadro de pixels

const pixelBoard2 = document.getElementById('pixel-board');
document.body.insertBefore(clearButton, pixelBoard2);

// Adiciona um evento de clique ao botão
clearButton.addEventListener('click', () => {
  const pixels3 = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels3[i].style.backgroundColor = 'white';
  }
});

/* 6 - Adicione um botão para gerar cores aleatórias para a paleta de cores. */

function gerarCorAleatoria() {
  const letrasHex = '0123456789ABCDEF';
  let cor = '#';
  for (let i = 0; i < 6; i += 1) {
    cor += letrasHex[Math.floor(Math.random() * 16)];
  }
  return cor;
}

const buttonRandomColor = document.createElement('button');
buttonRandomColor.id = 'button-random-color';
buttonRandomColor.innerText = 'Cores aleatórias';

const colorPalette = document.getElementById('color-palette');
document.body.insertBefore(buttonRandomColor, colorPalette);

buttonRandomColor.addEventListener('click', () => {
  const cores = document.querySelectorAll('.color');
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].style.backgroundColor = gerarCorAleatoria();
  }
});

/* 7 - Crie uma função para salvar e recuperar o seu desenho atual no localStorage */

function salvarDesenho() {
  const pixels3 = document.querySelectorAll('.pixel');
  const desenho = {};

  for (let i = 0; i < pixels3.length; i += 1) {
    const cor = getComputedStyle(pixels3[i]).backgroundColor;
    desenho[i] = cor;

    localStorage.setItem('pixelBoard', JSON.stringify(desenho));
  }
}

function recuperarDesenho() {
  const desenhoSalvo = JSON.parse(localStorage.getItem('pixelBoard'));

  if (desenhoSalvo) {
    const pixels3 = document.querySelectorAll('.pixel');

    pixels3.forEach((pixel, index) => {
      if (desenhoSalvo[index]) {
        pixel.style.backgroundColor = desenhoSalvo[index];
      }
    });
  }
}

const pixelBoard3 = document.getElementById('pixel-board');
pixelBoard3.addEventListener('click', (event) => {
  const selectedColor = document.querySelector('.selected');
  if (selectedColor) {
    event.target.style.backgroundColor = getComputedStyle(selectedColor).backgroundColor;
    salvarDesenho();
  }
});

window.addEventListener('load', recuperarDesenho);
