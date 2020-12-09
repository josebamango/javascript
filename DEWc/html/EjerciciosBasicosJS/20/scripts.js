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
/*
var numentero=parseFloat(prompt("Dime un numero"));

if (numentero>=0) {
    document.write("El "+numentero+" es un numero positivo");
}else {
    document.write("El numero "+ numentero+ " es un numero negativo");
}
 */

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
*/

//EJ13
/*
var numero=parseFloat(prompt("Introduce un numero: "));

if (numero%2==0) {
    alert("El numero es par");
}else{
    alert("El numero es impar")
}
 */

//EJ14
 
 /*
do {
var apellido=prompt("Dime el nombre del primer presidente de la democracia: ");
 
} while (apellido!="suarez");
 
 alert("El nombre del primer presidente es: Adolfo " +apellido);
 */

 //EJ15
 /*
var nombre=prompt("Dime el nombre del primer presidente de la democracia: ");
var apellido=prompt("Dime el apellido del primer presidente de la democracia: ");

switch (true) {
    case (nombre!="adolfo" &&apellido!="suarez"):
        
            alert("ERROR Intentelo de nuevo");
        
        break;
    case (nombre=="adolfo" &&apellido!="suarez"):
        
            alert("Te falta el apellido");
      
        break;
    case (nombre!="adolfo" && apellido=="suarez"):
            alert("Te falta el nombre");
        break;
        
    default: alert("Correcto es adolfo suarez");
        
        break;
}
*/

//EJ16
/*
var aux = true;
var contador = 0;
do {
    var entrada = prompt ("Introduce un número");
    if(entrada==""){
        aux = false;
    }else{
        contador++;
    }
} while (aux);
alert (contador);
*/

//EJ17
/*
function cantidadNum() {
   var numero=0;
   var suma=0;
    for (var i = 0; i < 5; i++) {
        
       var numero=parseFloat(prompt("Introduce un numero"));
       suma+=numero;
    }
    alert(`Hay un total de ${suma}`);
}

cantidadNum();
*/

//ERJ18
/*
var num=0;
for (var i = 0; i < 25; i++) {
    
   var resta=11;
   num-=resta;
    document.write(num);
}
 
 */

//EJ19

/*
function paroimpar() {
    var numeros=0;
var pares=0;
var impares=0;

  for (var i = 0; i < 5; i++) {
    
   numeros=parseFloat(prompt("Dime un numero"));
    if (numeros%2===0) {
        
            pares++;
        
    }else{
       
            impares++;
    }
   
}
alert(`Hay un total de: ${pares} numeros pares y ${impares} impares.`);  
}
paroimpar();
 * 
 */

//EJ20

var num=parseInt(prompt("Introduzca un numero"));
var factorial = 1;
for(var i =num;i>=1;i--){
factorial*=i;
}
alert("El factorial de "+ num + " es "+ factorial);


//EJ21

/*
    var suma=0;
    var cont=0;
   do {
var numero=parseFloat(prompt("Dime un numero, si quieres acabar inserta el 9999"));

 suma+=numero;
 cont++;
 
} while (suma<9999);
    alert(`La suma de todo es:  ${suma} y un total de ${cont} valores introducidos`);  
  
*/

//EJ22
/*
function imprimecinco() {
    var num=new Array();
    
    for (var i = 0; i < 10; i++) {
      
        num[i]=parseFloat(prompt("Introduce un numero: "));
    }
    
    for (var i = 5; i < 10; i++) {
        
        document.write("El primer numero es: "+num[i]+"<br>");
    }
}
imprimecinco();
 * 
 */

//EJ23

/*
var texto;
var pass;
var boton = confirm("Quieres entrar en la web? La pass es hola");
if (boton === true) {
    while (pass!=="hola") {
       pass=prompt("introduce la pass"); 
    }
  alert("Gracias por loguearte en la web!");
} else {
  texto = "Gracias por todo!";
    alert(texto);
}
*/

//EJ24
/*
var num1=parseFloat(prompt("Introduce el primer numero"));
var num2=parseFloat(prompt("Introduce el primer numero"));
var key=parseFloat(prompt(`Elige una opcion:\n 1-Sumar\n 2-Restar\n 3-Multiplicar\n 4-Dividir`))

switch (key) {
    case 1:
        
        alert(num1+num2);
        
        break;
    case 2:
        alert(num1-num2);
        break;
    case 3:
        alert(num1*num2);
        break;
    case 4:
        alert(num1/num2);
        break;
        
    default:
        
        break;
}

*/

