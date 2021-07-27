export const about = () => {
  const aboutCuynder = document.createElement('div');
  const infoCuynder = `
    <h1 class = "name-app">Cuynder</h1>
    <article>
      Bienvenid@ a Cuynder, en esta aplicación podrás encontrar pareja para tu
      cuyo, adoptar un cuyo, conocer datos interesantes sobre ellos y publicar
      fotografías. Además, podras interactuar con las publicaciones de otros
      usuarios y crear las tuyas. Nos alegra mucho tenerte aqui y esperamos que
      te diviertas.
    </article>`;
  aboutCuynder.innerHTML = infoCuynder;
  return aboutCuynder;
};
about();
