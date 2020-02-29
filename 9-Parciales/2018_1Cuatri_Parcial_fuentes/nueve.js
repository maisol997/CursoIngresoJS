function mostrar()
{
    var marca;
    var peso;
    var temperatura;

    marca=prompt("Ingrese marca");
    while(marca)
    {

    }
    peso=prompt("Ingrese peso");
    while(peso>100||peso<1)
    {
        peso=prompt("Reingrese peso");
    }
    temperatura=prompt("Ingrese temperatura");
    while(temperatura>30||temperatura<-30)
    {
        temperatura=prompt("Reingrese temperatura");
    }

    document.write("marca <p> peso <p> temperatura");
}
