/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Tener el cuenta que se puede utilizar la palabra reservada 'export'
 * 		   para exportar variables, constantes o funciones el la línea donde
 * 		   fueron declaradas.
 *
 *
 * IMPORTANTE:
 * 				  - Las funciones también pueden ser exportadas.
 *  			  - Para utilizar la segunda forma de exportación los
 * 					archivos de origen y destino deben tener la
 * 					extensión: '.mjs'.
-------------------------------------------------------------------------- */

const happyPigs = ['Cerdo 1', 'Cerdo 2', 'Cerdo 3'];
const sadPigs = ['Cerdo 1 (triste)', 'Cerdo 2 (triste)'];
const othersPigs = [];

const fn1 = () => {
	console.log('¡Soy la función uno!');
};

const fn2 = () => {
	console.log('¡Soy la función dos!');
};

// Primera forma
// module.exports = {
// 	happyPigs,
// 	sadPigs
// };

// Segunda forma
// export default happyPigs;
export { happyPigs, sadPigs, othersPigs, fn1, fn2 };
