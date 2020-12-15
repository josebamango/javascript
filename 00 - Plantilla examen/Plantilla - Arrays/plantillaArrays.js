/*------------ FUNCIONES CON ARRAYS ------------ */

//Funcion para concatenar 2 arrays, 

var alumnos = new Array("Juan Lopez", "Luis Guerra", "Maria de la Hoz", "Elena Gomez", "Julia Caba");
var erasmus = new Array("John Smith", "Lia Warner", "Oscar Klein", "Edward Crow");
var todosAlumnos = alumnos.concat(erasmus);

//Añadir nmuevo elmento al array y devuelve la nueva longitud
	nombreArray.push();

//Funcion para separar un array/valores 
function visualizarArrayBarras(array)
{
	return array.join("/") + "/" + array.length; 
}
function visualizarArrayGuiones(array)
{
	return array.join("-") + "-" + array.length; // Creo que con ----> return array.join("-") bastaría 
}

//Meetodo que invierte el orden del array
function alreves(){ 
	let alrevesArray = todosAlumnos;
	return alrevesArray.reverse();
}

//Añadir elementos al inicio delvolviendo el número de elementos del nuevo array modificado
function unshiftArray(array, valor)
{
	array.unshift(valor);
}

//Eliminar el primer elemento del array, devuelve el elemento eliminado
function shiftArray(array)
{
	return array.shift();
}

//Elimina el ultimo elemento del array, devuelve el elemento eliminado

function popArray(array)
{
	return array.pop();
}

//Ordena el array alfabéticamente
function ordenarArray(array)
{
	array.sort();
}

//Devuelve un nuevo array con un subconjunto de los elementos del array qu eha usado el metodo por ejemplo ---- > miArray.slice(num1,num2) 
//la posicion inicial comenzara desde la posicion (num1) y llegara hasta el num2 sin incluirlo
function borrarElemento(array, posicion, cantidad)
{
	array.splice(posicion, cantidad);
}

function borrarElementoYAñadirDos(array, posicion, cantidad, valor1, valor2)
{	
	array.splice(posicion, cantidad, valor1, valor2);
}

/// POSIBLES OPCIONES CON SPLICE

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']


//***Eliminar 0 elementos desde el índice 2 e insertar "drum"
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"] 
// removed is [], no elements removed

//***Eliminar 1 elemento desde el índice 3
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);
// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"] 

//***Eliminar 1 elemento desde el índice 2 e insertar "trumpet"
var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, 'trumpet');
// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]

//***Eliminar 2 elementos desde el índice 0 e insertar "parrot", "anemone" y "blue"
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"] 
// removed is ["angel", "clown"]

//***Eliminar 2 elementos desde el índice 2
var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length - 3, 2);
// myFish is ["parrot", "anemone", "sturgeon"] 
// removed is ["blue", "trumpet"]

//***Eliminar 1 elemento desde el índice -2
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);
// myFish is ["angel", "clown", "sturgeon"] 
// removed is ["mandarin"]

//***Eliminar todos los elementos tras el índice 2 (incl.)
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);
// myFish is ["angel", "clown"] 
// removed is ["mandarin", "sturgeon"]