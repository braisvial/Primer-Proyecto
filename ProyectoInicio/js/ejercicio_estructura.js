//-----EJERCICIO-----

function tipo_num(num) {
    if (num < 0) {
        console.log(`El número ${num} es negativo`)
    }
    else if (num > 0) {
        console.log(`El número ${num} es positivo`)
    }
    else {
        console.log(`El número ${num} es 0`)
    }
}

tipo_num(3)

//-----EJERCICIO-----

function dias_mes(mes) {
    if (mes === "enero" || mes === "marzo" || mes === "mayo" || mes === "julio" || mes === "agosto" || mes === "octubre" || mes === "diciembre") {
        console.log(`El mes ${mes} tiene 31 días`)
    }
    else if (mes === "febrero") {
        console.log(`El mes ${mes} tiene 28 o 29 días`)
    }
    else if (mes === "abril" || mes === "junio" || mes === "septiembre" || mes === "noviembre") {
        console.log(`El mes ${mes} tiene 30 días`)
    }
    else {
        console.log("El mes introducido no existe")
    }
}

let mes_introducido = "Enero"
dias_mes(mes_introducido.toLowerCase())

//-----EJERCICIO-----

function num_vocales(texto){
    let contador = 0;
    for(let i = 0; i < texto.length; i++){
        if(texto.charAt(i)=== "a" || texto.charAt(i)=== "e" || texto.charAt(i)=== "i" || texto.charAt(i)=== "o" || texto.charAt(i)=== "u"
        || texto.charAt(i)=== "A" || texto.charAt(i)=== "E" || texto.charAt(i)=== "I" || texto.charAt(i)=== "O" || texto.charAt(i)=== "U"){
            contador ++
        }
    }
    console.log(`El texto "${texto}" tiene ${contador} vocales`)
}

num_vocales("Esto es una cadena de texto")
num_vocales("murcielago")

//-----EJERCICIO-----

function inversa(cadena){
    let nueva_cadena='';
    for(let i = cadena.length -1; i >= 0 ; i--){
        nueva_cadena += cadena.charAt(i)
    }
    console.log(`La cadena inversa de "${cadena}" es "${nueva_cadena}"`)
}

inversa("Esto es una cadena de texto")