//-----Buscador tienda-----\\

const buscador = document.querySelector("#buscador")                //Selecionar el buscador

buscador.addEventListener("keydown", function(evento) {             //Evento del input que hace la función buscar cuando le doy al enter
  if (evento.key === "Enter") {
    buscar(evento);
  }
})                          

function buscar(evento) {                                           //Funcion buscador
  let titulo = document.querySelectorAll("H2")                      //Seleccionar todos los h2
  let titulo_buscador = evento.target.value.toLowerCase().trim()    //Modificar el valor del input a minúsculas y sin espacios

  let titulos_encontrados = []                                      //Crear array donde guardar los títulos encontrados

  for (let i = 0; i < titulo.length; i++){                          //Recorrer todos los h2

    let titulo_actual = titulo[i].textContent.toLowerCase().trim()  //Guardar el nueva variable el valor del h2 en minúsculas y sin espacios

    if (titulo_actual.includes(titulo_buscador)){                   //Si el input está en el h2 actual...
      titulos_encontrados.push(titulo[i])                           //Almacenar título en el array para luego mostrar
    }
  } 

  if (titulos_encontrados.length > 0){                              //Si se han guardado títulos en el array...(length > 0)
    console.log(titulos_encontrados)                                //Mostrar títulos encontrados mediante buscador
  }
  else{
    mostrar_notificacion("No se ha encontrado el título");                    //Notificar que no se ha encontrado título
  }
}

function mostrar_notificacion(mensaje) {
  const notificacion = document.createElement("div");
  notificacion.textContent = mensaje;
  notificacion.classList.add("notificacion");

  document.body.appendChild(notificacion);

  // Eliminar la notificación después de 3 segundos
  setTimeout(() => {
    notificacion.remove();
  }, 3000);
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
