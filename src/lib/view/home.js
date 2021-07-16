// const mostrarPublicaciones = (imagen, Fecha, Usuario, Titulo, Descripcion) => {
// const publicaciones
// };

export function mostrarPublicaciones(dataExistente) {
  for (let i = 0; i < dataExistente.length; i++) {
    const mostrar = document.createElement('div');
    console.log(dataExistente[i]);
    /* const publicaciones = `
      <div class="cardPost">
        <div class="user">
         <img
           class="usuario"
            src="Imagenes/usuario.png"
          />
         <span class="id_usuario">${Usuario}</span>
        </div>
        <div class="card__image-holder">
         <img class="card__image" src="${Imagen}" alt="foto cuy" />
         </div>
        <div class="card-title">
          <h2>${Titulo}</h2>
        </div>
        <div class="card-date">
          <h3>${Fecha}</h3>
        </div>
        <div class="card-description">${Descripcion}</div>
      </div>`;
    mostrar.innerHTML = publicaciones;
    return mostrar;* */
  }
}
