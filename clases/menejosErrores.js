try {
	/* ejemp 1
		var a = 100;
	
		if( a === 100){
			throw 'que mal';
		}else{
			throw 'oh oh!';
		}
		console.log("El valor de a:", a);
	*/
	
	/* ejemp 2
		throw new Error("error tipo 1");
		console.log("eto nunca se ejecuta")
	*/

	// puede servir para hacer un catalogo de error 
	throw 1; //n cualquier numero
} 
//opcional pero si no va hay que colocar finally
catch(e) {
	
	
	/* ejemp 1
		if(e === "que mal"){
			console.log("error tipo 1");
		}
		if(e === "oh oh!"){
			console.log("error tipo 2");
		}
	*/
	/* ejemp 2
		console.log(e.message);
	*/

	registroError( e );
}
// rl finally siempre se ejecuta funciono o no el codigo el try
finally{
	console.log("finalmente");
}

//esta funcion puede servir para guardar el error en la base de datos 
function registroError (e) {
	var hora = new Date();
	console.log("se regitro un error: ", e, " a las: ", hora);
}

