function mostrar()
{

	var contador=0;
	var acumulador=0;	
	var interaciones = 5;

	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;


while (contador < interaciones)
{

	var numero = NaN;

	while (isNaN(numero)) {
		numero = prompt ("Ingrese un numero");
		numero = parseInt (numero);
}


	contador ++;

 


}

 acumulador += numero;


}

}//FIN DE LA FUNCIÓN