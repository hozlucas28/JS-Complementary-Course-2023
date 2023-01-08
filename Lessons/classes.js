/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   JavaScript no les aplica 'Hoisting' a las clases.
 *         El 'Constructor' se ejecuta al crear un objeto de dicha clase.
 *
 *
 * IMPORTANTE:
 *  			  - Un método estático es un método al que se puede acceder
 *                  sin inicializar un objeto de dicha clase. Los atributos
 *                  también pueden ser estáticos.
-------------------------------------------------------------------------- */

class Pig {
	#hungry = false; // Atributo privado.
	property = 'Mi propiedad'; // Atributo publico.
	static myStatic = 42; // Atributo estático.

	constructor(state = 'Null', hungry = false) {
		this.state = state;
	}

	// Método publico
	speak() {
		console.log(`Soy un cerdo ${this.state} - ${this.#hungry ? 'Hambriento' : 'Satisfecho'}`);
	}

	// Método estático
	static eat() {
		console.log(this.myStatic, '¡Estoy comiendo!');
	}
}

const pig1 = new Pig('feliz', true);
const pig2 = new Pig('triste', true);
const pig3 = new Pig();

pig1.speak();
pig2.speak();
pig3.speak();
Pig.eat();
