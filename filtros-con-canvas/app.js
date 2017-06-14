function Canvas () {
	this.canvas = null;
	this.ctx = null;
	this.imagen = new Image();
}
Canvas.prototype = {
	inicio: function() {},
	procesarImagen: function() {},
	filtro: function() {},
	limpiar: function() {},
	cargar: function() {},
	dibujar: function() {}
}

function Filtro (canvas) {
	this.w = canvas.imagen.width;
	this.h = canvas.imagen.height;
	this.imagenData = canvas.ctx.getImagenData(10,10, this.w, this.h);
	this.data = imagenData.data;
}
window.onload = function(e){
	var archivoSelect = document.getElementById("archivo");
	var filtroSelect = document.getElementById("filtro");

	/***************
	EVENTOS
	****************/
	archivoSelect.onchange = function(e){
		canvas.cargar(archivoSelect.value);
	}
	filtroSelect.onchange = function(e){
		canvas.filtro(filtroSelect.value);
	}
	/*****************
	CODIGO
	******************/
	canvas = new Canvas();
	canvas.canvas = document.getElementById("canvas");

}