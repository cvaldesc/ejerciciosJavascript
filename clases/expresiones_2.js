var texto = "Aeropuerto";
console.log( texto );

var arr = text.match( /[aeiou]{2,2}/ig); // trae los diptongos

console.log(arr );//=> {"ae", "ue"}


// ejemplo 2
var cadena = "La Respuesta de la suma es: 45 + 60 = 105";
conosle.log(cadena);

var arregelo = text.match( /\d{1,}|respuesta/ig);