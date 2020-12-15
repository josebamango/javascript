//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
///////////////////////////////////////////MÉTODOS CON ARRAYS NORMALES//////////////////////////////////////////////////
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//********************************************** NUMEROS RANDOM **********************************************************


		function getRandomInt(min, max) {
		  return Math.floor(Math.random() * (max - min)) + min;
		}

//********************************************** TIPOS DE FOR **********************************************************

		// FOR ------------------------------------------------ FOR
		var array_A = new Array('1','2','3','4','5');

		for (var i = 0; i < array_A.length; i++) {
			document.write(array_A[i]+' ');
		}
		// FORIN  --------------------------------------------- FORIN

		for (var i in array_A) {
			document.write(array_A[i]+' ');
		}

		//FOREACH --------------------------------------------- FOREACH

		var array_B = ['a','b','c'];

			array_B.forEach(function(element) {
				document.write(element);
			} );

//************************************************** PUSH *************************************************************

		// Añadir elementos a array: (los añade al final)
			array_A.push('d','e','f');

//************************************************* CONCAT ************************************************************

		//Concatenar elementos a array
			var arrayConcatenado = array_A.concat(array_B);

//************************************************** JOIN *************************************************************

		//Concatena elementos separado por carácter opcional
			/*a,b,c*/ array_B.join();
			/*abc*/   array_B.join('');
			/*a-b-c*/ array_B.join('-');

//************************************************ REVERSE ************************************************************
	
		//Invierte los arrays
			/*5,4,3,2,1*/  array_A.reverse();
			/*c,b,a*/      array_B.reverse();

//************************************************ UNSHIFT ************************************************************

		//Añade elemento al principio
			var array_C = new Array("Valor1","Valor2");
			/*Valor0,Valor1,Valor2*/ 
			array_C.unshift("Valor0");

//************************************************* SHIFT *************************************************************

		//Elimina y devuelve el primer elemento del array
			/*elemento_eliminado = Valor0 */
			var elemento_eliminado = array_C.shift();

//************************************************* POP ***************************************************************

		//Elimina y devuelve el ultimo elemento del array
			/*ultimo_elemento_eliminado = Valor2 */
			var ultimo_elemento_eliminado = array_C.pop();

//************************************************ SLICE **************************************************************

		//Devuelve los valores del array que indiquemos por parámetros

		//1. DEVOLVER VALORES
			var array_D = new Array(1,2,3,"Valor1","Valor2");
			/*mostrar = 1,2*/var mostrar = arrayMostrar.slice(0, 2);

		// 2. COPIAS EN PROFUNDIDAD
			var array_original = [1, 2, 3];
			var array_copia = array_original.slice();

//************************************************ SPLICE **************************************************************

		//El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

		//1. AÑADIR
			var array_meses = ['Enero', 'Marzo', 'Abril', 'Junio','Miercoles'];
			/*['Enero', 'Febrero','Marzo', 'Abril', 'Junio','Miercoles']*/
			array_meses.splice(1, 0, 'Febrero');

		//2. REEMPLAZAR
			/*['Enero', 'Febrero','Marzo', 'Abril', 'Mayo','Miercoles']*/
			array_meses.splice(4, 1, 'Mayo');

		//3. BORRAR
			/*['Enero', 'Febrero','Marzo', 'Abril', 'Mayo']*/
			array_meses.splice(5, 1);


//************************************************* SORT ***************************************************************

		// Ordena alfabéticamente los elementos de un array

		var array_ordenar = new Array("b","a","d","c","v","u","p");
		/*array_ordenado = a,b,c,d,p,u,v*/var array_ordenado = array_ordenar.sort();

//************************************************ INDEXOF ***************************************************************
	
		// Devuelve la posicion del elemento dentro del array

		var array = [2, 9, 9];
		array.indexOf(2);     // 0
		array.indexOf(7);     // -1
		array.indexOf(9, 2);  // 2
		array.indexOf(2, -1); // -1
		array.indexOf(2, -3); // 0


