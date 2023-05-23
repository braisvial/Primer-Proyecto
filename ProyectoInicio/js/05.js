//-----FUNCIONES-----

/*Formas de crear funciones:
    Declaración de la función
    Expresión de la funcion
    Iife
*/

//DECLARACIÓN DE LA FUNCIÓN
function sumar(n1, n2){                                 //Argumento de la función
    console.log(n1 + n2);                               //Cuerpo de la función
}

sumar(10, 20);                                          //Llamada a la función con los datos
sumar(20.35, 252.2);


//EXPRESIÓN DE LA FUNCIÓN
let sumar2 = function(n1, n2){
    console.log(n1 + n2);
}

sumar2(3, 12.5);

//IIFE
(function(){                                            //Se crea y llama al momento
    console.log("Esto es una funcion mediante IIFE")
})();

//-----EJERCICIO-----

function restar(n1, n2, n3, n4){
    console.log(n1 - n2 - n3 - n4);
}

let restar2 = function(n1, n2, n3, n4){
    console.log(`La resta entre ${n1}, ${n2}, ${n3}, ${n4} es ${n1 - n2 - n3 - n4}`);
}

restar(100, 20, 50, 5);
restar(2000, -1000, 500, 100)
restar2(465418, 295, 50498, 518);
restar2(20, -1000, 500, 1020)

//-----EJERCICIO-----

let numero1 = 20;
let numero2 = "20";

console.log(parseInt(numero2), typeof parseInt(numero2));                         //Función
console.log(numero1.toString(), typeof numero1.toString());                       //Método

//-----EJERCICIO-----

function color(color){
    console.log("El color elegido es el", color);
}
color("rojo")

//-----EJERCICIO-----

function blackfriday(importe, descuento){
    console.log(`El total a pagar es de: ${importe * (1 - descuento/100)}€`);
}

blackfriday(1000, 20);

//-----EJERCICIO-----

function raices(a, b, c){
    x1 = (-b + Math.sqrt(Math.pow(b, 2)- 4 * a * c)) / (2 * a);
    x2 = (-b - Math.sqrt(Math.pow(b, 2)- 4 * a * c)) / (2 * a);
    console.log(`Las raíces de la funcion son: ${x1} y ${x2}`);
}

raices(1, 3, -4);

//-----EJERCICIO-----

function buscar(texto, palabra){
    bool = texto.includes(palabra)
    if (bool){
        valor = "Sí"
    }
    else{
        valor = "No"
    }
    console.log(`¿La palabra "${palabra}" está en el texto? ${valor}`)
}

buscar("Esto es una cadena de texto", "caDena")

//-----EJERCICIO-----

function añadir(arreglo, elemento){
    arreglo.push(elemento)
    console.table(arreglo)
}

let matriz = [2, 4, 6, 8]
añadir(matriz, 10)