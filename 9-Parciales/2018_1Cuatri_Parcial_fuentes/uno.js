
function mostrar()
{
    /*
    var ancho;
    var largo;
    var perimetro;

    ancho = prompt("Ingrese ancho");
    while(isNaN(ancho)||ancho<0)
    {
        ancho = prompt("Ingrese ancho");
    }
    largo = prompt ("Ingrese largo");
    while(isNaN(largo)||largo<0)
    {
        largo = prompt ("Ingrese largo");
    }
    alert ("Perimetro: " + ancho * largo);
*/
    /*perimetro = ancho * largo;



    while (isNaN(ancho)||ancho <0)
    {

    ancho = prompt ("Ingrese un ancho mayor a 0");
    ancho = parseInt(ancho);
    
    


        while (largo <0)
        {

            largo = prompt ("Ingrese un largo mayor a 0");
            largo = parseInt(largo);

        }

            


    if (ancho >0  && largo >0)
    {
        alert ("Perimetro: " + ancho * largo);
    }
    }*/







    /* CLASE DE REPASO RESERVA DE HUESPED- EL QUE HICE YO ES EL B

    b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva

c)Se pide la carga de datos de un contenedor  de alimento canino con un máximo de carga de 1000kg, cargar hasta que el cliente quiera o se llene el contenedor.
se pide:
marca
kilos por bolsa
cantidad de bolsa
importe por bolsa

que marca tiene más kilos en el contenedor
que marca tiene más bolsas de alimento en el contenedor
que marca tiene el mayor importe por bolsa de alimento
el importe y la marca de la bolsa de alimento menos pesada.

        var reserva;
        var nombreHuesped;
        var cantidadPersonas;
        var cantidadDiasEstadia;
        var formaDePago;
        var acumuladorEfectivo = 0;

        reserva = "si";

    while (reserva == "si"){
        
        nombreHuesped = prompt ("Ingrese nombre del huesped");
        while (!(isNaN(nombreHuesped))){
            nombreHuesped = prompt ("Ingrese nombre valido");
        }
        



        cantidadPersonas = prompt ("Ingrese cantidad de personas");
        cantidadPersonas = parseInt(cantidadPersonas);

        while (isNaN(cantidadPersonas)){
            cantidadPersonas = prompt ("Ingrese cantidad valida");

        }

        cantidadDiasEstadia = prompt ("Ingrese cantidad de días de estadia");
        cantidadDiasEstadia = parseInt (cantidadDiasEstadia);
        
        formaDePago = prompt ("¿Paga con 1 (efectivo), 2 (tarjeta) o 3 (QR)?");

        while (isNaN(formaDePago) || formaDePago <0  || formaDePago >3 ) {
            formaDePago = prompt ("Ingrese forma de pago valida")
        }
        var acumuladorFormaDePago = 0;

        if (formaDePago == 1){
        acumuladorFormaDePagoEfectivo = acumuladorFormaDePagoEfectivo + 1; 
        } if else (formaDePago = 2) {
            acumulador

        }

    }
*/

    var nombre;
    var cantidadPersonas;
    var cantidadDias;
    var formaDePago;
    var respuesta;
    var maximoPersonas;
    var maximoPersonasHuesped;
    var maximoDeDias;
    var contadorReservas;
    var contadorEfete;
    var contadorTarjeta;
    var contadorQR;
    
    respuesta = "s";
    while (respuesta == "s"){

        nombre = prompt ("Ingrese nombre");
        while (!isNaN(nombre)) //puede pasar la validacion.
        {
            nombre = prompt ("Ingrese nombre");
        }

        cantidadPersonas = prompt ("Cantidad de personas");
        paseInt (cantidadPersonas); //si o si validar
        while (isNaN(cantidadPersonas) || cantidadPersonas <1) {

            cantidadPersonas = prompt ("Cantidad de personas");
            paeseInt (cantidadPersonas);
        }

        cantidadDias = prompt ("Cantidad de días");
        paseInt (cantidadDias); //si o si validar
        while (isNaN(cantidadDias) || cantidadDias <1) {

            cantidadDias = prompt ("Cantidad de días");
            paeseInt (cantidadDias);
        }
        formaDePago = prompt ("Forma de pago");

        while (isNaN(formaDePago) || formaDePago != "efectivo" || formaDePago != "Tarjeta" || formaDePago != "qr") {
        formaDePago = prompt ("forma de pago");
        paeseInt (formaDePago);
        }
    
    acumuladorDeDias = acumuladorDeDias + cantidadDeDias;

    if (contadorDeReservas ==1 || cantidadDePersonas > maximoPersonas){
        maximoPersonas = cantidadPersonas;
        maximoPersonasHuesped = nombre;
    }

    if (contadorDeReservas ==1 || cantidadDeDias >maximoDeDias){
        maximoDeDias = cantidadDias;
        maximoDiasCantidad = cantidadDeDias;

    }

    switch (formaDePago){
        case "efectivo":
        contadorEfectivo++;
        break;

        case "Tarjeta":
        contadorTarjeta++;
        break;

        case "QR":
        contadorQR++;
        break;

    }
    
    respuesta = prompt ("Desea continuar");

    } //fin while

    if (contadorEfete > contadorQR && contadorEfete > contadorTarjeta){
        formaDePagoMasUtilizada = "efete";
    } else {
        if (contadorQR> contadorTarjeta){
            formaDePagoMasUtilizada = "qr";
        }
        else {
            formaDePagoMasUtilizada = "Tarjeta";
        }
    }
    
}