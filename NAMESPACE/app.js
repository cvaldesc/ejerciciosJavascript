DIBUJO = {
	canvas:null,
	bandera: false,
	pos:{},
	ctx:null,
	inicio:function (){
		if(this.canvas && this.canvas.getContext){
			this.ctx = this.canvas.getContext("2d");
			if (this.ctx) {
				return this.ctx;
			} else{
				alert("no acepta el navegador el canvas");
			}
		}else{
			alert("no acepta el navegador el canvas");
		}
	},
	ajusta:function (xx , yy){
		var posCanvas = this.canvas.getBoundingClientRect();
		console.log(posCanvas);
		var x = xx - posCanvas.left;
		var y = yy - posCanvas.top;
		return {x:x, y:y};
	},
	dibuja:function(inicio,fin){
		this.ctx.beginPath();
		this.ctx.strokeStyle = "yellow";
		this.ctx.lineWidth = 1;
		this.ctx.moveTo(inicio.x, inicio.y);
		this.ctx.lineTo(fin.x, fin.y);
		this.ctx.stroke();
	}
}

window.onload = function(){
	DIBUJO.canvas = document.getElementById("canvas");
	//eventos
	DIBUJO.canvas.onmousedown = function(e){
		this.pos = DIBUJO.ajusta(e.clientX, e.clientY);
		console.log(this.pos.x+" , "+ this.pos.y);
		this.bandera = true;
	}
	DIBUJO.canvas.onmouseup = function(e){
		this.bandera = false;
	}
	DIBUJO.canvas.onmousemove = function(e){
		if (this.bandera) {
			var fin = DIBUJO.ajusta(e.clientX, e.clientY);
			DIBUJO.dibuja(this.pos, fin);
			this.pos = fin;
		}
	}

	/****** INICIO ****/
	DIBUJO.inicio();

}