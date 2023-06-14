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
    // div_volver_arriba.style.display = "none"                                  // Ocultar el botón para volver arriba
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
  let catalogo = document.querySelector('.catalogo');                             // Seleccionar el elemento padre noticias
  let juegos = catalogo.querySelectorAll('.juego');                      // Selecionar todas las noticias



  let juegos_visibles = 9;                                                      // Número inicial de divs visibles
  let juegos_por_clic = 9;                                                      // Número de divs a mostrar por clic en "ver_más"
  let indice = 9;                                                                 // Índice del primer div oculto
  let numero_divs = juegos.length;                                         // Número de divs totales

  for (let i = 0; i < juegos.length; i++) {                                // Ocultar todos los div "noticia"
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
