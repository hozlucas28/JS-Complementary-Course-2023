/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Las funciones de tipo flecha heredan el contexto 'this' del scope
 * 		   anterior.
 *
 *
 * IMPORTANTE:
 *  			  - Las funciones de tipo flecha no pueden ser llamadas con
 * 					la instrucción 'new'.
-------------------------------------------------------------------------- */

const myArrowFunction = () => {
	this.prop = 'propiedad';
	return this;
};

const myReturn = myArrowFunction();
console.log(myReturn);
