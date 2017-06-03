//para sumar usar las propiedades set
var fecha = new new Date(2016, 9, 20); //fecha a la que queremos acudir

//obtengo la fecha
console.log(fecha);

//con setDate le puedo sumar dias 
//cuando le sumo mas de los dias del mes cambia al mes sig
fecha.setDate(32);

console.log(fecha);
/* -------------------------------------- */

//para cambiar la fecha mejor hacer un archivo para moficar y cambiar el prototype de la fecha
var fecha = new Date(2016, 9, 20);

Date.prototype.sumarDias = function (dias) {
	this.setDate(this.getDate()+ dias);
	return this;
}
Date.prototype.sumarAnios = function (anios) {
	this.setFullYear(this.getFullYear() + anios);
	return this;
}

console.log(fecha);
console.log(fecha.sumarDias(20)); //a la variable le suma 20 dias
console.log(fecha.sumarAnios(2)); //a la variable le suma 2 años