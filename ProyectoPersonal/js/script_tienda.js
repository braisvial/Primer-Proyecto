//-----ELEMENTOS HTML-----\\

const buscador = document.querySelector("#buscador")                                // Elemento Buscador
const boton_volver_arriba = document.querySelector(".volver_arriba")                // Elemento Volver Arriba
const div_volver_arriba = document.querySelector(".bloque_volver_arriba")           // Div Volver Arriba
const boton_ver_mas = document.querySelector('.ver_mas');                           // Elemento Ver Más                     
const boton_volver = document.querySelector(".volver")                              // Elemento Volver

//-----BUSCADOR TIENDA-----\\

buscador.addEventListener("keydown", function (evento) {                            // Evento del input que hace la función buscar cuando le doy al enter
  if (evento.key === "Enter") {
    buscar(evento);                                                             // Llamar a la función de buscador
    buscador.value = "";                                                         // Vaciar el contenido del input
  }
})

function buscar(evento) {                                           //Funcion buscador
  const catalogo = document.querySelector(".catalogo")
  const juegos = catalogo.querySelectorAll(".juego")
  let titulo = catalogo.querySelectorAll("H2")                      //Seleccionar todos los h2
  let titulo_buscador = evento.target.value.toLowerCase().trim()    //Modificar el valor del input a minúsculas y sin espacios

  let no_encontrado = 0;                                                          // Variable de títulos no encontrados inicializada a 0

  for (let i = 0; i < juegos.length; i++) {                                // Recorrer todos los h2

    let titulo_actual = titulo[i].textContent.toLowerCase().trim()              // Guardar el nueva variable el valor del h2 en minúsculas y sin espacios

    if (titulo_actual.includes(titulo_buscador) && titulo_buscador != "") {     // Si el input corresponde h2 actual...
      juegos[i].style.display = 'flex';                                // Mostrar los divs que cumplen la condición

    }
    else {                                                                      // Si el input no corresponde al h2 actual...
      juegos[i].style.display = 'none';                                // No mostrar el div con el h2 actual
      no_encontrado++                                                         // Aumentar el contador de títulos no encontrados
    }
  }

  if (no_encontrado === juegos.length || titulo_buscador === "") {         // Si no se ha encontrado ningún titulo o el input está vacío...
    for (let i = 0; i < 9; i++) {
      juegos[i].style.display = 'flex';                                // Mostrar los  5 primeros divs como si no hubiera pasado nada
    }
    mostrar_notificacion("No se ha encontrado el juego");                     // Notificar que no se ha encontrado título
    ver_mas.style.display = "flex";
    boton_volver.style.display = "none";
  }
  else {
    boton_volver_arriba.style.display = "none"                                  // Ocultar el botón para volver arriba
    boton_ver_mas.style.display = "none"                                        // Ocultar el botón Ver más
    boton_volver.style.display = "flex"                                         // Mostrar el botón Volver
  }
}

function mostrar_notificacion(mensaje) {
  const notificacion = document.createElement("div");
  notificacion.textContent = mensaje;
  notificacion.classList.add("notificacion");

  buscador.value = "";
  document.body.appendChild(notificacion);

  // Eliminar la notificación después de 3 segundos
  setTimeout(() => {
    notificacion.remove();
  }, 2900);
}

//-----VOLVER ARRIBA-----\\

function volver_arriba() {                                                          // Pulsar el botón volver arriba
  window.scrollTo({
    top: 0,                                                                     // Subir ventana arriba
    behavior: "smooth"                                                          // Desplazamiento suave
  })
}

//-----VOLVER-----\\

function volver() {                                                                 // Pulsar el botón volver
  location.href = "tienda.html"                                                 // Volver a la pagina de noticias original
}

//-----VER MÁS-----\\

