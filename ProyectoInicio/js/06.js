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


//-----SWITCH CASE-----\\

function metodo_pago(metodo) {
    switch (metodo) {
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

//-----EJERCICIO-----

function multiplicar_if(num) {
    let valor = num * num;
    if (valor === 100) {
        console.log(`El número obtenido al multiplicar ${num} por si mismo es 100`)
    }
    else if (valor === 200) {
        console.log(`El número obtenido al multiplicar ${num} por si mismo es 200`)
    }
    else {
        console.log(`El número obtenido al multiplicar ${num} por si mismo no cumple ninguna de las condiciones`)
    }
}

multiplicar_if(10)

function multiplicar_case(num) {
    let valor = num * num;
    switch (valor) {
        case 100:
            console.log(`El número obtenido al multiplicar ${num} por si mismo es 100`)
            break;
        case 400:
            console.log(`El número obtenido al multiplicar ${num} por si mismo es 400`)
            break;
        default:
            console.log(`El número obtenido al multiplicar ${num} por si mismo no cumple ninguna de las condiciones`)
            break;
    }
}

multiplicar_case(20)


//-----BUCLE FOR-----\\

for (let i = 0; i <= 10; i++) {
    console.log(i);
}


for (let n = 0; n <= 20; n += 5) {
    console.log(n)
}

for (let k = 0; k <= 10; k += 3) {
    console.log(k)
    console.log(10 - k)
}


//-----BUCLE WHILE-----\\

let i = 0;
while (i <= 10) {
    console.log(i)
    i++
}

//-----BUCLE DO WHILE-----\\

let j = 0;
do {
    console.log(j)
    j++
} while (j <= 10)


//-----EJERCICIO-----

let n1 = 0;
while (n1 <= 50){
    if(n1 % 2 === 0){
        console.log(n1)
    }
    n1++
}


//-----FOR EACH / MAP-----\\

let carrito = [
    objeto1 ={
        nombre:"pc",
        precio:1000
    },
    objeto2 ={
        nombre:"movil",
        precio:300
    },
    objeto3 ={
        nombre:"tablet",
        precio:400
    },
    objeto4 ={
        nombre:"monitor",
        precio:200
    }
]

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i])
}                                                                   //Recorrer el array con un bucle for

carrito.forEach(function(producto){
    console.log(producto, producto.nombre)
})                                                                  //Recorre el array con el metodo foreach u mostramos por pantalla

let recorrer = producto => console.log(producto, producto.nombre)
carrito.forEach(recorrer)                                           //Recorre el array con el foreach con funcion flecha

let nuevo_carrito = carrito.map(producto => producto.nombre)        //El map hace lo mismo que el foreach pero se utiliza para copiar en un nuevo array
console.log(nuevo_carrito)                                          //En la funcion de flecha se hace un return de la propiedad nombre


//-----EJERCICIO-----
// Mostrar la propiedad precio del array carrito con while, for y do while

let x = 0;
while(x < carrito.length){
    console.log(`Precio del artículo ${carrito[x].nombre}: ${carrito[x].precio}€ hecho con while`)
    x++
}

let y = 0;
do{
    console.log(`Precio del artículo ${carrito[y].nombre}: ${carrito[y].precio}€ hecho con do while`)
    y++
}while(y < carrito.length)


for( let z= 0; z < carrito.length; z++){
    console.log(`Precio del artículo ${carrito[z].nombre}: ${carrito[z].precio}€ hecho con for`)
}

//-----EJERCICIO-----



//-----EJERCICIO-----


//-----EJERCICIO-----