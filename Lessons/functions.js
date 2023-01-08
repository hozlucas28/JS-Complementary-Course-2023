/* --------------------------------------------------------------------------
 * APUNTES:
 *		   JavaScript declara las funciones al principio del archivo, es
 *         decir, les aplica 'Hoisting'.
 * 		   Las funciones en JavaScript tienen un contexto llamado 'this',
 *         que puede ser capturado al llamar a la función con la palabra
 * 		   reservada 'new'.
 *
 * 
 * IMPORTANTE:
 *  			  - Al llamar una función con la palabra reservada 'new',
 * 					el retorna de la función es ignorado.
-------------------------------------------------------------------------- */

function myFunction() {
	this.prop = 'propiedad';
	return '¡Hola Mundo!';
}

// Declara la función prototipo: 'lala'
myFunction.prototype.lala = function PrototypeFunction() {};

// Almacena un string
const myFirstReturn = myFunction();
console.log(myFirstReturn);

// Almacena un objeto
const mysecondReturn = new myFunction();

// Muestra los atributos y un objeto con las funciones prototipo.
console.log(mysecondReturn);
console.log(mysecondReturn.__proto__);
