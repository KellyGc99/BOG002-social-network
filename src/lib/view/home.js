// Uso de función expresada (funcion flecha)
export const mostrarPublicaciones = (dataExistente) => {
// Cree un elemento Div para pintar la información que traiga de dataExistente
  const mostrar = document.createElement('div');
  // Creación de ciclo para iterar sobre la data existente
  for (let i = 0; i < dataExistente.length; i += 1) {
    console.log(dataExistente[i]);
    // uso de template strings para concatenar expresiones
    const publicaciones = `
        <div class="cardPost">
          <div class="user">
            <img
              class="usuario"
              src="./lib/Imagenes/usuario.png"
            />
            <span class="id_usuario">${dataExistente[i].Usuario}</span>
          </div>
        <div class="card__image-holder">
          <img class="card__image" src="${dataExistente[i].Imagen}" alt="foto cuy" />
        </div>
        <div class="card-title">
          <h2>${dataExistente[i].Titulo}</h2>
        </div>
        <div class="card-date">
          <h3>${dataExistente[i].Fecha}</h3>
        </div>
        <div class="card-description">${dataExistente[i].Descripcion}</div>
      </div>`;
    mostrar.innerHTML += publicaciones;
  }
  return mostrar;
};
