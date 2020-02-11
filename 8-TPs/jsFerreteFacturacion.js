/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precioUno;
    var precioDos;
    var precioTres;
    var sumaDePrecios;
    var promedioPrecios;
    var iva;
    var precioFinal;
    
function Sumar () 
{


    precioUno = document.getElementById("PrecioUno").value;
    precioUno = parseInt (precioUno);

    precioDos = document.getElementById("PrecioDos").value;
    precioDos = parseInt (precioDos);

    precioTres = document.getElementById("PrecioTres").value;
    precioTres = parseInt (precioTres);



sumaDePrecios = precioUno + precioDos + precioTres;


alert ("La suma es: " + sumaDePrecios);

}
function Promedio () 
{
    precioUno = document.getElementById("PrecioUno").value;
    precioUno = parseInt (precioUno);

    precioDos = document.getElementById("PrecioDos").value;
    precioDos = parseInt (precioDos);

    precioTres = document.getElementById("PrecioTres").value;
    precioTres = parseInt (precioTres);



promedioPrecios = (precioUno + precioDos + precioTres) /3 ;


alert ("El promedio es: " + promedioPrecios);
}
function PrecioFinal () 
{
	precioUno = document.getElementById("PrecioUno").value;
    precioUno = parseInt (precioUno);

    precioDos = document.getElementById("PrecioDos").value;
    precioDos = parseInt (precioDos);

    precioTres = document.getElementById("PrecioTres").value;
    precioTres = parseInt (precioTres);


iva = sumaDePrecios * 21/100;
console.log (iva);
precioFinal = sumaDePrecios + iva;

alert ("El precio fianl es: " + precioFinal);
}