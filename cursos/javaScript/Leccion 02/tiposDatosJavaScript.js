
// concatenacion de cadenas
var nombre = 'juan';
var apellido = 'coneo';

var nombreCompleto= nombre + ' ' + apellido;
console.log(nombreCompleto);

// otra forma de concatenar

var nombreCompleto2 = 'carlos' + ' ' + 'coneo';
console.log(nombreCompleto2);

//concatenar numero a cadena

var edadJuan = nombre + 26;
console.log(edadJuan);

/*
aqui vemos que no se realiza una suma de los numeros
si no que se concatenan los valores 26 y 4 
convirtiendolos a una cadena
*/
var edadJuan = nombre +26 + 4;
console.log(edadJuan)

// caso si se quisiera suma

var suma = nombre + (26+4);
console.log(suma); 

/*
otra forma de demostrar el orden de como
javaScript evalua las expresiones de izq a derecha
*/
suma = 2+4 + nombre;
console.log(suma);