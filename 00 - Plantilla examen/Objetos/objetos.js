//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//////////////////////////////////////////////////OBJETOS///////////////////////////////////////////////////////////////
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//******************************************** OBJETO DATE *************************************************************

	var fecha = new Date();
	//Métodos para acceder

		fecha.getDate(); // Devuelve el día del mes de 1 a 31.
		fecha.getDay(); // Devuelve el día de la semana de 0 (domingo) a 6 (sábado).
		fecha.getHours();
		fecha.getMinutes();
		fecha.getSeconds();
		fecha.getMonth(); // Devuelve el mes de un objeto Date. La salida es un valor entero entre 0 (Enero) y 11 (Diciembre).
		fecha.getFullYear(); 
		fecha.getTime(); // Devuelve una fecha en milisegundos

	//Métodos para establecer
		fecha.setDate(numero); 
		fecha.setHours(numero); 
		fecha.setMinutes(numero); 
		fecha.setSeconds(numero); 
		fecha.setFullYear(numero); 
		fecha.setTime(numero_milisegundos); 

		/*Copiar una fecha*/
			var birthday = new Date(1994, 12, 10);
			var copy = new Date();
			copy.setTime(birthday.getTime());

	//Métodos para analizar y convertir
		fecha.toString(); //Convierte una fecha en una cadena de caracteres.

//******************************************** OBJETO NUMBER ***********************************************************
		
		//TOFIXED
			var numObj = 12345.6789;
			console.log(numObj.toFixed(1)); //12345.7

//******************************************** OBJETO MATH *************************************************************

		/*RANDOM DE 1 A 10 */ (Math.floor(Math.random*10)+1);
		/*NUMERO PI*/ Math.PI
		/*MAXIMO ENTRE DOS NUMEROS*/ Math.max(numero1,numero2);
		/*MINIMO ENTRE DOS NUMEROS*/ Math.min(numero1,numero2);
		// REDONDEOS
			//1. abs() -> valor absoluto
			//2. ceil() -> redondeo superior
			//3. floor() -> parte entera
			//4. round() -> redondeo inferior
		/*ELEVADO*/ Math.pow(base,exponente);
		/*RAIZ CUADRADA*/ Math.sqrt(numero);

//****************************************** OBJETO ARGUMENTS **********************************************************

		// El objeto arguments es un objeto similar a un Array
		// que se corresponde con los argumentos pasados a la función.

		function sumar() { 

			if( arguments.length != 0 ) {
				for(var i in arguments){
					if(isNaN(arguments[i]) == false){
					 	suma += arguments[i];
					}
				}
				return suma; 
			}
			return "Compruebe la entrada";
		} 
		/*6*/ sumar(2,4);

//********************************************* OBJETO WINDOW **********************************************************

	ventana = window.open( "dirección URL");
	ventana = window.open("dirección URL", "Ventana de destino","parámetros de apertura" );

	ventana.close();

	// MOVER - RESIZE WINDOW POR COORDENADAS
		ventana.moveTo(x,y);
		ventana.resizeTo(x,y);

	// MOVER - RESIZE WINDOW POR PIXELES
		ventana.moveBy(x,y);
		ventana.resizeBy(x,y);

	// INTERVALOS DE TIEMPO
		//EJEMPLO BOMBA
		let identificador = ventana.setTimeout(funcion,1000) //Ejecuta una funcion despues del tiempo establecido
		clearTimeout(identificador); //Cancelar la ejecución 

		setInterval(funcion,1000) // Ejecuta una función de forma repetitiva cada vez que termina el periodo de tiempo determinado.
		clearInterval(identificador);

	// TAMAÑO ÁREA VENTANA
		alto = ventana.innerHeight();
		ancho = ventana.innerWidth();

	// TAMAÑO VENTANA COMPLETA
		alto = ventana.outerHeight();
		ancho = ventana.outerWidth();

	//Abrir ventana centrada
		function abrirVentana(myWidth, myHeight) {
		    var left =  (window.screen.width/2) - (75 + 10);
		    var top = (window.screen.height/2) - (100 + 50);
		    ventana = window.open("", "", 'width=' + myWidth + ', height=' + myHeight + ', top=' + top + ', left=' + left);
		}
		
		function abrirVentana(ancho, largo){
			ventana = window.open("","",ancho,largo);
   			ventana.moveTo(((screen.width - ancho) / 2), ((screen.height - largo) / 2))
		}

		
		

//****************************************** OBJETO PROTOTYPE **********************************************************

	 // D:\02.DWEC(JS)\2ºEVA\01.Tema 5\01.Creación de objetos\Ejercicios_Prueba_Tema\Ejercicio_2_Informaticos

//******************************************* DESTRUCTURING ************************************************************

	// 1. Asignación variables a posiciones array
		var array_nombres = ["Paula", "Jano", "Kendra"];
		/* a=Paula, b=Jano, c=Kendra */
		var [a,b,c] = array_nombres;

	// 2. Intercambio de valores
		/*a=Jano, b=Kendra, c= Paula*/
		[a,b,c] = [b,c,a];

	// 3. Funcion que devuelve 2 valores y usa el objeto arguments
		function mostrar(){
			var resultado = "";
			var suma = 0;

			for (var i = 0; i < arguments.length; i++){
			  	if(!isNaN(arguments[i])){
			  		suma += arguments[i];
			  	} else{
			  		resultado += arguments[i];
			  	}
			    
			  }
			  return [suma,resultado];
		}
		/*suma_total=6, cadena = perro,gato,lechuza*/
		let[suma_total, cadena] = mostrar("perro","gato","lechuza",1,2,3);
