function enumera (objeto){
	for(var prop in objeto){
		document.write((objeto.hasOwnProperty(prop)) ? "own":"prototype"  );
		document.write(": "+prop+"= "+objeto[prop]);
		document.write("<br>" );
	}
	document.write("<br>");
}

//Clase principal
function Animal () {}
Animal.prototype.nombre = "Animal";
Animal.prototype.toString = function(){
	return this.nombre;
}

function Mamifero () {}

//copiamos el prototipo en ves de la herencia
Mamifero.prototype = Animal.prototype;

Mamifero.prototype.nombre = "Mamifero";

function Gato (color, genero) {	
	this.color = color;
	this.genero = genero;
}

//herencia
Gato.prototype = Mamifero.prototype;


//modificar el prototype se hace despues del a herencia 
Gato.prototype.nombre = "Gato";
Gato.prototype.saludar = function () {
	return "hola, soy un "+ this.nombre + " de color "+ this.color+" y soy "+this.genero;
}

//instanciar
var benito = new Gato("azul","macho");
benito.nombre = "bemito";
enumera(benito);

//animal generico
var animal = new Animal();
enumera(animal);
