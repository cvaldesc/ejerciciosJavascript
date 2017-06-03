//contexto de funciones
function crearFunciones() {
	var arr = [];
	var numero = 1;

	for (var numero = 0; numero < 5 ; numero++) {
		arr.push(
			(function(numero){
				return function () {
					console.log( numero );
				}
			})(numero)
		);
	}

	return arr;
}

var funciones = crearFunciones();

funciones[0]();
funciones[1]();
funciones[2]();