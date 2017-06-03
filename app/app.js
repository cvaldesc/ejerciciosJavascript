console.log("hola");

function createCookie(nombre, valor) {
	var valor = escape(valor);
	var hoy = new Date();
	hoy.setMonth(hoy.getMonth() + 1);

	document.cookie = nombre+"="+valor+";expires="+ hoy.toUTCString()+";";
}

function deleteCookie (nombre) {
	var hoy = new Date();
	hoy.setMonth(hoy.getMonth() - 1);

	document.cookie = nombre+"="+valor+";expires="+ hoy.toUTCString()+";";
}

function getCookie (nombre) {
	var cookies = document.cookie;

	var cookieArr = cookies.split("; ");
	console.log( cookieArr );

	for (var i = 0; i < cookieArr.length; i++) {
		var parArr = cookieArr[i].split("=");
		cookieArr[i] = parArr;

		if (parArr[0] === nombre) {
			return unescape( parArr[1] );
		}
	}
	return undefined;
}

createCookie("nombre", "fernando");
createCookie("correo", "fernando@gmail.com");
createCookie("direccion", "calle, ciudad, numero");

getCookie("nombre");

console.log(getCookie("direccion"));