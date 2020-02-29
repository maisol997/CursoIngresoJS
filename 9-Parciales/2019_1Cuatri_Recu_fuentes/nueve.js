/*Bienvenidos. 
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y 
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.

Testeo con los siguientes valores 
(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
(m=teem;p = 10; t =0 ) 
(m=llut;p = 150(mal), 15(bien); t =-13 ) 
(m=fpy;p = 45; t =-12 )
*/

function mostrar()
{
    var nombre;
    var peso;
    var temperatura;
    var respuesta;

    respuesta = "s";

    while (respuesta == "s"){

        nombre = prompt ("Ingrese nombre de un animal");
        while (!isNaN(nombre)) //puede pasar la validacion.
        {
        nombre = prompt ("Ingrese nombre de un animal");
        }
        
            peso = prompt ("Ingrese peso del animal");
            parseInt (peso);

        while (isNaN (peso) || peso <1 || peso >1000)
        {
            peso = prompt ("Ingrese peso del animal");
        }

            temperatura = prompt ("Ingrese temperatura del hábitat");
            parseInt (temperatura);

        while (temperatura <-30 || temperatura > 30)
        {
            temperatura = prompt ("Ingrese temperatura del hábitat");
        }



    }



    respuesta = prompt ("Desea continuar");


}
