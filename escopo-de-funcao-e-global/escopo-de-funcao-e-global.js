var nome = 'Algaworks'; // variável global

var capitalizar = function() {
	var nome = 'Algaworks'.toUpperCase();
}

capitalizar();
console.log('nome', nome);

var capitalizar2 = function () {
	nome = 'Algaworks'.toUpperCase();
}

capitalizar2();
console.log('nome', nome);

