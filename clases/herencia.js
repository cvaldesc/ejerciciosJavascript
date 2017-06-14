function Animal () {
	this.nombre = "animal";
	this.toString = function(){
		return this.nombre;
	}
}
function Mamifero () {
	this.nombre = "Mamifero";
}
function Gato (color, genero) {
	this.nombre = "Gato";
	this.color = color;
	this.genero = genero;
	this.saludar = function () {
		return "hola, soy un "+ this.nombre + " de color "+ this.color+" y soy "+this.genero;
	}
}

//herencia
Mamifero.prototype = new Animal();
Gato.prototype = new Mamifero();

//instanciar
var benito = new Gato("azul","macho");

console.log(benito.saludar());
console.log(benito.toString());