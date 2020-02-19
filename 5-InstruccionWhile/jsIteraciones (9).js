function mostrar()
{

	var contador=0;
	// declarar variables
var maximo;
var minimo;
var primeraVez = true;
var respuesta = true;

	while(respuesta)
	{
		var numero = prompt ("Ingrese un numero");
		respuesta = parseInt (numero);
		
		

		while (isNaN(numero)){
			numero = prompt ("Error: Ingrese un numero");
			numero = parseInt (numero);

	}

	if (primeraVez){
		primeraVez = false;

		maximo = numero;
		minimo = minimo;

	} else {
		if (numero > maximo) {
			maximo = numero;
		}
		if (numero < minimo) {
			minimo = numero;
		}
	}
	respuesta = confirm ("Desea continuar");
	}




}//FIN DE LA FUNCIÓN