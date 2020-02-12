function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom;
	var min;
	var max;

	min = 1;
	max = 10;

notaRandom = Math.floor (Math.random()*(max - min) ) + min;
console.log (notaRandom);

if (notaRandom >= 9 ) {
		alert (notaRandom + "-EXCELENTE");
	}
	else {
// entre 1 y 8
	if (notaRandom >=4) {
	alert (notaRandom + "-APROBO");

	}

else {
alert (notaRandom + "-Vamos, la proxima se puede");
}

}
	


}//FIN DE LA FUNCIÓN