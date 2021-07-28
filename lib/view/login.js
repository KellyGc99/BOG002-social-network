export const login = () => {
  const verIngreso = document.createElement('div');
  const ingresar = `
  <form class="login">
    <input type="email" placeholder="Ingrese su correo" class="userEmail">
    <input id= "nombreUsuario" type="text" placeholder="nombre de usuario" class="userName">
    <button id="ingresar" class="enviar" type="submit">Login</button>
  </form>`;
  verIngreso.innerHTML = ingresar;
  return verIngreso;
};
login();