window.addEventListener('DOMContentLoaded', function () {
  let catalogo = document.querySelector('.catalogo');                             // Seleccionar el elemento padre catalogo
  let juegos = catalogo.querySelectorAll('.juego');                      // Selecionar todas los juegos



  let juegos_visibles = 9;                                                      // Número inicial de divs visibles
  let juegos_por_clic = 9;                                                      // Número de divs a mostrar por clic en "ver_más"
  let indice = 9;                                                                 // Índice del primer div oculto
  let numero_divs = juegos.length;                                         // Número de divs totales

  for (let i = 0; i < juegos.length; i++) {                                // Ocultar todos los div "juego"
    juegos[i].style.display = 'none';
  }

  for (let i = 0; i < juegos_visibles; i++) {                                   // Mostrar los primeros 5 divs por defecto
    juegos[i].style.display = 'flex';
  }

  function mostrar_mas_noticias() {                                               // Función para mostrar los siguientes divs al hacer clic en "Ver más"

    div_volver_arriba.style.display = "flex"                                  //Mostrar el botón Volver arriba
    boton_volver_arriba.style.display = "flex"

    for (let i = 0; i < juegos_por_clic; i++) {
      if (juegos[i + indice]) {                                        // Se asegura de que hay un div que mostrar
        juegos[i + indice].style.display = 'flex';                   // Muestra el div
      }
    }
    indice += juegos_por_clic;                                                // Aumentar el índice en 5 para el próximo bloque de 5 divs

    if (indice >= numero_divs) {                                                // Si se llega al último div...
      boton_ver_mas.style.display = 'none';                                   // Ocultar el botón si se han mostrado todos los divs
    }
  }

  boton_ver_mas.addEventListener('click', mostrar_mas_noticias);                  // Agregar el evento click al botón "Ver más"
});


//-----FILTROS-----\\

boton_filtros = document.querySelector("#boton_filtros")

filtro_accion = document.querySelector("#genero_accion")
let valor_accion = ""

filtro_accion.addEventListener('click', function () {
  if (filtro_accion.checked) {
    filtro_rpg.checked = false
    filtro_aventura.checked = false
    filtro_estrategia.checked = false
    filtro_disparos.checked = false
    filtro_plataformas.checked = false
    filtro_hands.checked = false
    filtro_lucha.checked = false
    filtro_carreras.checked = false
    valor_accion = "accion"
  } else {
    valor_accion = ""
  }
})

filtro_rpg = document.querySelector("#genero_rpg")
let valor_rpg = ""

filtro_rpg.addEventListener('click', function () {
  if (filtro_rpg.checked) {
    filtro_accion.checked = false

    filtro_aventura.checked = false
    filtro_estrategia.checked = false
    filtro_disparos.checked = false
    filtro_plataformas.checked = false
    filtro_hands.checked = false
    filtro_lucha.checked = false
    filtro_carreras.checked = false
    valor_rpg = "rpg"
  } else {
    valor_rpg = ""
  }
})

filtro_aventura = document.querySelector("#genero_aventura")
let valor_aventura = ""

filtro_aventura.addEventListener('click', function () {
  if (filtro_aventura.checked) {
    filtro_accion.checked = false
    filtro_rpg.checked = false

    filtro_estrategia.checked = false
    filtro_disparos.checked = false
    filtro_plataformas.checked = false
    filtro_hands.checked = false
    filtro_lucha.checked = false
    filtro_carreras.checked = false
    valor_aventura = "aventura"
  } else {
    valor_aventura = ""
  }
})

filtro_estrategia = document.querySelector("#genero_estrategia")
let valor_estrategia = ""

filtro_estrategia.addEventListener('click', function () {
  if (filtro_estrategia.checked) {
    filtro_accion.checked = false
    filtro_rpg.checked = false
    filtro_aventura.checked = false

    filtro_disparos.checked = false
    filtro_plataformas.checked = false
    filtro_hands.checked = false
    filtro_lucha.checked = false
    filtro_carreras.checked = false
    valor_estrategia = "estrategia"
  } else {
    valor_estrategia = ""
  }
})

filtro_disparos = document.querySelector("#genero_disparos")
let valor_disparos = ""

