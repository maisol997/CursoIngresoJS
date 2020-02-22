function mostrar()
{
//while

//contador
//acumulador 


var contador;
var respuesta;
var numeroIngresado;
var acumulador;


contador = 0; //1º inicializar para ingresar. todo empieza en 0, 
//declarar contadores y variables.

acumulador = 0;
respuesta = "si"




//while (contador <5) //2º defino la logica.  (sabe que da 5 vueltas en while 0 1 2 3 4 y sale)
while (respuesta == "si") //mientras que sea esto sigue lo siguiente.
 {
	contador = contador+1; //3º cambio la variable de la logica. Me aseguro de que sale.

	numeroIngresado = prompt ("Ingrese el " + contador + "º numero :") //(si el contador etsa arriba de esto va a empezar en 1, si esta abajo empieza en 0)
	numeroIngresado = parseInt (numeroIngresado);




	 //para hacer el error:
// esto esta mal      while (numeroIngreso >0 && numeroIngreso<9) la validacion es lo incorrecto.
// esto es poco eficas      while (!(numeroIngreso >0 && numeroIngreso<9))
//// bien     while (numeroIngreso <0 || numeroIngreso >9)
while (numeroIngresado <0 || numeroIngresado>9)
numeroIngresado = prompt ("error, reingrese el " +contador+"º numero")
numeroIngresado = parseInt (numeroIngresado);



//TERMINO INGRESO DE DATOS




	 acumulador = acumulador + numeroIngresado;
	 respuesta = prompt ("si para seguir");

 //var = var + otra var o un literal (ej: 1)
	 //acumulador = acumulador +
	 //contador = contador +
	 //restador = restador +
	 //cantidadAlumnos = cantidadacumulador +
	 //sumanotas = sumanotas +


 } //FIN WHILE
 console.log("contador:"+ contador);
 console.log ("acumulador:" + acumulador);



contador 
}//FIN DE LA FUNCIÓN