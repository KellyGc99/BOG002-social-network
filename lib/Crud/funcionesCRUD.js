export const eliminarItem = (index) => {
  const posteos = JSON.parse(localStorage.getItem('posteos'));
  posteos.splice(index, 1);
  localStorage.setItem('posteos', JSON.stringify(posteos));
  // console.log(posteos, index);
};

export const editarItem = (index) => {
  // console.log(index);
  const editarPosteos = JSON.parse(localStorage.getItem('posteos'));
  // console.log(editarPosteos, index);
  const usuarioID = document.querySelector('#usuario');
  usuarioID.value = editarPosteos[index].usuario;
  const tituloID = document.querySelector('#titulo');
  tituloID.value = editarPosteos[index].titulo;
  const descripcionID = document.querySelector('#descripcion');
  descripcionID.value = editarPosteos[index].descripcion;
  editarPosteos.splice(index, 1);
  localStorage.setItem('posteos', JSON.stringify(editarPosteos));
};
