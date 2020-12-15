//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
////////////////////////////////////////////////// STRING //////////////////////////////////////////////////////////////
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//************************************************ SPLIT ***************************************************************

		// Separa mediante lo que le introduzcamos por parametros un string
      		var poesia = "Por cien cañones por banda poema de Espronceda"
			var separar_poesia = separar_poesia.split(" ");
			// separar_poesia.length -> contiene 8 palabras

//********************************************* TOSTRING ***************************************************************

		//Conversión de un array en una cadena.
			var frutas = ['Platano','Fresa','Melon'];
			/*Platano, Fresa, Melon*/
			frutas.toString();

//*********************************************** CHARAT ***************************************************************

		//Extrae un carácter representado por el índice
		//especificado. Índice está entre 0 y length-1.
			var gato = "gato";
			/*a*/
			gato.charAt(1);

//************************************************* CONCAT ************************************************************

		//Concatenar strings
			var hola = "hola";
			var quetal = "que tal";
			/*hola que tal*/
			var hola_quetal = hola.concat(quetal);

//************************************************ INDEXOF ***************************************************************
	
		// Devuelve el índice de la primera ocurrencia del carácter. También se le puede especificar
		//el lugar por el que se quiere que empiece a buscar.

		var letras = "letras";
		letras.indexOf(2); // 3

//********************************************** SUBSTRING ***************************************************************


		//Extrae una cadena de caracteres entre un valor
		//de índice inicial y otro final.
		//substring(indice principo,indice fin);

			var cualquierCadena = "Mozilla";
			// Muestra "Moz"
			cualquierCadena.substring(0,3);

//********************************************** SUBSTR ***************************************************************


		//Extrae una cadena de caracteres desde un valor
		//de índice inicial y número de caracteres que
		//quiero extraer.
		//substr(indice inicial , número de caracteres)

			var cualquierCadena = "Mozilla";
			// Muestra "ill"
			cualquierCadena.substring(2,3);

//**************************************** LOWER - UPPER ***************************************************************

		algo.toLowerCase();
		algo.toUpperCase();

//********************************************** REPLACE ***************************************************************

		//Busca un valor dentro de una cadena y devuelve una nueva cadena en la que se
		//sustituyen los valores especificados por un nuevo valor indicado previamente.

			var poesia = "Por cien cañones por banda poema de Espronceda";
			var separar_poesia = separar_poesia.split(" ");

			var punto ="."
	      	var poeta = punto.concat(separar_poesia[separar_poesia.lenght-1]);

	     	poesia_nueva = poesia.replace(separar_poesia.lenght-1,poeta);

//********************************************** TRIM ******************************************************************

		//Quitar espacios en blanco
		cadena.trim();