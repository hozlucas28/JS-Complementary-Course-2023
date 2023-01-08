/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   El parámetro rest de una función siempre deber estar definido
 * 		   como ultimo parámetro.
 *
 *
 * IMPORTANTE:
 *  			  - XXX.
-------------------------------------------------------------------------- */

const rest = (a, b, ...args) => {
	console.log(a, b);
	console.log(args);
};
rest(1, 2, 3, 3, 4, 5, 6);

const obj = {
	a: 1,
	b: 2,
	c: 3,
	d: 4
};

const { a, b, ...restObj } = obj; // Obtengo las propiedades del objeto y les asigno una constante.
console.log(a, b);
console.log(restObj);

const array = [1, 2, 3, 4, 5];
const [a2, b2, ...restObj2] = array; // Obtengo los elementos del arreglo y les asigno una constante.
console.log(a2, b2);
console.log(restObj2);

const useState = () => ['value', () => {}];
const [value, fn] = useState(); // Obtengo la cadena y función retornadas por la función flecha.
console.log(value, fn);
