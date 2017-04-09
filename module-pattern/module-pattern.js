var contador = (function() {
	var valor = 0; // privado

	var incrementar = function() {
		valor++;
	};

	var reset = function() {
		console.log('Valor do contador:', valor);
	};

	return {
		incrementar: incrementar,
		reset: reset
	}

}());

contador.incrementar();
contador.incrementar();
contador.reset();