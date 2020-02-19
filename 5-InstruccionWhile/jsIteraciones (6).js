function mostrar()
{

	var contador=0;
	var acumulador=0;	

	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;


while (contador < 5) {

	var numero = prompt ("ingrese un numero");
	numero = NaN;
	numero = parseInt (numero);

	if (contador ==3){
	break;
	}
			
		


	while (isNaN(numero)) {
		numero = prompt ("Error: Ingrese un numero valido");
		numero = parseInt (numero);

console.log (numero);

	
}


	contador ++;

 


}

 acumulador += numero;



}//FIN DE LA FUNCIÓN