function mostrar_login() {
  let popUp = document.getElementById("login_popup");
  popUp.style.display = "block";
}

function cerrar_login() {
  let popUp = document.getElementById("login_popup");
  popUp.style.display = "none";
}

function mostrar_descargar() {
  let popUp = document.getElementById("descargar_popup");
  popUp.style.display = "block";
}

function cerrar_descargar() {
  let popup = document.getElementById('descargar_popup');
  popup.style.display = 'none';
}

function mostrar_menu() {
  var menuDesplegable = document.querySelector('.desplegable');
  menuDesplegable.style.display = (menuDesplegable.style.display === 'block') ? 'none' : 'block';
}

