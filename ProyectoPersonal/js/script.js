function mostrarPopUp() {
  let popUp = document.getElementById("miPopUp");
  popUp.style.display = "block";
}

function cerrarPopUp() {
  let popUp = document.getElementById("miPopUp");
  popUp.style.display = "none";
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