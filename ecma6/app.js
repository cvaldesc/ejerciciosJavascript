/*DECLARACION DE VARIABLES*/
let mensaje = "hola mundo";

if (1 === 1) {
	//otro contexto
	let mensaje = "hola mundo if";
	console.log(mensaje);
};

console.log(mensaje);

/*CONSTANTES*/

const PERSONA = {
	nombre: "Fernando",
	apellido: "herrera"
};
const VALORDOLAR = "3.14";
console.log( PERSONA );
console.log( VALORDOLAR);