//TIPO DE VARIABLES

//Declaración de variables con el mismo tipo de dato pero de diferente manera
const producto = "El pueblo duerme";
const producto1 = String("Dooble");
const producto2 = new String("Uno");

//Visualización de las variables por consola
console.log("Producto:", producto);
console.log("Producto con string:", producto1);
console.log("Producto con new string:", producto2);

//TYPEOF para visualizar el tipo de dato
console.log("Typeof de Producto:", typeof producto);
console.log("Typeof de Producto con string:", typeof producto1);
console.log("Typeof de Producto con new string:", typeof producto2);


//Ejercicio

let numero100 = "100", numero200 = 200;
console.log("Typeof de numero100:", typeof numero100);
console.log("Typeof de numero200:", typeof numero200);

//Métodos
console.log("Metodo Length:", producto.length);                     //Número de caracteres de un string con método .length
console.log("Metodo Indeox:", producto.indexOf("duerme"));          //Busca la posición de un elemento en un string con método .indexOf     
console.log("Metodo Includes:", producto.includes("duErme"));       //Hace lo mismo que indexOf pero devuelve un booleano

//Ejercicio
const valor = 3;
let tweet
if (valor < 5) {
    tweet = "Esto es una cadena de texto para un ejercicio";
}
tweet = "Esto es una cadena de texto para un ejercicio";
console.log("Este tweet tiene", (tweet.length).toString(), "caracteres");