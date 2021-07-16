import { menu } from './lib/view/menu.js';

// eslint-disable-next-line import/named
import { view } from './lib/router.js';

// const d = document;
// d.addEventListener('DOMContentLoaded', hola);
// myFunction();
// document.getElementById('Root').innerHTML = menu();
const init = () => {
  document.getElementById('Root').innerHTML = menu();
  window.addEventListener('hashchange', () => {
    console.log(window.location.hash);
    view(window.location.hash);
  });
};

window.addEventListener('load', init);
