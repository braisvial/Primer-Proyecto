//-----PROGRAMACION ORIENTADA A OBJETOS-----\\
const producto = {
    nombre: "tablet",
    precio: 500
}

//-----CONSTRUCTOR DE OBJETO / CLASE-----\\

function Producto_clase(nombre, precio, disponibilidad = false, categoria = "play") {
    this.nombre = nombre;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
    this.categoria = categoria;
}

//-----INSTANCIA-----\\

const producto2 = new Producto_clase("monitor", 800, true)
const producto3 = new Producto_clase("pc", 2500)

console.log(producto2)
console.log(producto3)
console.table(producto3)

function Fecha_clase(dia, mes, año) {
    this.año = año;
    this.mes = mes;
    this.dia = dia;
}

const fecha1 = new Fecha_clase(1, "junio", 2023)
console.log(fecha1)

//-----PROTOTYPES-----\\

Fecha_clase.prototype.formatear_fecha = function () {
    console.log(`Hoy es día ${this.dia} de ${this.mes} del ${this.año}`)
}

const fecha2 = new Fecha_clase(21, "mayo", 1996)
console.log(fecha2.formatear_fecha())

//-----OTRA FORMA DE CREAR CLASES-----\

class Producto_clase2 {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio
    }
    formatear_producto2() {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}€`)
    }
}

const nuevo_producto = new Producto_clase2("nombre objeto", 1000)


//-----EJERCICIO-----

class libro {
    constructor(nombre, autor, precio, isbn) {
        this.nombre = nombre;
        this.autor = autor
        this.precio = precio;
        this.isbn = isbn;
    }

    formatear_libro() {
        console.log(`El libro ${this.nombre} de ${this.autor} tiene un precio de ${this.precio}€ y un código ISBN: ${this.isbn}`)
    }
}

const libro1 = new libro("Los cantos de Hyperion", "Dan Simmons", 190, "978-987-25620-2-1")
console.log(libro1)
libro1.formatear_libro()


//-----HERENCIA-----\\

class categoria extends libro {
    constructor(nombre, autor, precio, isbn, categoria) {
        super(nombre, autor, precio, isbn);
        this.categoria = categoria;
    }
    formatear_categoria() {
        console.log(`El libro "${this.nombre}" de ${this.autor} tiene un precio de ${this.precio}€ con un código ISBN: ${this.isbn} y pertenece a la categoria "${this.categoria}".`)
    }
}

const libro2 = new categoria("Los cantos de Hyperion", "Dan Simmons", 190, "978-987-25620-2-1", "Ciencia Ficción")
libro2.formatear_categoria()

//-----EJERCICIO-----

class coche{
    constructor(marca, año_compra, motor, matricula){
        this.marca = marca;
        this.año_compra = año_compra;
        this.motor = motor;
        this.matricula = matricula
    }
    años_coche(){
        console.log(`El coche ${this.marca} de motor ${this.motor} y matrícula ${this.matricula} tiene ${2023 - this.año_compra} años`)
    }
}

const coche1 = new coche("Aston Martin", 1990, "Mercedes", "FAD3333" )
coche1.años_coche()