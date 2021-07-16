const header = () => {
  const viewHeader = document.createElement('div');
  const infoHeader = `
    <div class="header">
      <div class="logo"
        <img src="/src/lib/Imagenes/logoApp.png">
      </div>
    </div>`;
  viewHeader.innerHTML = infoHeader;
  return viewHeader;
};
header();
// poner estilos al header
