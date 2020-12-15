//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
///////////////////////////////////////////MÉTODOS CON ARRAYS AVANZADOS/////////////////////////////////////////////////
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//************************************************* MÉTODO MAP *********************************************************

	//El método map() crea un nuevo array con los resultados de la llamada 
	//a la función indicada aplicados a cada uno de sus elementos.

		var almuerzos = [
			{principal:'arepa' , postre:'helado'},
			{principal:'tacos' , postre:'queso'},
			{principal:'pizza' , postre:'galletas'},
			{principal:'sushi' , postre:'chocolate'}
		];

		var platos_principales = almuerzos.map(almuerzo => {almuerzo.principal});

		var platos_postres = almuerzos.map(almuerzo => almuerzo.postre);

	//Array no asociativo
		var almuerzos_2 = ['arepa','tacos','pizza','sushi'];
		var tamaño = almuerzos_2.map(function(item,i, array){
			return item.length;
		});
		console.log(tamaño);

//************************************************* MÉTODO FILTER ******************************************************

	//Filtra un array, en base a una condición (dada por una función)

		//1. Filtra por las palabras de tamaño mayor que 6
			var palabras = ['spray', 'limite', 'elite', 'exuberante', 'destrucción', 'presente'];
			var resultado = palabras.filter(palabra => palabra.length > 6);

		//2. Filtra por platos que contengan "arepas"
			var almuerzos_filter = [
				{principal:'arepa' , postre:'helado'},
				{principal:'arepa' , postre:'queso'},
				{principal:'arepa' , postre:'turron'},
				{principal:'tacos' , postre:'queso'},
				{principal:'pizza' , postre:'galletas'},
				{principal:'sushi' , postre:'chocolate'}
			];

			// (devolviendo un array con principal y postre)
			var postres_con_arepas = almuerzos_filter.filter(plato => plato.principal === 'arepa');
			// (devolviendo un array con solo los postres)
			var postres_con_arepas_solo = almuerzos_filter.filter(plato => plato.principal === 'arepa').map(plato => plato.postre);

//************************************************* MÉTODO REDUCE ******************************************************
		
		//El método reduce() ejecuta una función reductora sobre cada elemento 
		//de un array, devolviendo como resultado un único valor.

			var almuerzos_reduce = [
				{principal:'arepa' , postre:'helado'},
				{principal:'arepa' , postre:'queso'},
				{principal:'arepa' , postre:'turron'},
				{principal:'tacos' , postre:'queso'},
				{principal:'pizza' , postre:'galletas'},
				{principal:'sushi' , postre:'chocolate'}
			];

			//Va a devolver la cantidad de platos con arepa que hay (3).
			var reduce = almuerzos_reduce.reduce(function(contador,plato){ 
				if(plato.principal === 'arepa') {
					return contador + 1;
				} else{
					return contador;
				}
			} ,0);


//************************************************* MÉTODO FIND ********************************************************

		//El método find() devuelve el valor del primer elemento del array 
		//que cumple la función de prueba proporcionada. 
		//En cualquier otro caso se devuelve undefined.

			var array_productos = [
				{ nombre: 'Ordenador', precio: 250 , departamento: 'Informatica' },
				{ nombre: 'Sarten', precio:100 , departamento: 'Hogar' },
				{ nombre: 'Reloj', precio: 20, departamento: 'Informatica' },
				{ nombre: 'Mueble', precio: 500, departamento: 'Hogar' }
			];

			var ordenador = array_productos.find(function(producto) { return producto.nombre === 'Ordenador'});

//************************************************* MÉTODO FINDINDEX ***************************************************

		//El método findIndex() devuelve la posición en la que se encuentra
		//el elemento que estamos buscando

			var mueble = array_productos.findIndex(function(producto) { return producto.nombre === 'Mueble'});

//*************************************************** MÉTODO EVERY *****************************************************

		//El metodo every() permite mediante una condicion, aplicarsela a todos los 
		//elementos del array y nos devuelve true o false

			//devolverá false, porque no todos los elementos tienen precio >=100
			var check = array_productos.every(elemento => {return elemento.precio >= 100});

//*************************************************** MÉTODO SOME ******************************************************

		//El metodo some() es como el every() pero que cuando algún elemento ya cumpla
		//la condición, entonces devuelve true

			//devolverá true
			var check = array_productos.some(elemento => {return elemento.precio >= 100});

//*************************************************** MÉTODO FILL ******************************************************

		// El método fill() crea un Array de un tamaño determinado e inicializa su contenido.

			//1.Rellena el array de 4 posiciones con a
			var array_fill = new Array(4).fill('a');

			//2. Rellenar un array de 100 posiciones con numeros random
			array_aleatorio = new Array(100).fill(0).map(Math.random);




