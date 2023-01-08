/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   El 'spread operator' toma los valores de un array o objeto y los
 *         esparce, según el contexto.
 *
 *
 * IMPORTANTE:
 *  			  - <...> =  Es el 'spread operator'.
-------------------------------------------------------------------------- */

const array1 = [1, 2, 3, 4];
const array2 = [5, 6];

const fn = (a, b, c) => console.log(a + b + c);
fn(...array1);

const newArray1 = [...array1, ...array2]; // Combina los arreglos.
const newArray2 = [...array1, 7, 8]; // Agrega nuevos elementos al arreglo.
console.log(newArray1);
console.log(newArray2);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 5, c: '¡Cerdo feliz!' };

const obj3 = { ...obj1 }; // Copia las propiedades del 'obj1'.
const obj4 = { ...obj1, ...obj2 }; // Copia las propiedades combinadas del 'obj1' y 'obj2'.
const obj5 = { ...obj1, loading: true, data: { prop: 'Hola', animal: 'dog' } }; // Copia las propiedades del 'obj1' y agrega nuevas propiedades.
console.log(obj3, obj4, obj5);
