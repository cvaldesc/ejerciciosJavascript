//para ver el tiempo de duracion de un proceso
//en este caso el for 
var inicio = new Date();
for (var i = 0; i < 15000; i++) {
	console.log("algo ...");
}

var fin = new Date();

//console.log(incio);
//console.log(fin);

var duracion = fin.getTime() - inicio.getTime();
//muestra el tiempo de ejecucion del proceso en milisegundos
console.log(duracion, "milisegundos");
//muestra el tiempo de ejecucion del proceso en segundos
console.log((duracion/1000), "segundos");