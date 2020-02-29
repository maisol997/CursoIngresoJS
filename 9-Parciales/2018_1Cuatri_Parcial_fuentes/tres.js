function mostrar()
{
    var precio;
    var porcentaje;
    var preciofinal;

    precio=prompt("Ingrese precio");
    precio=parseInt(precio);
    while(isNaN(precio)||precio<0)
    {
        precio=prompt("ingrese precio mayor a 0");
    }
    porcentaje=prompt("ingrese porcentaje entre 0 y 100");
    porcentaje=parseInt(porcentaje);
    while(isNaN(porcentaje)||porcentaje<0||porcentaje>100)
    {
        porcentaje=prompt("ingrese porcentaje entre 0 y 100");
    }
    preciofinal= precio*porcentaje/100;
    document.getElementById("elPrecioFinal").value=preciofinal;

}
