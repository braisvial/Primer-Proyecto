//-----TIPO DE VARIABLES-----

//Declaración de variables con el mismo tipo de dato pero de diferente manera
const producto = "El pueblo duerme";
const producto1 = String("Dooble");
const producto2 = new String("Uno");                                    //Crea un objeto con un string

//Visualización de las variables por consola
console.log("Producto:", producto);
console.log("Producto con string:", producto1);
console.log("Producto con new string:", producto2);

//TYPEOF para visualizar el tipo de dato
console.log("Typeof de Producto:", typeof producto);
console.log("Typeof de Producto con string:", typeof producto1);
console.log("Typeof de Producto con new string:", typeof producto2);


//-----EJERCICIO-----

let numero100 = "100", numero200 = 200;
console.log("Typeof de numero100:", typeof numero100);
console.log("Typeof de numero200:", typeof numero200);

//-----MÉTODOS-----

console.log("Metodo Length:", producto.length);                         //Número de caracteres de un string con método .length
console.log("Metodo Indeox:", producto.indexOf("duerme"));              //Busca la posición de un elemento en un string con método .indexOf     
console.log("Metodo Includes:", producto.includes("duErme"));           //Hace lo mismo que indexOf pero devuelve un booleano

//-----EJERCICIO-----

const valor = 3;
let tweet
if (valor < 5) {
    tweet = "Esto es una cadena de texto para un ejercicio";
}
console.log("Este tweet tiene", (tweet.length).toString(), "caracteres");

//------NUMBERS-------

let numero1 = 100, numero2 = 50.5, numero3 = "100", numero4 = 100/5;
console.log("Numero 1:", numero1, typeof numero1);
console.log("Numero 2:", numero2, typeof numero2);
console.log("Numero 3:", numero3, typeof numero3);
console.log("Numero 4:", numero4, typeof numero4);

//-----OPERACIONES MATEMÁTICAS-----

console.log("Suma", numero1 + numero2);
console.log("Resta", numero1 - numero2);
console.log("Multiplicación", numero1 * numero2);
console.log("División", numero1 / numero2);
console.log("División entera", Math.trunc(numero1 / numero2));
console.log("Módulo", numero1 % numero2);
console.log("Concatenación", numero1 + numero3);                        //Number + String

//-------MÉTODO MATH--------

const max = 10, min = 5; salto = 5;                         
let resultado_random = Math.random() * (max - min) + salto;             //Método random para para obtener un valor aleatorio
console.log("Resultado:", resultado_random);

let resultado_round = Math.round(resultado_random);                     //Método round para para obtener un valor aleatorio redondeado
console.log("Resultado:", resultado_round);

let diametro= 10, area;
area = Math.round(Math.PI * Math.pow(diametro / 2 , 2) * 100) / 100;    //Métodos para tener el valor de pi y elevar la base a un exponente
console.log("Área =", area, "cm");                                      //Redondeado a 2 decimales


//-----EJERCICIO-----

let prenda1 = 10, prenda2 = 20, prenda3 = 30;
let descuento = 40;
let ahorro = (prenda1 + prenda2 + prenda3 ) * (descuento/100);
let precio = (prenda1 + prenda2 + prenda3 ) * (1- descuento/100);
console.log("Ahorro de", ahorro, "€");
console.log("Precio total de", precio, "€");

//-----INCREMENTOS Y DECREMENTOS-----

let me_gusta = 0;
me_gusta += 1;                                                          //me_gusta++ ó me_gusta = me_gusta + 1
me_gusta -= 1
console.log(me_gusta);

//-----EJERCICIO-----

const nombre = "Brais", email = "brais@correo.com";
let texto = nombre + " " + email;                                       //Concatenación desfasada                                         
console.log("Explicacion concatenación (Nombre + Email):", texto)       

console.log(`El nombre de usuario es ${nombre} y el correo es ${email}`)    //Concatenación actualizada, template string

//BOOLEANOS

let booleano1 = true, booleano2="true", booleano3= false;



