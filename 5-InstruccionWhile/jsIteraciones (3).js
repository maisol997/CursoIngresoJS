function mostrar()
{


var clave = prompt ("Ingrese su clave");
var contador = 0;

clave = clave.toLowerCase();

while (clave != "utn750"){
contador ++;
if (contador == 3){
    break;
}
    clave = prompt ("Error, ingrese su clave");
    
    clave = clave.toLowerCase();
    
}
if (clave == "utn750") {
    alert ("Bienvenido");

}
else {
    alert ("Maximos intentos ingresados");

}
}//FIN DE LA FUNCIÓN
