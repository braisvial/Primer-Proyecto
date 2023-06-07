let titulo = document.createElement("H1")

let contenido = document.querySelector(".bloque_h1")

let selector_input = document.querySelector(".entrada")

selector_input.addEventListener("input", function(evento){
    titulo.textContent = evento.target.value
})

contenido.appendChild(titulo)
