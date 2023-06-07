//-----BUSCADOR NOTICIAS-----\\

const buscador = document.querySelector("#buscador")                    // Selecionar el buscador

buscador.addEventListener("keydown", function (evento) {                // Evento del input que hace la función buscar cuando le doy al enter
    if (evento.key === "Enter") {
        buscar(evento);
    }
})

function buscar(evento) {                                               // Funcion buscador
    let titulo = document.querySelectorAll("H2")                        // Seleccionar todos los h2
    let titulo_buscador = evento.target.value.toLowerCase().trim()      // Modificar el valor del input a minúsculas y sin espacios

    let titulos_encontrados = []                                        // Crear array donde guardar los títulos encontrados

    for (let i = 0; i < titulo.length; i++) {                           // Recorrer todos los h2

        let titulo_actual = titulo[i].textContent.toLowerCase().trim()  // Guardar el nueva variable el valor del h2 en minúsculas y sin espacios

        if (titulo_actual.includes(titulo_buscador)) {                  // Si el input está en el h2 actual...
            titulos_encontrados.push(titulo[i])                         // Almacenar título en el array para luego mostrar
        }
    }

    if (titulos_encontrados.length > 0) {                               // Si se han guardado títulos en el array...(length > 0)
        console.log(titulos_encontrados)                                // Mostrar títulos encontrados mediante buscador
    }
    else {
        mostrar_notificacion("No se ha encontrado la noticia");         // Notificar que no se ha encontrado título
    }
}

function mostrar_notificacion(mensaje) {
    const notificacion = document.createElement("div");
    notificacion.textContent = mensaje;
    notificacion.classList.add("notificacion");

    document.body.appendChild(notificacion);

    setTimeout(() => {                                                  // Eliminar la notificación después de 3 segundos
        notificacion.remove();
    }, 3000);
}

/*-----VER MÁS-----*/

window.addEventListener('DOMContentLoaded', function () {
    let noticias = document.getElementById('noticias');
    let divs_noticias = noticias.querySelectorAll('.noticia');
    let boton_ver_mas = document.getElementById('ver_mas');

    let noticias_visibles = 5;                                          // Número inicial de divs visibles
    let noticias_por_clic = 5;                                          // Número de divs a mostrar por clic en "ver_más"
    let indice = 5;                                                     // Índice del primer div oculto

    let numero_divs = divs_noticias.length;                             // Número de divs totales

    for (let i = 0; i < divs_noticias.length; i++) {                    // Ocultar todos los div "noticia"
        divs_noticias[i].style.display = 'none';
    }

    for (let i = 0; i < noticias_visibles; i++) {                       // Mostrar los primeros 5 divs por defecto
        divs_noticias[i].style.display = 'flex';
    }

    function mostrar_mas_noticias() {                                   // Función para mostrar los siguientes divs al hacer clic en "Ver más"
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