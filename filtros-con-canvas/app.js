function Canvas () {
	this.canvas = null;
	this.ctx = null;
	this.imagen = new Image();
	console.log(this.imagen.crossOrigin);
}
Canvas.prototype = {
	inicio: function() {
		if(this.canvas && this.canvas.getContext){
			this.ctx = this.canvas.getContext("2d");
			if (this.ctx) {
				return this.ctx;
			} else{
				return null;
			}
		}
	},
	procesarImagen: function() {
		canvas.limpiar();
		this.ctx.drawImage(this.imagen,10,10);
	},
	filtro: function(tipo) {
		if(tipo == "oscurecer"){ 
			new Oscurecer(this); 
		}if(tipo == "aclarar"){ 
			new Aclarar(this); 
		}if(tipo == "grises"){ 
			new Grises(this); 
		}if(tipo == "negativo"){ 
			new Negativo(this); 
		}if(tipo == "flip"){ 
			new FlipHorizontal(this); 
		}

	},
	limpiar: function() {
		var w = canvas.imagen.width;
		var h = canvas.imagen.height;
		this.ctx.clearRect(250,10,w,h);
	},
	cargar: function(archivo) {

		this.imagen.src = "imagenes/"+archivo;
		this.imagen.onload = function(e){
			canvas.procesarImagen();
		}
	},
	dibujar: function(datos) {
		this.ctx.putImageData(datos,250,10);
	}
}

function Filtro (canvas) {
	this.w = canvas.imagen.width;
	this.h = canvas.imagen.height;
	
	this.imagenData = canvas.ctx.getImageData(10,10, this.w, this.h);
	console.log(this.imagenData);
	this.data = this.imagenData.data;
}
function Oscurecer(canvas){
	f = new Filtro(canvas);
	for (var i = 0; i < f.data.length; i+=4) {
		f.data[i] -= 100;//rojo
		f.data[i+1] -= 100;//verde
		f.data[i+2] -= 100;//azul
	}
	canvas.dibujar(f.imagenData);
}
function Aclarar(canvas){
	f = new Filtro(canvas);
	for (var i = 0; i < f.data.length; i+=4) {
		f.data[i] += 100;//rojo
		f.data[i+1] += 100;//verde
		f.data[i+2] += 100;//azul
	}
	canvas.dibujar(f.imagenData);
}
function Grises(canvas){
	f = new Filtro(canvas);
	for (var i = 0; i < f.data.length; i+=4) {
		var gris = (f.data[i]+f.data[i+1]+f.data[i+2])/3
		f.data[i] = gris;//rojo
		f.data[i+1] = gris;//verde
		f.data[i+2] = gris;//azul
	}
	canvas.dibujar(f.imagenData);
}
function Negativo(canvas){
	f = new Filtro(canvas);
	for (var i = 0; i < f.data.length; i+=4) {
		f.data[i] = 255 -f.data[i];//rojo
		f.data[i+1] = 255 -f.data[i+1];//verde
		f.data[i+2] = 255 -f.data[i+2];//azul
	}
	canvas.dibujar(f.imagenData);
}
function FlipHorizontal(canvas){
	f = new Filtro(canvas);
	for (var x = 0; x < f.w/2; x++) {
		for (var y = 0; y < f.h; y++) {
			var i = (y * f.w + x);
			var j = (y * f.w + ((f.w-1)-x));

			//valores temporales
			var p1 = f.data[i*4];
			var p2 = f.data[i*4+1];
			var p3 = f.data[i*4+2];

			//paso el primer lado
			f.data[i*4] = f.data[j*4];
			f.data[i*4+1]  = f.data[j*4+1];
			f.data[i*4+2]  = f.data[j*4+2];

			//paso el valor temporal
			f.data[j*4] = p1;
			f.data[j*4+1]  = p2;
			f.data[j*4+2]  = p3;
		}
	}
	canvas.dibujar(f.imagenData);
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
	if(canvas.inicio()){
		canvas.cargar("imagen1.jpg");
	}else{
		alert("tu navegador no soporta canvas de html5");
	}

}