filtro_disparos.addEventListener('click', function () {
  if (filtro_disparos.checked) {
    filtro_accion.checked = false
    filtro_rpg.checked = false
    filtro_aventura.checked = false
    filtro_estrategia.checked = false

    filtro_plataformas.checked = false
    filtro_hands.checked = false
    filtro_lucha.checked = false
    filtro_carreras.checked = false
    valor_disparos = "disparos"
  } else {
    valor_disparos = ""
  }
})

filtro_plataformas = document.querySelector("#genero_plataformas")
let valor_plataformas = ""

filtro_plataformas.addEventListener('click', function () {
  if (filtro_plataformas.checked) {
    filtro_accion.checked = false
    filtro_rpg.checked = false
    filtro_aventura.checked = false
    filtro_estrategia.checked = false
    filtro_disparos.checked = false

    filtro_hands.checked = false
    filtro_lucha.checked = false
    filtro_carreras.checked = false
    valor_plataformas = "plataformas"
  } else {
    valor_plataformas = ""
  }
})

filtro_hands = document.querySelector("#genero_hack-and-slash")
let valor_hands = ""

filtro_hands.addEventListener('click', function () {
  if (filtro_hands.checked) {
    filtro_accion.checked = false
    filtro_rpg.checked = false
    filtro_aventura.checked = false
    filtro_estrategia.checked = false
    filtro_disparos.checked = false
    filtro_plataformas.checked = false

    filtro_lucha.checked = false
    filtro_carreras.checked = false
    valor_hands = "h&s"
  } else {
    valor_hands = ""
  }
})

filtro_lucha = document.querySelector("#genero_lucha")
let valor_lucha = ""

filtro_lucha.addEventListener('click', function () {
  if (filtro_lucha.checked) {
    filtro_accion.checked = false
    filtro_rpg.checked = false
    filtro_aventura.checked = false
    filtro_estrategia.checked = false
    filtro_disparos.checked = false
    filtro_plataformas.checked = false
    filtro_hands.checked = false

    filtro_carreras.checked = false
    valor_lucha = "lucha"
  } else {
    valor_lucha = ""
  }
})

filtro_carreras = document.querySelector("#genero_carreras")
let valor_carreras = ""

filtro_carreras.addEventListener('click', function () {
  if (filtro_carreras.checked) {
    filtro_accion.checked = false
    filtro_rpg.checked = false
    filtro_aventura.checked = false
    filtro_estrategia.checked = false
    filtro_disparos.checked = false
    filtro_plataformas.checked = false
    filtro_hands.checked = false
    filtro_lucha.checked = false
    valor_carreras = "carreras"
  } else {
    valor_carreras = ""
  }
})


boton_filtros.addEventListener("click", filtrar)

