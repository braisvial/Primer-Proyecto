//-----Ejercicio-----

let variable1 = "valor1", variable2 = "valor2", variable3 = "valor3";
let ejercicio6 = {};
ejercicio6.propiedad1 = variable1;
ejercicio6.propiedad2 = variable2;
ejercicio6.propiedad3 = variable3;

console.table(ejercicio6);

//-----ARRAYS EN JAVASCRIPT-----

let numeros = [10, 20, 30, 40, 50];                         //Sintaxis de los array
console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo");       //Constructor de array
console.table(meses);

let dia_semana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
console.table(dia_semana)   

let mezcla_datos = ["dato1", 100, true, null, [1, 2, 3], objeto = {propiedad:"valor"} ];        //Un array puede tener diferentes tipos de datos dentro
console.table(mezcla_datos);

console.log(mezcla_datos[4]);                               //Visualizar un elemento del array
//Los índices en los array empiezan en 0
console.log(dia_semana[0], dia_semana[3])
console.log(dia_semana[20])

//-----EJERCICIO-----

let ejercicio5 = {
    propiedad_a:"texto",
    propiedad_b: 100,
    propiedad_c: false
}

ejercicio5.propiedad_d = dia_semana;
console.table(ejercicio5);

let {propiedad_a,propiedad_b,propiedad_c,propiedad_d} = ejercicio5;
console.log(propiedad_a)
console.log(propiedad_b)
console.log(propiedad_c)
console.log(propiedad_d)

//-----ITERADORES DE LOS ARRAYS-----

dia_semana.forEach(function(dia){
    console.log(dia);
})                                          //Recorremos todos los elementos del array

numeros[5] = 60;                            //Añadimos un nuevo valor a un índice vacío
numeros[3] = 70;                            //Modificamos el valor del indice seleccionado
numeros.length;                             //Número de elementos del array
numeros.push(80)                            
numeros.push(90, 100, 110)                  //Añade uno o varios elementos al final del array
numeros.unshift(-30, -20, -10)              //Añade valores al principio del array y desplaza los elementos tantos índices como nuevos elementos
numeros.pop()                               //Elimina el último elemento del array
numeros.shift()                             //Elimina el primer elemento del array
numeros.splice(2, 3)                        //Elimina 3 elementos desde el índice 2
console.log(numeros)

const nuevo_arreglo = [...numeros, 1234];
console.table(nuevo_arreglo);

//-----EJERCICIO-----

let estaciones = ["verano"];
estaciones.push("otoño", "invierno")
estaciones.unshift("primavera")
console.table(estaciones)

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
console.table(carrito)

let nuevo_carrito = [{nombre, precio} = objeto2 , {nombre, precio} = carrito[0]] ;

console.table(nuevo_carrito)

//-----INCLUDE PARA ARREGLO PLANO-----

resultado = meses.includes("mayo");
console.log(resultado)                          //Devuelve true si hay ese elemento en el array

//-----SOME PARA ARREGLO DE OBJETOS-----

resultado = carrito.some(function(producto){
    return producto.nombre === "tablet"
})
console.log(resultado);                         //Devuelve true si hay esa propiedad en algun objeto del array

//-----REDUCE-----

resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0)
console.log(resultado)                          //Recorre el array carrito y suma al total los precios de los productos

//-----FILTER-----

resultado = carrito.filter(function (producto){
    return producto.precio < 350
})
console.log(resultado)

//-----COMPARADORES-----
/*
=== IGUAL
!== DIFERENTE
< MENOR QUE 
<= MENOR/IGUAL QUE
> MAYOR QUE
>= MAYOR/IGUAL QUE
*/
