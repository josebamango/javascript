		 addEventListener('load', inicio, false);

		 function inicio() {

		     var btnEnviar = document.getElementById("boton1")
		     btnEnviar.addEventListener('click', vaina, false);
		 }


		 function vaina() {

		     var valorCaja = document.getElementById('caja');
		     var valorNombre = document.getElementById('nombre');
		     var valorApellido = document.getElementById('apellido');
		     valorCaja.value = `${valorNombre.value} ${valorApellido.value}`;

		 }

		 function suma() {
		     var valorNumero = (document.getElementById('respuesta'));
		     var n1 = parseInt(document.getElementById('numero1').value);
		     var n2 = parseInt(document.getElementById('numero2').value);
		     var n3 = parseInt(document.getElementById('numero3').value);
		     var n4 = parseInt(document.getElementById('numero4').value);


		     valorNumero.value = `${n1 + n2 + n3 + n4}`;

		 }
		 /*

		 		 function esPar() {
		 		     var x = false;
		 		     var numero = document.getElementById("numero").value;
		 		     if (numero % 2 == 0) {
		 		         x = true;
		 		     } else {
		 		         x = false;
		 		     }
		 		     document.getElementById("respuesta").innerHTML = x;
		 		 };


		 		 function factorial(n) {
		 		     var numeroF = document.getElementById("numeroF").value;
		 		     var total = 1;
		 		     for (i = 1; i <= numeroF; i++) {
		 		         total = total * i;
		 		     }
		 		     return total;
		 		 }
		 		 total = document.getElementById("factorial");
		 		 total.value = factorial(numeroF)*/