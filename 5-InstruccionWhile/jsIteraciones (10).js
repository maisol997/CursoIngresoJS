function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta= true;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioDePositivos =0;
	var promedioDeNegativos =0;
	var diferenciaPositivosYNegativos = 0;



	while(respuesta)
	{
	/*	while(respuesta) {
		var numero = prompt ("Ingrese un numero");
		respuesta = parseInt (numero);

		}

		while (isNaN(numero)) {
			numero = prompt ("Error: Ingrese un numero");
			numero = parseInt (numero);
			}*/

do {
	var numero = prompt ("Ingrese un numero");
	numero =parseInt (numero);

} while (isNaN(numero));
	console.log (numero);

	
	if (numero > 0) {
		//punto 2
		sumaPositivos += numero;
		//punto 3
		contadorPositivos++;
	} else if (numero <0) {
		//punto 1
		sumaNegativos += numero;
		//o sumaNegativos = sumaNegativos + numero;
		//punto 4
		contadorNegativos++;


	} else { //cero
		//punto 5
		contadorCeros++;
	}

	if (numero % 2 == 0){
			contadorPares++;
	}

	respuesta = confirm ("Desea continuar");

	} //fin while


	//punto 7 
	promedioDePositivos = sumaPositivos / contadorPositivos;

if (promedioPositivos >0){
	document.write ("Promedio de negativos: " + promedioDeNegativos + "<br >");
	
}
else {
	document.write ("Promedio de negativos: Da menor a 0" + "<br >");
	
}
	//punto 8
 promedioDeNegativos = sumaNegativos / contadorNegativos;
	//punto 9
diferenciaPositivosYNegativos = sumaPositivos - sumaNegativos;


document.write ("Suma positivos: " + sumaPositivos + "<br >");
document.write ("Suma negativos: " + sumaNegativos + "<br >");


document.write ("Cantidad numeros positivos: " + contadorPositivos + "<br >");
document.write ("Cantidad numeros negativos: " + contadorNegativos + "<br >");
document.write ("Promedio de positivos: " + promedioDePositivos + "<br >");
document.write("Diferencia: " + diferenciaPositivosYNegativos + "<br >");



}//FIN DE LA FUNCIÓN