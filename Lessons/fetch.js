/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Las declaraciones dentro de una función asíncrona deben utilizar
 * 		   la palabra reservada <await>.
 *
 *
 * IMPORTANTE:
 *  			  - El <body> debe ser enviado como un string.
 * 				  - Hay que indicarle al servidor que el <'Content-Type'>
 * 					es un JSON, mediante su declaración <'application/json'>.
-------------------------------------------------------------------------- */

const url = 'https://jsonplaceholder.typicode.com/users';

// Método GET
// fetch(url)
// 	.then((resp) => resp.json())
// 	.then((data) => console.log(data));

// Método POST
// fetch(url, {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		Authorization: 'Bearer MiTokenDeAutorización'
// 	},
// 	body: JSON.stringify({
// 		name: 'Cerdo Feliz',
// 		website: 'google.com'
// 	})
// })
// 	.then((resp) => resp.json())
// 	.then((data) => console.log(data));

// Método POST - Por función asíncrona
const fn = async () => {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer MiTokenDeAutorización'
		},
		body: JSON.stringify({
			name: 'Cerdo Feliz',
			website: 'google.com'
		})
	});
	const data = await response.json();
	console.log(data);
};

fn();
