function mostrar()
{

	var contador=0;
	// declarar variables
var maximo;
var minimo;
var primeraVez = true;
var respuesta = "si";

	while(respuesta !="no")
	{
		do {

		
		var numero = prompt ("Ingrese un numero");
		respuesta = parseInt (numero);
	}
		

		while (isNaN(numero));


	if (primeraVez){
		primeraVez = false;

		maximo = numero;
		minimo = numero;

	} else {
		if (numero > maximo) {
			maximo = numero;
		}
		if (numero < minimo) {
			minimo = numero;
		}
	}
	respuesta = confirm ("Desea continuar");

document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;
	}




}//FIN DE LA FUNCIÓN