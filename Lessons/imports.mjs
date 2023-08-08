/* --------------------------------------------------------------------------
 * IMPORTANTE:
 *  			  - Para utilizar la segunda forma de importación
 *                  los archivos de origen y destino deben tener la
 *                  extensión: '.mjs'.
-------------------------------------------------------------------------- */

// Primera forma
// const pigsObj = require('./exports');
// console.log(pigsObj);

// Segunda forma
// import happyPigs, { sadPigs, othersPigs } from './exports.mjs';
import { happyPigs, sadPigs, othersPigs, fn1, fn2 } from './exports.mjs';
console.log(happyPigs);
console.log(sadPigs);
console.log(othersPigs);
fn1();
fn2();
