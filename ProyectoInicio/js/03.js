"use strict"//-----OBJETOS EN JAVASCRIPT-----

//Los objetos son contenedores de propiedades

// let nombre_producto = "reloj", precio = 200, disponible = false;
// console.log(`El producto ${nombre_producto} tiene un precio de ${precio}€ y está disponible: ${disponible}`);

const producto = {                                      //Creación de un objeto con sus propiedads
    nombre_producto: "reloj",
    precio: 200,
    disponible: false
};
console.log(producto);                                  //Visualización clásica de un objeto
console.table(producto);                                //Visualización mediande tabla de un objeto
console.log(`${producto.precio}`);                      //Visualizacion de una propiedad dentro de un onjeto
console.log(producto.precio);

//-----Operaciones con productos-----

producto.precio = 500;                                  //Modificar una propiedad dentro de un objeto
console.log(`${producto.precio}`); 

producto.categoria = "relojes";                         //Añadir una nueva propiedad dentro del objeto
console.table(producto);

delete producto.disponible;                             //Eliminar una propiedad del objeto
console.table(producto); 

//-----Crear/Eliminar variables a partir de propiedades-----

// const precio_producto = producto.precio;             //Creación de una variable a partir de una propiedad de un objeto
// console.log(precio_producto);

// let nombre_producto = producto.nombre_producto;      //La nueva variable puede tener el mismo nombre que la propiedad
// console.log(nombre_producto);

//-----DESTRUCTURING-----

let{nombre_producto, precio, categoria} = producto;     //Crea variable, asigna valor de la propiedad y copia el nombre de la propiedad
console.log(categoria);

//-----EJERCICIO-----

const playa = {
    nombre: "Rodas",
    ubicacion: "Cíes",
    recomendable: true,
    temperatura_agua: 15
};

console.table(playa)

let{nombre, ubicacion, recomendable, temperatura_agua} = playa;

if (recomendable = true) {
    recomendable = "buena";
}
else {
    recomendable = "mala";
}
console.log(`La playa ${playa.nombre} situada en ${playa.ubicacion} tiene una temperatura del agua de ${playa.temperatura_agua}ºC y su recomendación es ${playa.recomendable}`);
console.log(`La playa ${nombre} situada en ${ubicacion} tiene una temperatura del agua de ${temperatura_agua}ºC y su recomendación es ${recomendable}`);

playa.temperatura_agua = 25;                            //Modificar una propiedad
console.log(playa.temperatura_agua)

//-----CONGELAR OBJETOS-----

Object.freeze(playa);                                   //No se pueda añadir, eliminar o modificas propiedades del objeto
// playa.sombrillas = false;
console.table(playa)
console.log(Object.isFrozen(playa))                     //Devuelve un booleano

Object.seal(playa);                                     //No se pueda añadir o eliminar pero sí modificar propiedades del objeto

//-----CREAR COPIAS DE OBJETOS-----

let nuevo_producto = {...producto,...playa}             //Crea un nuevo objeto copiando otros objetos, SPREAD OPERATOR
console.table(nuevo_producto)

//-----EJERCICIO-----

let medidas = {
    alto:100,
    ancho:50,
    profundo:20
}

medidas.peso = 60;
medidas.alto = 150;
delete medidas.profundo;

console.table(medidas)