function filtrar() {

  boton_ver_mas.style.display = "none"
  boton_volver.style.display = "flex"

  let catalogo = document.querySelector('.catalogo');
  const juegos = catalogo.querySelectorAll(".juego")
  const etiquetas = catalogo.querySelectorAll("LABEL")

  if (filtro_accion.checked) {
    for (let i = 0; i < juegos.length; i++) {
      juegos[i].style.display = 'none';
    }
    for (let i = 0; i < juegos.length; i++) {
      let etiqueta_actual = etiquetas[i].textContent
      if (etiqueta_actual.includes(valor_accion)) {
        juegos[i].style.display = 'flex';
      }
    }
  }

  if (filtro_rpg.checked) {
    for (let i = 0; i < juegos.length; i++) {
      juegos[i].style.display = 'none';
    }
    for (let i = 0; i < juegos.length; i++) {
      let etiqueta_actual = etiquetas[i].textContent
      if (etiqueta_actual.includes(valor_rpg)) {
        juegos[i].style.display = 'flex';
      }
    }
  }

  if (filtro_aventura.checked) {
    for (let i = 0; i < juegos.length; i++) {
      juegos[i].style.display = 'none';
    }
    for (let i = 0; i < juegos.length; i++) {
      let etiqueta_actual = etiquetas[i].textContent
      if (etiqueta_actual.includes(valor_aventura)) {
        juegos[i].style.display = 'flex';
      }
    }
  }

  if (filtro_estrategia.checked) {
    for (let i = 0; i < juegos.length; i++) {
      juegos[i].style.display = 'none';
    }
    for (let i = 0; i < juegos.length; i++) {
      let etiqueta_actual = etiquetas[i].textContent
      if (etiqueta_actual.includes(valor_estrategia)) {
        juegos[i].style.display = 'flex';
      }
    }
  }

  if (filtro_disparos.checked) {
    for (let i = 0; i < juegos.length; i++) {
      juegos[i].style.display = 'none';
    }
    for (let i = 0; i < juegos.length; i++) {
      let etiqueta_actual = etiquetas[i].textContent
      if (etiqueta_actual.includes(valor_disparos)) {
        juegos[i].style.display = 'flex';
      }
    }
  }

  if (filtro_plataformas.checked) {
    for (let i = 0; i < juegos.length; i++) {
      juegos[i].style.display = 'none';
    }
    for (let i = 0; i < juegos.length; i++) {
      let etiqueta_actual = etiquetas[i].textContent
      if (etiqueta_actual.includes(valor_plataformas)) {
        juegos[i].style.display = 'flex';
      }
    }
  }

  if (filtro_hands.checked) {
    for (let i = 0; i < juegos.length; i++) {
      juegos[i].style.display = 'none';
    }
    for (let i = 0; i < juegos.length; i++) {
      let etiqueta_actual = etiquetas[i].textContent
      if (etiqueta_actual.includes(valor_hands)) {
        juegos[i].style.display = 'flex';
      }
    }
  }

  if (filtro_lucha.checked) {
    for (let i = 0; i < juegos.length; i++) {
      juegos[i].style.display = 'none';
    }
    for (let i = 0; i < juegos.length; i++) {
      let etiqueta_actual = etiquetas[i].textContent
      if (etiqueta_actual.includes(valor_lucha)) {
        juegos[i].style.display = 'flex';
      }
    }
  }

  if (filtro_carreras.checked) {
    for (let i = 0; i < juegos.length; i++) {
      juegos[i].style.display = 'none';
    }
    for (let i = 0; i < juegos.length; i++) {
      let etiqueta_actual = etiquetas[i].textContent
      if (etiqueta_actual.includes(valor_carreras)) {
        juegos[i].style.display = 'flex';
      }
    }
  }

}


//-----POP UP-----\\

const catalogo = document.querySelector(".catalogo")
const juego = document.querySelector(".juego")
const caratula = juego.querySelector("IMG").src
const titulo = juego.querySelector("H2")
const descripcion = juego.querySelector("DETAILS")
const popup_juego = document.querySelector(".popup_juego")
const popup_caratula = document.querySelector("#imagen_juego")
const popup_titulo = document.querySelector("#titulo_juego")
const popup_descripcion = document.querySelector("#descripcion_juego")

juego.addEventListener("click", mostrar)

function mostrar(){
  
  console.log(caratula)
  popup_caratula.src = caratula
  console.log(popup_caratula.textContent)
  popup_titulo.textContent = titulo.textContent
  popup_descripcion.textContent = descripcion.textContent

  popup_juego.style.display = "flex"
  catalogo.style.filter = "brightness(50%)" 
}

function cerrar_popup_juego(){
  popup_juego.style.display = "none"
  catalogo.style.filter = "none"
}

//-----BOTÓN ALQUILAR-----\\

const alquilar = document.querySelector("#boton_alquilar")
const carrito = document.querySelector(".bloque_carrito")

alquilar.addEventListener("click", boton_alquilar)

function boton_alquilar(){
  popup_juego.style.display = "none"
  carrito.style.display = "flex"
  catalogo.style.filter = "none"

}