
function mostrar()
{
var ancho;
var largo;
var perimetro;

ancho = prompt("Ingrese ancho");
largo = prompt ("Ingrese largo");



perimetro = ancho * largo;



while (ancho <0){

   ancho = prompt ("Ingrese un ancho mayor a 0");
   ancho = parseInt(ancho);
   
}


     while (largo <0){

        largo = prompt ("Ingrese un largo mayor a 0");
        largo = parseInt(largo);

    }

        


if (ancho >0  && largo >0){
    alert ("Perimetro: " + ancho * largo);
} 
}