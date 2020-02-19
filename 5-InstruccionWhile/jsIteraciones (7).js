function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta= 'si';
	var iterador;

	iterador = prompt ("Ingresar cantidad de veces");
	iterador = parseInt (iterador)


		while (isNaN(iterador)) {
			iterador = prompt ("Ingrese cantidad de veces");
			iterador = parseInt (iterador)
		}

		while (contador <iterador){
			var numero = prompt ("Ingrese un numero");

			numero = parseInt (numero);
			break;

		}
		while (isNaN(numero)){
			numero = prompt ("Error: Ingresa un numero valido");
			numero = parseInt (numero);

		}


contador ++;
acumulador += numero;




	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;






}//FIN DE LA FUNCIÓN