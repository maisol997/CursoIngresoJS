function mostrar()
{

var sexo = prompt("ingrese f ó m .");


document.getElementById('Sexo').value=sexo;


while (sexo != "f" && sexo != "m") {
    sexo = prompt ("Ingrese un sexo valido");
    saxo = sexo.toLowerCase();

}

}//FIN DE LA FUNCIÓN