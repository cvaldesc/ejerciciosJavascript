function ejecutarFunction (fn) {
	if (fn() === 1 ) {
		return true;
	} else {
		return false;
	}
};

console.log(
	ejecutarFunction( function() {
		console.log("funcion anonima ejecutada");
		return 0;
	})
);