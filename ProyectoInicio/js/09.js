//-----TRY CATCH-----\\
//Evita que se paralice el código al producirse un error


let numero1 = 10, numero3 = 30

console.log(numero1)
//console.log(numero2)        //Saltarí un error al no estar la variable definida
//console.log(numero3)        //No muestra al haber un error anteriormente

try {
    console.log(numero2)
} catch (error) {
    console.log("Tienes un error en el console log 2")
}

console.log(numero3)

//-----PROMISES-----\\

const usuario_autenticado = new Promise((resolve, reject) => {
    const auth = false

    if (auth) {
        resolve("Usuario autenticado")          //El promise se cumple
    } else {
        reject("No se puede iniciar sesión")    //El promise no se cumple
    }
})

console.log(usuario_autenticado)

usuario_autenticado
    .then(function (resultado) {
        console.log(resultado)
    })
    .catch(function (resultado) {
        console.log(resultado)
    })

//-----NOTIFICACIONES API CON JAVASCRIPT-----\\

// const boton = document.querySelector("#boton")

// boton.addEventListener("click", function(){
//     console.log("Hiciste click")
//     Notification.requestPermission()
//     .then(resultado => console.log(`El resultado es ${resultado}`))
// })

/* if(Notification.permission === "granted"){
    new Notification("Esta es una notificación", {
        icon: "./img/Tu-carrera-digital-general.png",
        body: "Notificación Tu Carrera Digital"
    })
}*/

//-----ASYNC/AWAIT-----\\

setTimeout(() => {
    console.log("Set time out actuando")
}, 3000); //Milisegundos

// setInterval(() => {
//     console.log("Set interval actuando")
// }, 4000);


function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log("Descargando clientes... espere...")

        setTimeout(() => {
            resolve("Los clientes fueron descargados")
        }, 5000);
    })
}

async function app() {
    const resultadoAsync = await descargarNuevosClientes()
    console.log("Este código sí se bloquea")
    console.log(resultadoAsync)
}

app()
console.log("Este código no se bloquea")


//-----EJERCICIO-----

function descargarNuevosPedidos() {
    return new Promise(resolve => {
        console.log("Descargando nuevos pedidos... Espere")

        setTimeout(() => {
            resolve(console.log("Pedidos descargados"))
        }, 3000)
    })
}

descargarNuevosPedidos()