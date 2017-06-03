//expresiones regulares

//se pueden definir 
//var reg1 = RegExp("a");
//var reg2 = /a/;
// las expresiones tiene controladores
// i = no importa si es alta o baja
// g = toda las apariciones
// m = multilinea

var texto = "Hola Mundo.";

var arr = [];

//rango entre la a la z en alta y bajas
arr = texto.match( /[a-zA-Z]/ );

//rango entre 1 y 9 como no hay devuelve null
arr = texto.match( /[1-9]/ );

//devuelve el primer caracter si es a
arr = texto.match( /^a/);

//devuelve el ultimo caracter si es a
arr = texto.match( /a$/);

//devuelve n cantidades de caracteres 
arr = texto.match( /.../);

//ejemplos
//primer caracter si es una H seguida de cualquier letra
arr = texto.match( /^H[aeiou]/);

//espacios
arr = texto.match( / /);

//busca cualquier separacion que alla tab o espacios
arr = texto.match( /\s/ );

//busca cualquier palabra excepto la ñ, es igual /[a-zA-Z0-9]/
arr = texto.match( /\w/ );

//busca cualquier numero es de decimal, es igual /[0-9]/
arr = texto.match( /\d/ );

console.log(arr);

//buscar con controlador
var textoMas = "Hola mundo. \nQué tal?";

//buscar las vocales no importa si es altas o bajas o esta en otro carril
var arrMas = texto.match( /[aeiou]|[áéíóúñ]/ig);

console.log(arrMas);

var txtMas = "Hola Mundoooo.";

//todos los caracteres despues del caracter especifico 
var arrAms = txtMas.match(/o+/g);

//devuelve todo pero agrupa los mismos cuando vienen juntos
arrAms = txtMas.match(/o*/);
//devuelve todo 
arrAms = txtMas.match(/o?/);

console.log(arrAms);
