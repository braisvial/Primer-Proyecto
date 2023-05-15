alert("Primer Archivo");

//Como definir variables

/*
- var   (desfasada)
- let   (variables que se pueden modificar)
- const (variables que son constantes)*/

let producto = "valor";                         // palabra_reservada nombre_de _la _variable = valor_de_la_variable
let disponible;
disponible = true;
disponible = false;

// const categoria = "valor_inicial";
// categoria = "valor_modificado";              Una constante no se puede modificar

//JavaScript no es un lenguaje tipado, el valor de la variable define el tipo de dato de la variable (string, number, boolean)

let cadena = "texto", numero = 3, condicion = true;

console.log("Producto:", producto);
console.log("Disponible:", disponible);
console.log("Cadena:", cadena);
console.log("Número:", numero);
console.log("Condición:", condicion);

//Ejercicio

let producto1 = "café", categoria1 = "descanso", disponible1= false;
console.log("El producto", producto1, "pertenece a la categoría", categoria1, "y tiene disponibilidad", disponible);

//Todo lo visto con let se puede hacer con var pero tiene ciertos errores que se corrigieron con let
//Var tiene un ámbito global mientras que Let tiene un ámbito local
//Las variables Const siempre hay que inicializarlas

const constante1 = 1;
console.log(constante1);