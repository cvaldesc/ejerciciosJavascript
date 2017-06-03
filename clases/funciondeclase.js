function Persona(nombre, apellido) {
	// body... 
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = 30;
	
	//metodos
	this.imprimirPersona = function(){
		return this.nombre + " "+ this.apellido + " ("+this.edad+")";
	}
}

var juan = new Persona("Juan", "Valdes");

console.log(juan.imprimirPersona());