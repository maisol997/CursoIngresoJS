function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom;
	var min;
	var max;

	min = 1;
	max = 11;

	notaRandom =  Math.floor (Math.random() * (max - min)) + min;
	console.log (notaRandom);

	if (notaRandom >= 9 || notaRandom >= 11)
	{
		alert ("Excelente: " + notaRandom);

	} else if ( notaRandom >=4 && notaRandom <=8){
		alert ("Aprobado: " + notaRandom);
	} else { 
		alert ("PAra la proxima kpo HASTA LA PROXIMAAAA: " + notaRandom)
	}
	


}//FIN DE LA FUNCIÓN
