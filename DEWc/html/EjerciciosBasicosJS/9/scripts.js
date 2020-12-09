/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//EJ1 ALERTS
/*
var a=1357;
var b=135.7;
var c=135e7;
var d=01357;
var e=0*1357;

    alert("Numero entero: " +a );
    alert("Numero decimal: " +b );
    alert("Numero cientiffco: " +c );
    alert("Numero octal: " +d );
    alert("Numero hexadecimal: " +e );

*/

//EJ2 Variables
/*
var nombre="Alberto";
var apellido="Lavin";
var edad=31;
var nacimiento= 1989;

alert("'Una frase'");
alert("Mi nombre es: " +nombre + "\n" + apellido );
alert("Esta suma es: "+ (edad+nacimiento));
alert("La suma de todo es: " + nombre+ apellido+edad+nacimiento);
*/

//EJ3
/*
var operacion1=(10==10);
alert("La operacion  10==10 es: "+ operacion1);

var operacion2=(10===10);
alert("La operacion  10===10 es: "+ operacion2);

var operacion3=(10===10.0);
alert("La operacion  10===10.0 es: "+ operacion3);

var operacion4=("laura"=="laura");
alert("La operacion  laura==laura es: "+ operacion4);

var operacion5=("laura"<"laura");
alert("La operacion  1laura<laura es: "+ operacion5);

var operacion6=("123"==123);
alert("La operacion  123==123 es: "+ operacion6);

var operacion7=("123"===123);
alert("La operacion  123===123 es: "+ operacion7);

var operacion8=(parseInt("123")===123);
alert("La operacion  123===123 es: "+ operacion8);
*/


//EJ44-Haz un script que pida tu nombre y apellidos y lo visualice en un alert:

/*var nombre=prompt("Dime tu nombre");
var apellido=prompt("Dime tu apellido");

alert("Tu nombre es "+nombre +" y tu apellido es "+apellido);*/

//EJ5 Reliza un script que vusualice varios alerts

/*
 var hola="hola";
alert(`${hola} que tal`+"\n"+
`${hola}\n que tal`+"\n"+
`${hola}que \ntal`+"\n"+
`${hola}\n que \n t \n al`);
*/

//EJ6 SUma
 /*var aux=0;
for (var i = 0; i< 4; i++) {
 
    var num1=parseFloat(prompt("Dime numero")); 
      aux+=num1;
}
alert(aux);*/

//Multi
 
/* var aux2=1;
for (var i = 0; i< 4; i++) {
 
    var num1=parseFloat(prompt("Dime numero")); 
      aux2=aux2*num1;
      
}
alert(aux2);*/

//Ej7 Suma tres notas y promedio mayor de 7
/*var aux=0;
for (var i = 0; i < 3; i++) {
   
    var notas=parseFloat(prompt("Introduce nota "+i))
    aux+=notas;
    
}
if ((aux/3)>=7) {
    
    alert("El alumno promociona con una media de: "+ (aux/3))
}else{
    alert("No promociona")
}
 */

//EJ8

/*
 var num1=parseFloat(prompt("Dime un numero"));
  var num2=parseFloat(prompt("Dime otro numero"));
    
    if (num1>num2) {
    alert("La suma de "+num1 +" + "+num2 + " es "+(num1+num2));
    alert("La resta de "+num1 +" - "+num2 + " es "+(num1-num2));
   
}else if (num1<num2) {
    alert("La multiplicacion de "+num1 +" + "+num2 + " es "+(num1*num2));
    alert("La division de "+num1 +" + "+num2 + " es "+(num1/num2));
   
}else{
    alert("Los numeros tienen el mismo valor");
}

*/

//EJ9

var numentero=parseFloat(prompt("Dime un numero"));

if (numentero>=0) {
    document.write("El "+numentero+" es un numero positivo");
}else if(numentero==0){
	document.write("El "+numentero+" es un cero");
}
else {
    document.write("El numero "+ numentero+ " es un numero negativo");
}
 

//EJ10
/*
var edad=parseFloat(prompt("Dime una edad: "));

if (edad>0 &&edad<=12) {
    alert("Niño");
}else if (edad>=13 && edad<=26) {
    alert("Joven");
}else if (edad>27 && edad<60) {
    alert("Adulto");
}else{
    alert("Jubilado");
}
 */

//EJ11
/*
var num=prompt("¿Cuanto vale 15 + 15?");
var suma=30;
var respuesta=(num==suma)? "Correcto": "Incorrecto";
alert(respuesta);
 */

//EJ12
/*
var num=prompt("¿Cuanto vale 15 + 15?");
var suma=30;
var respuesta=(num==suma)? "Correcto": "Incorrecto";
alert(respuesta);

//EJ13
var numero=parseFloat(prompt("Introduce un numero: "));

if (numero%2==0) {
    alert("El numero")
}
 * 
 */