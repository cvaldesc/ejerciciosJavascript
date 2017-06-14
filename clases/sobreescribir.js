function enumera (objeto){
	for(var prop in objeto){
		document.write((objeto.hasOwnProperty(prop)) ? "own":"prototype"  );
		document.write(": "+prop+"="+objeto[prop]);
		document.write("<br>" );
	}
	document.write("<br>");
}

function Animal () {}
Animal.prototype.nombre = "Animal";
Animal.prototype.toString = function(){
	return this.nombre;
}

function Mamifero () {}
Mamifero.prototype.nombre = "Mamifero";

function Gato (color, genero) {	
	this.color = color;
	this.genero = genero;
}

//herencia
Mamifero.prototype = new Animal();
Gato.prototype = new Mamifero();


//modificar el prototype se hace despues del a herencia 
Gato.prototype.nombre = "Gato";
Gato.prototype.saludar = function () {
	return "hola, soy un "+ this.nombre + " de color "+ this.color+" y soy "+this.genero;
}

//instanciar
var benito = new Gato("azul","macho");
enumera(benito);

var cucho = new Gato("rojo","macho");
enumera(cucho);