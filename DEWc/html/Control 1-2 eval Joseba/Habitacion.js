function Habitacion(
  numero_habitacion,
  estado,
  fecha_entrada,
  fecha_salida,
  dni
) {
  this.numero_habitacion=numero_habitacion;
  this.estado = false;
  this.fecha_entrada = fecha_entrada;
  this.fecha_salida = fecha_salida;
  this.dni = dni;

   this.calcularImporteDias= function(dias) {
      precio=30;
    return precio*dias;
} 

this.calcularImporteFecha=function (fecha_entrada, fecha_fin) {
    var entrada = fecha_entrada;
    var salida = fecha_fin; 
     var diff = salida - entrada;
      return parseInt(diff / (1000 * 60 * 60 * 24));
}}

/* function calcularDias(fecha_entrada, fecha_fin, dias) {
  var entrada = fecha_entrada;
  var salida = fecha_fin; 
  var precio = 30;
  var total = dias * precio;
   var diff = salida - entrada;
  if ((fecha_entrada = !0 && fecha_salida != 0)) {
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  } else if ((dias = !0)) {
    return total;
  } 
  return total;
}  */
