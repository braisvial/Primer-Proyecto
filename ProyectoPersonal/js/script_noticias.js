//-----ELEMENTOS HTML-----\\

const buscador = document.querySelector("#buscador")                                // Elemento Buscador
const boton_volver_arriba = document.querySelector(".volver_arriba")                // Elemento Volver Arriba
const boton_ver_mas = document.getElementById('ver_mas');                           // Elemento Ver Más
const boton_volver = document.getElementById('volver');                             // Elemento Volver

//-----BUSCADOR NOTICIAS-----\\

buscador.addEventListener("keydown", function (evento) {                            // Evento del input que hace la función buscar cuando le doy al enter
    if (evento.key === "Enter") {
        buscar(evento);
        buscador.value = ""
    }
    
})

function buscar(evento) {                                                           // Funcion buscador
    let noticias = document.getElementById('noticias');
    let divs_noticias = noticias.querySelectorAll('.noticia');
    let titulo = noticias.querySelectorAll("H2")                                    // Seleccionar todos los h2
    let titulo_buscador = evento.target.value.toLowerCase().trim()                  // Modificar el valor del input a minúsculas y sin espacios

    let no_encontrado = 0;

    for (let i = 0; i < divs_noticias.length; i++) {                                // Recorrer todos los h2

        let titulo_actual = titulo[i].textContent.toLowerCase().trim()              // Guardar el nueva variable el valor del h2 en minúsculas y sin espacios

        if (titulo_actual.includes(titulo_buscador) && titulo_buscador != "") {     // Si el input está en el h2 actual...
            divs_noticias[i].style.display = 'flex';                                // Mostrar los divs que cumplen la condición
            boton_volver_arriba.style.display = "none"                              // Ocultar el botón para volver arriba
            boton_ver_mas.style.display = "none"                                    // Ocultar el botón Ver más
            boton_volver.style.display= "inline-block"                              // Mostrar el botón Volver
        }
        else {
            divs_noticias[i].style.display = 'none';
            no_encontrado ++
        }
    }    

    if(no_encontrado === divs_noticias.length || titulo_buscador === ""){
        for (let i = 0; i < 5; i++){
            divs_noticias[i].style.display = 'flex';
        }
        mostrar_notificacion("No se ha encontrado la noticia");                     // Notificar que no se ha encontrado título
    }
}

function mostrar_notificacion(mensaje) {
    const notificacion = document.createElement("div");
    notificacion.textContent = mensaje;
    notificacion.classList.add("notificacion");

    document.body.appendChild(notificacion);

    setTimeout(() => {                                                              // Eliminar la notificación después de 3 segundos
        notificacion.remove();
    }, 3000);
}

//-----VER MÁS-----\\

window.addEventListener('DOMContentLoaded', function () {
    let noticias = document.getElementById('noticias');
    let divs_noticias = noticias.querySelectorAll('.noticia');
   
    

    let noticias_visibles = 5;                                          // Número inicial de divs visibles
    let noticias_por_clic = 5;                                          // Número de divs a mostrar por clic en "ver_más"
    let indice = 5;                                                     // Índice del primer div oculto
    let numero_divs = divs_noticias.length;                             // Número de divs totales

    // boton_volver_arriba.style.display = "none"

    for (let i = 0; i < divs_noticias.length; i++) {                    // Ocultar todos los div "noticia"
        divs_noticias[i].style.display = 'none';
    }

    for (let i = 0; i < noticias_visibles; i++) {                       // Mostrar los primeros 5 divs por defecto
        divs_noticias[i].style.display = 'flex';
    }

    function mostrar_mas_noticias() {                                   // Función para mostrar los siguientes divs al hacer clic en "Ver más"
        
        boton_volver_arriba.style.display = "flex"

        for (let i = 0; i < noticias_por_clic; i++) {
            if (divs_noticias[i + indice]) {                            // Se asegura de que hay un div que mostrar
                divs_noticias[i + indice].style.display = 'flex';       // Muestra el div
            }
        }
        indice += noticias_por_clic;                                    // Aumentar el índice en 5 para el próximo bloque de 5 divs

        if (indice >= numero_divs) {                                    // Si se llega al último div...
            boton_ver_mas.style.display = 'none';                       // Ocultar el botón si se han mostrado todos los divs
        }
    }

    boton_ver_mas.addEventListener('click', mostrar_mas_noticias);      // Agregar el evento click al botón "Ver más"
});

//-----VOLVER ARRIBA-----\\

function volver_arriba(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

//-----VOLVER-----\\

function volver_a_noticias(){
    // window.location.reload()
}

boton_volver.addEventListener('click', volver_a_noticias())