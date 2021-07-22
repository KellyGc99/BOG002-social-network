export const eliminarItem = (index) => {
  const posteos = JSON.parse(localStorage.getItem('posteos'));
  posteos.splice(index, 1);
  localStorage.setItem('posteos', JSON.stringify(posteos));
  // console.log(posteos, index);
};

export const editarItem = (index) => {
  console.log(index);
};
