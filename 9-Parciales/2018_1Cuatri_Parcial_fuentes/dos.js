function mostrar()
{
  var nombre;
  var localidad;

  nombre = document.getElementById("elNombre").value;
  localidad = document.getElementById("laLocalidad").value

  while(!isNaN(nombre))
  {
    alert("ingrese Nombre")
    nombre=prompt("ingrese nombre");
  }
  while(!isNaN(localidad))
  {
    alert("ingrese localidad");
    localidad=prompt("ingrese localidad");
  }
    alert ("Su nombre es: " + nombre + " y su localidad es: " + localidad);
}
