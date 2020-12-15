addEventListener('load',inicio,false);


function inicio(){

	botonInicio = document.getElementById('botonID');
	botonInicio.addEventListener('click', function(){
		estado = setInterval(function(){ 

			  horareal = new Date()
		      hora = horareal.getHours()
		      minuto = horareal.getMinutes()
		      segundo = horareal.getSeconds()
		      //Codigo para evitar que solo se vea un numero en los segundos
		      comprobarsegundo = new String (segundo)
		      if (comprobarsegundo.length == 1)
		      segundo = "0" + segundo
		      //Codigo para evitar que solo se vea un numero en los minutos
		      comprobarminuto = new String (minuto)
		      if (comprobarminuto.length == 1)
		      minuto = "0" + minuto
		      //Codigo para evitar que solo se vea un numero en las horas
		      comprobarhora = new String (hora)
		      if (comprobarhora.length == 1)
		      hora = "0" + hora
		      // Codigo para mostrar el reloj en pantalla
		      var verhora = hora + " : " + minuto + " : " + segundo
		      var reloj_formulario = document.getElementById('relojID');
		      reloj_formulario.value = verhora;
		      // document.reloj_javascript.reloj.value = verhora
      }, 1000);
      //setTimeout("reloj()",1000);
	});
}