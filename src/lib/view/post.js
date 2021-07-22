import {eliminarItem, editarItem } from '../Crud/funcionesCRUD.js';

export const construirPublicaciones = () => {
  const crearPost = document.createElement('div');
  const enviarPost = `
  <form id="formularioPost">
    <input type="text" id="usuario" placeholder="Usuario" /><br>
    <input type="text" id="titulo" placeholder= "Titulo"/><br>
    <input type="text" id="descripcion" placeholder="Escribe un mensaje"/><br>
    <button type="submit"><img src="https://img.icons8.com/material-rounded/24/000000/checkmark--v1.png"/></button>
  </form>
  <section id="postNew">
    <h1>existo</h1>
  </section>
  `;
  crearPost.innerHTML = enviarPost;
  return crearPost;
};
construirPublicaciones();

export const despuesDeCargar = () => {
  const formulario = document.querySelector('#formularioPost');
  const nuevoPost = document.getElementById('postNew');
  // un array vacio que guardará la información que ingrese el usuario
  let arrayPost = [];
  if (localStorage.getItem('posteos') === null) {
    // JSON.stringify para convertir los datos del array en una cadena
    localStorage.setItem('posteos', JSON.stringify(arrayPost));
  }

  const crearItem = (usuario, titulo, descripcion) => {
    const datos = JSON.parse(localStorage.getItem('posteos'));
    console.log(datos);
    const item = {
      usuario,
      titulo,
      descripcion,
    };
    datos.unshift(item);
    localStorage.setItem('posteos', JSON.stringify(datos));
    // localStorage.setItem(titulo, JSON.stringify(item));
  };

  const pintarPost = () => {
    nuevoPost.innerHTML = '';
    arrayPost = JSON.parse(localStorage.getItem('posteos'));
    arrayPost.forEach((element, index) => {
      // console.log(element, index);
      nuevoPost.innerHTML += `
      <div>
        <h1>${element.usuario}</h1><br>
        <h2>${element.titulo}</h2><br>
        <p>${element.descripcion}</p>
        <button type="button"><img src="https://img.icons8.com/material-rounded/24/000000/edit--v1.png" class ="editar" data-index= ${index} /></button>
        <button type="button"><img src="https://img.icons8.com/material-rounded/24/000000/delete-forever.png" class ="eliminar" data-index = ${index} /></button>
      </div>`;
    });
  };
  pintarPost();

  const pintarConsola = () => {
    // buscando botones para editar
    document.addEventListener('click', (e) => {
      if (e.target.matches('.editar')) {
        const indexPost = e.target.dataset.index;
        editarItem(indexPost);
      }
    });
    // buscando botones para eliminar
    document.addEventListener('click', (e) => {
      if (e.target.matches('.eliminar')) {
        const indexPost = e.target.dataset.index;
        eliminarItem(indexPost);
        pintarPost();
      }
    });
  };
  pintarConsola();

  // evento para enviar el formulario

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const usuarioID = document.querySelector('#usuario').value;
    const tituloID = document.querySelector('#titulo').value;
    const descripcionID = document.querySelector('#descripcion').value;

    crearItem(usuarioID, tituloID, descripcionID);
    formulario.reset();
    pintarPost();
  });
};
