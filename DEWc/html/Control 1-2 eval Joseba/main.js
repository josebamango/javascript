addEventListener("load", inicio, false);

Habitacion.prototype = new Hotel();
function inicio() {
  var pregunta = prompt("¿Cuántas habitaciones quieres inicializar?");
  alert("El hotel está listo para recibir clientes!")
  var arrayHabitaciones = new Array(/* parseInt(pregunta.length-1) */);
  var numero_habitacion = document.getElementById('numero_habitacion');
  var entrada = document.getElementById("entrada");
  var salida = document.getElementById("salida");
  var dni = document.getElementById("dni");
  var imagen = document.getElementById("imagen");
  var calcular = document.getElementById("calcular");
  var mostrar = document.getElementById("mostrar");
  var resultado1 = document.getElementById("resultado1");
  //var resultado2 = document.getElementById("resultado2");
 

  calcular.addEventListener("click",function () {
      h1 = new Habitacion(numero_habitacion.value, true, entrada.value,salida.value, dni.value);
      console.log(h1);
      arrayHabitaciones.push(h1);
      console.log(arrayHabitaciones)
    },
    false);


  mostrar.addEventListener('click', function() {
   // imagen.src='logo.png';
    resultado1.value = mostrarDatos(arrayHabitaciones);
}, false);


}
function mostrarDatos(array) {
    var texto = "";
    for (var i = 0; i < array.length; i++) {
        //parseInt(array[i].calcularImporte(7));
        texto += "Nº: " + array[i].numero_habitacion + " Fecha de entrada: " +
            array[i].entrada + ", Fecha de salida " + array[i].salida +"DNI: "+ array[i].dni+ " El precio final es de: "+ array[i].calcularImporteDias(7)+ "€.\n";
    }
    return texto;
}