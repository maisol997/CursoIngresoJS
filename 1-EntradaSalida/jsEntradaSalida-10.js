/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var descuento;
    var resultado;

    importe = document.getElementById("importe").value;

    descuento = importe * 25 / 100;
    
    console.log ("mostrame el descuento" + descuento);

    resultado = importe - descuento;

    document.getElementById("resultado").value = resultado;
    

}
