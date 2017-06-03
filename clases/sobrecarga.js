//sobrecarga de operadores llamar a una funcion principal
//dentro de otra funcion

//funcion principal
function crearProducto(nombre, precio) {
	// para validar si no viene dato
	nombre = nombre || "sin nombre";
	precio = precio || 0;

	console.log("Producto: ", nombre, "Precio: ",precio); 
}

// cambiar el nombre de la funcion pero invocarla dentro de esta
function crearProducto100 (nombre) {
	crearProducto(nombre, 100);
}

function crearProductoCamisa (precio) {
	crearProducto("camisa", precio);
}

crearProducto("lapiz");
crearProducto100("Corrector");
crearProductoCamisa(74);