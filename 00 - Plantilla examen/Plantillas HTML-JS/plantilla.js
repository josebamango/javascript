addEventListener('load',inicio,false);


function inicio(){

	botonComprobar = document.getElementById('botonID');
	botonComprobar.addEventListener('click', extraerDatosLabel);

	botonInput = document.getElementById('botonInputID');
	botonInput.addEventListener('click', extraerDatosInput);

	botonArea = document.getElementById('botonAreaID');
	botonArea.addEventListener('click', extrarDatosArea);
}


//USAR CUANDO QUIERES DEVOLVER EN UNA LABEL ----------------------------
function extraerDatosLabel(){
	//Recogemos los datos que vamos a utilizar
	let numero = parseInt(document.getElementById('numeroID').value);

	//Recogemos la label donde queremos mostrar el resultado
	let label1 = document.getElementById('labelID');
	
	//Escribimos el valor de la label al pulsar el botón
	label1.innerHTML = `El resultado es ${numero}`;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

//USAR CUANDO QUIERES DEVOLVER EN UN INPUT DE READONLY -----------------
function extraerDatosInput(){

	//Recogemos los datos que vamos a utilizar
	let numeroInput = parseInt(document.getElementById('numeroInputID').value);

	//Recogemos el input donde queremos mostrar el resultado
	let inputResultado = document.getElementById('inputID');

	//Escribimos el valor del input al pulsar el botón
	inputResultado.value = `El resultado es ${numeroInput}`;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function extrarDatosArea(){

	//Recogemos los datos que vamos a utilizar
	let numeroArea = parseInt(document.getElementById('numeroAreaID').value);

	//Recogemos el textarea donde vamos a mostrar el resultado
	let textoArea = document.getElementById('textoID');

	//Escribimos el valor del textarea (porque sino se sobreescribe) y el input al pulsar el boton
	textoArea.innerHTML = `${textoArea.value} ${numeroArea}`;

	//Borramos el valor que había en el input
	borrarDatos();
}


//Función que borra el input del textarea
function borrarDatos(){
	document.getElementById('numeroAreaID').value = "";
}

function borrarDatosTextArea(){
	document.getElementById("textAreaVisualizar").innerHTML = "";
	//let textoArea = document.getElementById("textAreaVisualizar");
	//textoArea.innerHTML = "";
}


