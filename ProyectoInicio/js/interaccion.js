//-----INTERACCION DE JAVA SCRIPT EN EL DOM-----\\

/*COMO SELECIONAR ELEMENTOS: 
    QUERYSELECTOR
    QUERYSELECTORALL
    GETELEMENTBYID
TODOS INICIAN CON DOCUMENT*/


//-----QUERYSELECTOR-----\\

    /*RETORNA UNO O NINGUN ELEMENTO
    MUY SIMILARES A LOS QUE TENEMOS EN CSS
        CLASES CON .
        ID CON #
    DOCUMENT HACE REFERENCIA A TODO EL DOCUMENTO HTML*/


zº

console.log(selector_h1)

const selector_boton = document.querySelector("#boton")

console.log(selector_boton)

//-----MODIFICAR PROPIEDAD-----\\

selector_boton.textContent = "Nuevo botón desde JS"

//-----AÑADIR Y ELIMINAR CLASES-----\\

selector_boton.classList.add("NuevaClaseDesdeJS")
selector_boton.classList.remove("NuevaClaseDesdeJS")

selector_boton.classList.add("informate")
selector_boton.classList.remove("informate")


//-----QUERYSELECTORALL-----\\

const enlaces_js2= document.querySelectorAll("a")           //Accedemos atodos los enlaces del html

console.log(enlaces_js2[0])                                 //Seleccionamos el enlace que queremos por el índice
enlaces_js2[0].href = "http://google.com"                   //Modificamos una propiedad del enlace seleccionado

enlaces_js2[1].textContent = "nuevo contenido"
enlaces_js2[1].href = "http://google.com"


//-----GETELEMENTBYID-----\\

const selector_boton_pedir = document.getElementById("boton_pedir")
console.log(selector_boton_pedir)


//-----GENERAR CÓDIGO EN HTML DESDE JAVASCRIPT-----\\

const nuevo_enlace = document.createElement("A")            //Usar mayúsculas para A, P, DIV, IMG...

nuevo_enlace.href = "https://www.youtube.com/"              //Agregar href
nuevo_enlace.textContent = "Nuevo enlace"                   //Agregar texto
nuevo_enlace.classList.add("informate")                     //Agregrar clase

console.log(nuevo_enlace)

const enlaces_js3 = document.querySelector(".menu")         //Seleccionar el elemento padre

enlaces_js3.appendChild(nuevo_enlace)                       //Añadir el elemento hijo al final del elemento padre

//-----EJERCICIO-----

const nueva_ciudad = document.createElement("A")

nueva_ciudad.href = "#"
nueva_ciudad.textContent = "Islas Cíes"
// nueva_ciudad.classList.add("seccion_cursos")

const enlaces_js4 = document.querySelector(".enlaces")

enlaces_js4.appendChild(nueva_ciudad)


//-----EJERCICIO-----

const nueva_localizacion = document.createElement("DIV")
const titulo_localizacion = document.createElement("H3")
const parrafo_localizacion = document.createElement("P")
titulo_localizacion.textContent = "Islas Cíes"
parrafo_localizacion.textContent = "Avenida Ría de Vigo, 123"

const enlaces_js5 = document.querySelector(".localizaciones")

enlaces_js5.appendChild(nueva_localizacion)
nueva_localizacion.appendChild(titulo_localizacion)
nueva_localizacion.appendChild(parrafo_localizacion)

//-----EJERCICIO-----

const nuevo_boton = document.createElement("A")
nuevo_boton.href = "#"
nuevo_boton.textContent= "Ciudades"
// nuevo_boton.classList.add("boton")

const enlaces_js6 = document.querySelector(".primera_seccion .contenedor")
enlaces_js6.appendChild(nuevo_boton)


//-----EVENTOS EN JAVASCRIPT-----\\

window.addEventListener("load", function(){                      //Evento que puede ser load, click, scroll...
    console.log("Se ha cargado el html")
})

window.addEventListener("DOMContentLoaded" ,function(){
    console.log("Se ha cargado el html")
})

//-----SCROLL-----\\

document.addEventListener("scroll", function(){
    console.log("Scrolling")
})

//-----EVENTOS A ELEMENTOS DEL HTML-----\\

const boton_notificacion = document.querySelector("#boton")

boton_notificacion.addEventListener("click", function(evento){
    console.log(evento)
    console.log("Mostrando Notificación")
})

const nombre = document.querySelector("#nombre")

// nombre.addEventListener("change", function(){
//     console.log("Escribiendo nombre...")
// })

nombre.addEventListener("input", function(evento){
    console.log("Escribiendo nombre con input...")
    console.log(evento)
    console.log(evento.target.value)
})

const email = document.querySelector("#email")

email.addEventListener("input", function(evento){
    console.log("Escribiendo email con input...")
    console.log(evento)
    console.log(evento.target.value)
})

const mensaje = document.querySelector("#mensaje")

mensaje.addEventListener("input", function(evento){
    console.log("Escribiendo mensaje con input...")
    console.log(evento)
    console.log(evento.target.value)
})

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

function leer_texto(evento){
    datos[evento.target.id] = evento.target.value
    console.log(datos)
}


//-----SUBMIT-----

const formulario = document.querySelector("form")

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()
    console.log("Enviado formulario...")
})


/*-----COMO ORGANIZAR CÓDIGO JAVASCRIPT-----\\

    1º VARIABLES
    2º EVENTOS
    3º FUNCIONES
*/