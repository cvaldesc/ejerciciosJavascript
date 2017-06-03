var arr = [
	true,
	{
		nombre: "fernando",
		apellido: "Herrera"
	},
	function() {
		console.log("viviendo en un arreglo.");
	},
	function (persona) {
		console.log(persona.nombre + " "+ persona.apellido);
	},
	[
		"Fernando",
		"Carlos",
		"Pedro",
		[
			"Andres",
			"pablo",
			function  () {
				console.log(this);
			}
		]
	]


];

console.log( arr);
console.log(arr[0]);
console.log(arr[1].nombre + " "+ arr[1].apellido);

arr[2]();

//se invoca la funcion del arreglo 
//y se le pasa como parametro el objeto anonimo
arr[3]( arr[1]);

console.log(arr[4][2]);
console.log(arr[4][3])

var arreglo2 = arr[4][3];
arreglo2[1] = "Pabla!";

console.log( arreglo2 );
console.log( arr);

arreglo2[2]();