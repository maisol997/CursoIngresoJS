function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;

if (edad > 17) {
    alert ("Es mayor de edad")
}

else {
    //dos posibles valores: niño o adolescente

    if(edad < 13) {
alert ("Es menor de edad");

    } else  {
        alert ("Es adolescente");
    }
}



}//FIN DE LA FUNCIÓN