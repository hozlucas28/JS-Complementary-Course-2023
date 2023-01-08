/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   XXX.
 *
 *
 * IMPORTANTE:
 *  			  - <filter()> = Devuelve los valores que cumplen con la condición.
 *  			  - <map()> = Aplica una operación a cada elemento de un arreglo.
 *  			  - El parametro <acum> de la función <reduce()> se trata del
 *                  retorno de la iteración anterior (bola de nieve).
-------------------------------------------------------------------------- */

const array = [5, 2, 1, 3, 4];

const users = [
	{ id: 1, name: 'Lucas Hoz' },
	{ id: 2, name: 'Juan Martinez' },
	{ id: 3, name: 'Emma Gonzales' },
	{ id: 4, name: 'Cristian Mendez' }
];

const getMax = (a, b) => Math.max(a, b);

const result = array.filter((element, i) => {
	console.log(i);
	return element > 2;
});
console.log(result);

const mapped = array.map((element) => element * 2);
console.log(mapped);

const mappedUsers = users.map((user) => `<h1>${user.name}</h1>`);
console.log(mappedUsers);

// const reduced = array.reduce(getMax);
// const reduced = array.reduce((acum, element) => acum + element, 0);
// const reduced = users.reduce((acum, user) => `${acum == '' ? '' : `${acum}, `}${user.name}`, '');
const reduced = users.reduce((acum, user) => {
	if (user.id < 2) {
		return acum;
	}
	return acum.concat(user);
}, []);
console.log(reduced);
