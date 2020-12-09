
var cent = false;
var contador = 0;
var resulFinal="";
do
{
	//Al pasarlo a Int, si metes un caracter, devuelve null (Es como si no pusieras nada)
	var a = prompt("Introduce un numero");
	//Compruebo si no se escribe nada, o si se pulsa cancelar (en ambos casos, la expresion devuelve false)
	if(!a)
	{
		cent = true;
	}
	else
	{
		if(!isNaN(parseInt(a)))
		{
			//alert("entra");
			contador++;
			resulFinal += a+" - ";
		}
	}
	
}
while(!cent)
alert("Numero de intentos: "+contador);
alert("Numeros introducidos: "+resulFinal);