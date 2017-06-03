var carro = {
	color: "Blanco",
	marca: "Mazda",
	imprimir: function () {
		var salida = this.marca + " - " + this.color;
		return salida;
	}
}
var carro2 = {
	color: "Rojo",
	marca: "Toyota"
}
console.log( carro.imprimir() );

var logCarro = function (arg1 , arg2) {
	console.log("Carro: ", this.imprimir() );
	console.log("argumentos: ", arg1, arg2);
	console.log("=============================");
}

var logModeloCarro = logCarro.bind(carro);
logModeloCarro("abc", "xyz");

// es mas corto
logModeloCarro.call(carro, "123", "456");

logModeloCarro.apply(carro, ["arg1", "arg2"]);

var funcionPrestada = carro.imprimir.call(carro2);

console.log(funcionPrestada);

