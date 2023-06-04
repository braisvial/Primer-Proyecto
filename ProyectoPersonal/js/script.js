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

function togglePopup() {
  var popup = document.getElementById("popup");
  popup.classList.toggle("active");
}
function mostrar_popup_juego() {
  let caratula = elemento.querySelector(".caratula img");
  let titulo = elemento.querySelector(".texto .titulo h2");
  let precio = elemento.querySelector(".texto .precio h4");

  // Actualizar el contenido del pop-up con los datos del juego
  let popupImage = document.getElementById("imagen_juego");
  let popupTitle = document.getElementById("titulo_juego");
  let popupPrice = document.getElementById("precio_juego");

  popupImage.src = caratula.src;
  popupTitle.textContent = titulo.textContent;
  popupPrice.textContent = precio.textContent;

  togglePopup();
}