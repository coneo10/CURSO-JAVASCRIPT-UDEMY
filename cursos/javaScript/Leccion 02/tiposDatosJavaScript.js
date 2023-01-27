/*
Ejemplo de tipos de datos en
javaScript */

//Tipo de dato string 

var nombre="carlos";
console.log(nombre);

//Tipo de dato numerico 
var numero="26";
console.log(numero);


//tipo de dato object
var objeto={
    nombre: "Sara", 
    apellido:"Lopez",
    telefono:"3017913870"
}

console.log(objeto);


// variable dinamica asignando valor a variable previamente definida

nombre=10;

//operador typeof para mostrar de que tipo es la variable
console.log(typeof nombre);

console.log(typeof objeto); 

console.log()



// tipo de dato bolean (true, false)

var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//tipo de dato function
function miFuncion() {}
console.log(miFuncion);
console.log(typeof miFuncion)

// tipo de dato symbol

var simbolo = Symbol();
var miSimbolo = Symbol('tipo cadena');
console.log(typeof miSimbolo)

// tipo clase es una funcion tambien 

class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(persona);
console.log(typeof persona);

// tipo de dato undefined

var x;
console.log(typeof x);

/* undefined tambien 
como valor a la variable
*/
x = undefined;
console.log(typeof x);

// palabra null= ausencia de valor
var y =null;
console.log(typeof y);


//ARREGLOS O ARRAY 'Son de tipo object"

var autos = ['BMW', 'Audi', 'TOYOTA'];
console.log(autos);

console.log(typeof autos);

var x = '';
console.log(x);
console.log(typeof x); 