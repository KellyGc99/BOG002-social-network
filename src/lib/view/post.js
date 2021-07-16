export const construirPublicaciones = () => {
  const crearPost = document.createElement('div');
  const enviarPost = `
  <form id="formularioPost">
    <input type="text" id="usuario" placeholder="Usuario" /><br>
    <input type="text" id="titulo" placeholder= "Titulo"/><br>
    <input type="text" id="fecha" placeholder= "Fecha" /><br>
    <input type="text" id="descripcion" placeholder="Escribe un mensaje"/><br>
    <button type="submit"><img src="https://img.icons8.com/material-rounded/24/000000/checkmark--v1.png"/></button>
    <button type="button" id="editar"><img src="https://img.icons8.com/material-rounded/24/000000/edit--v1.png"/></button>
    <button type="button" id="eliminar"><img src="https://img.icons8.com/material-rounded/24/000000/delete-forever.png"/></button>
  </form>
  <section id="postNew"></section>
  `;
  crearPost.innerHTML = enviarPost;
  return crearPost;
};
construirPublicaciones();

export const despuesDeCargar = () => {
  const formulario = document.querySelector('#formularioPost');
  const nuevoPost = document.getElementById('postNew');
  let arrayPost = [];

  const crearItem = (usuario, titulo, fecha, descripcion, array) => {
    console.log(array);
    const item = {
      usuario1: usuario,
      titulo1: titulo,
      fecha1: fecha,
      descripción1: descripcion,
    };
    array.push(item);
    localStorage.setItem('posteos', JSON.stringify(array));
  };

  const pintarPost = () => {
    nuevoPost.innerHTML = '';
    arrayPost = JSON.parse(localStorage.getItem('posteos'));
  };
  if (arrayPost === null) {
    arrayPost = [];
  } else {
    arrayPost.forEach((element) => {
      nuevoPost.innherHTML += `
      <div>
        <h1>${element.usuario}</h1><br>
        <h2>${element.titulo}</h2><br>
        <h3>${element.fecha}</h3><br>
        <p>${element.descripcion}</p>
      </div>`;
    });
  }

  // evento para enviar el formulario

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const usuarioID = document.querySelector('#usuario').value;
    const tituloID = document.querySelector('#titulo').value;
    const fechaID = document.querySelector('#fecha').value;
    const descripcionID = document.querySelector('#descripcion').value;

    crearItem(usuarioID, tituloID, fechaID, descripcionID, arrayPost);
    document.addEventListener('DOMContentLoad', pintarPost);
    formulario.reset();
  });
};
