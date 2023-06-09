//-----ARCHIVO JSON-----\\

function obtener_noticias() {
    return new Promise((resolve, reject) => {
        fetch("noticias.json")
            .then(resultado => resultado.json())
            .then(datos => {
                const { noticias } = datos;
                resolve(noticias);
            })
            .catch(error => {
                reject(error);
            });
    });
}

obtener_noticias()
    .then(array_noticias => {

        array_noticias.forEach(noticia => {
            const img = noticia.img;
            const title = noticia.title;
            const description = noticia.description;
            const link = noticia.link;
        });
    })
    .catch(error => {
        console.log("Error al obtener las noticias:", error);
    });






/***************************************/
//-----BUSCADOR NOTICIAS-----\\

const buscador = document.querySelector("#buscador")                                // Selecionar el buscador

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
            divs_noticias[i].style.display = 'flex';                                // Almacenar título en el array para luego mostrar
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