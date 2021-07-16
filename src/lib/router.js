/* eslint-disable no-use-before-define */
import { menu } from './view/menu.js';
import { mostrarPublicaciones } from './view/home.js';
import { construirPublicaciones } from './view/post.js';
import { about } from './view/about.js';
import { login } from './view/login.js';
import Data from './Data/publicaciones.js';
import { despuesDeCargar } from './view/post.js';

const dataExistente = Data.post;
console.log(dataExistente);
const valor = Object.values(dataExistente);

export const view = (hash) => {
  const mainRoot = document.getElementById('Root');
  mainRoot.innerHTML = menu();

  switch (hash) {
    case '#/':
      mostrarPublicaciones(valor);
      console.log('Aqui deberian ir las publicaciones');
      break;
    case '#/post':
      mainRoot.appendChild(construirPublicaciones());
      despuesDeCargar();
      break;
    case '#/about':
      mainRoot.appendChild(about());
      break;
    case '#/login':
      mainRoot.appendChild(login());
      break;
    default:
      mainRoot.innerHTML = '<h2>No existe. Estamos trabando en ello</h2>';
  }
};
