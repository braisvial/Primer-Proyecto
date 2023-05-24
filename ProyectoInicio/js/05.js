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

//-----EJERCICIO-----

function mayus(texto){
    return texto.toUpperCase();
}

let cadena_mayus = mayus("esto es una cadena de texto")
console.log(cadena_mayus)


//-----EJERCICIO-----
//-----Concatenar 2 arrays-----

function concatenar(arreglo1, arreglo2){
    return [...arreglo1, ...arreglo2]
}

let nuevo_arreglo = concatenar([1, 2, 3], ["uno", "dos", "tres"])
console.log(nuevo_arreglo)

//-----EJERCICIO-----
//-----Obtener el último elemento de un array-----

function ultimo(arreglo){
    n = arreglo.length;
    return arreglo[n-1]
}

let dias_semana= ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]
let elemento = ultimo(dias_semana)
console.log(elemento)

let otro_arreglo = ["enero", "febrero", "marzo", "abril"]
let otro_elemento = ultimo(otro_arreglo)
console.log(otro_elemento)

//-----EJERCICIO-----
//-----Obtener un número aleatorio en un rango de 2 numeros-----

function aleatorio(min, max){
    let valor = Math.floor(Math.random() * (max - min) + min);
    return valor
}

let dado = aleatorio(1,6);
console.log(dado)
let dado_rol = aleatorio(1, 20);
console.log(dado_rol)

//-----EJERCICIO-----
//-----Comprobar si un elemento está en el array-----

function comprobar(arreglo, elemento){
    let bool = arreglo.includes(elemento)
    if (bool){
        var resultado = `El elemento ${elemento} está en el array`;
    }
    else{
        resultado = `El elemento ${elemento} no está en el array`;
    }
    return resultado
}

console.log(comprobar(dias_semana, "lunes"))

//-----EJERCICIO-----
//-----Obtener el mínimo de 3 números-----

function minimo(num1, num2, num3){
    if (num1 < num2 & num1 < num3){
        valor = `El número de menor valor es ${num1}`
    }
    else if(num2 < num1 & num2 < num3){
        valor = `El número de menor valor es ${num2}`
    }
    else{
        valor = `El número de menor valor es ${num3}`
    }
    return valor
    //return Math.min(num1, num2, num3)
}

console.log(minimo(22, 13, 41))

//-----EJERCICIO-----
//----- -----
function min(array){
    n= array.length;
    for (let i=0;  i< n; i++){
        if (array[i] < array[i-1]){
            min = array[i];
        }
    }
    return min
}

array_numeros = [2, 3, 30, -2, 4, 12, -12, 40, 5, -4];
console.log(min(array_numeros))

//-----EJERCICIO-----
//-----Obtener el mayor de 4 números-----
 function max(num1, num2, num3, num4){
    return Math.max(num1, num2, num3, num4)
 }

 console.log(max( 1, 2, 3 ,4))

//-----EJERCICIO-----
//-----Convertir la hora de España a la de Canarias-----

function convertidor_hora(hora){
    return hora - 1
}

let date =  new Date()
console.log(date)
hora = "Hora España: " + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
console.log(hora)
console.log("Hora Canarias: " + convertidor_hora(date.getHours())+ ':' + date.getMinutes() + ':' + date.getSeconds())

//-----EJERCICIO-----
//-----Convertir grados fahrenheit a celsius-----

function conv_temp(temp){
    resultado = (Math.round(((temp - 32) * 5 / 9)* 100 )) / 100;
    return resultado
}

console.log(conv_temp(45))

//-----EJERCICIO-----
//-----Área de un triángulo dedo la base y la altura-----

function area_triangulo(base,altura){
    return (base * altura)/2
}

console.log(area_triangulo(10, 15))

//-----EJERCICIO-----
//-----Área de un circulo dado el radio-----
 
function area_circulo(radio){
    return Math.PI * Math.pow(radio, 2)
}

 console.log(area_circulo(5))

//-----EJERCICIO-----
//-----Calcular la potencia de un número dado el exponente-----

function potencia(base, exponente){
    return Math.pow(base, exponente)
}

 console.log(potencia(2, 8))

//-----EJERCICIO-----
//-----Redondear al entero superior-----

function redondear(numero){
    return Math.ceil(numero)
}

console.log(redondear(4.2))

//-----EJERCICIO-----
//----- -----



//-----EJERCICIO-----
//----- -----



//-----EJERCICIO-----
//----- -----



//-----EJERCICIO-----



//-----EJERCICIO-----

