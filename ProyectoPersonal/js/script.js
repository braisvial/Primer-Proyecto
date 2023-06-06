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

// function togglePopup() {
//   var popup = document.getElementById("popup");
//   popup.classList.toggle("active");
// }
// function mostrar_popup_juego() {
//   let caratula = elemento.querySelector(".caratula img");
//   let titulo = elemento.querySelector(".texto .titulo h2");
//   let precio = elemento.querySelector(".texto .precio h4");

//   // Actualizar el contenido del pop-up con los datos del juego
//   let popupImage = document.getElementById("imagen_juego");
//   let popupTitle = document.getElementById("titulo_juego");
//   let popupPrice = document.getElementById("precio_juego");

//   popupImage.src = caratula.src;
//   popupTitle.textContent = titulo.textContent;
//   popupPrice.textContent = precio.textContent;

//   togglePopup();
// }

//-----Buscador tienda-----\\

const buscador = document.querySelector("#buscador")

buscador.addEventListener("input", buscar(evento))

function buscar(evento) {
  let titulo = document.querySelectorAll("H2")
  let titulo_buscador = evento.target.value

  let titulo_minus = trim(titulo.toLowerCase())
  let titulo_buscador_minus = trim(titulo_buscador.toLowerCase())

  let i = 0
  let final = false

  elementos = titulo.length
  do {
    if (titulo_minus[i] === titulo_buscador_minus){
        //Almacenar objeto en array para luego mostrar 
        i++
    }
    else{
      if (i === elementos -1){
        final = true
        //Mostrar notificación: "Objeto no encontrado"
        i ++
      }
    }
  } while (!final)

  //Mostrar array con los objetos encontrados mediante buscador
}
