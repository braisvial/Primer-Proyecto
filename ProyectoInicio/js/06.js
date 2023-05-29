//-----ESTRUCTURAS DE CONTROL-----\\


//-----IF ELSE -----\\
let puntaje = 900;

if (puntaje === 1000) {
    console.log("Puntaje es igual a 1000")
}
else {
    console.log("Puntaje no es igual a 1000")
}

//-----EJERCICIO-----

function comprobar_pin(pin) {
    let pin_correcto = 1234;
    if (pin === pin_correcto) {
        console.log("PIN aceptado")
    }
    else {
        console.log("El PIN no es correcto")
    }
}

comprobar_pin(1234)

//-----EJERCICIO-----

function saldo(retirada) {
    let saldo_restante = 1000;
    if (retirada <= saldo_restante) {
        console.log("Retirada efectuada")
    }
    else {
        console.log("Saldo insuficiente")
    }
}

saldo(1200)

//-----EJERCICIO-----

function cajero(pin, retirada) {
    let pin_correcto = 1234;
    if (pin === pin_correcto) {
        console.log("PIN aceptado")

        let saldo_restante = 1000;
        if (retirada <= saldo_restante) {
            console.log("Retirada efectuada")
        }
        else {
            console.log("Saldo insuficiente")
        }
    }
    else {
        console.log("El PIN no es correcto")
    }
}

cajero(1234, 700)

//-----EJERCICIO-----

function rol_persona(rol) {
    if (rol === "usuario") {
        console.log(`Usted tiene el rol de ${rol}. Puede acceder a la web.`)
    }
    else if (rol === "admin") {
        console.log(`Usted tiene el rol de ${rol}. Puede administrar a la web.`)
    }
    else if (rol === "editor") {
        console.log(`Usted tiene el rol de ${rol}. Puede editar a la web.`)
    }
    else if (rol === "gestor") {
        console.log(`Usted tiene el rol de ${rol}. Puede gestionar a la web.`)
    }
    else {
        console.log(`Error al selecionar el rol ${rol}. Rol no reconocido.`)
    }
}

rol_persona("hola")

function rol_case(rol) {
    switch (rol) {
        case "usuario":
            console.log(`Usted tiene el rol de ${rol}. Puede acceder a la web.`)
            break;
        case "admin":
            console.log(`Usted tiene el rol de ${rol}. Puede administrar a la web.`)
            break;
        case "editor":
            console.log(`Usted tiene el rol de ${rol}. Puede editar a la web.`)
            break;
        case "gestor":
            console.log(`Usted tiene el rol de ${rol}. Puede gestionar a la web.`)
            break;
        default:
            console.log(`Error al selecionar el rol ${rol}. Rol no reconocido.`)
    }
}

rol_case("gestor")

//-----EJERCICIO-----

function metodo_pago(metodo){
    switch (metodo){
        case "Tarjeta":
            console.log(`Método de pago seleccionado: Tarjeta`)
            break;
        case "En efectivo":
            console.log(`Método de pago seleccionado: Efectivo`)
            break;
        case "Bizum":
            console.log(`Método de pago seleccionado: Bizum`)
            break;
        case "Paypal":
            console.log(`Método de pago seleccionado: Paypal`)
            break;
        default:
            console.log(`Método de pago no reconocido`)
    }
}

metodo_pago("Bizum")
