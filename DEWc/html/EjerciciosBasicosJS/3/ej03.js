/*
3-Crea un programa en el que muestres el resultado de
varias operaciones mediante alert, mostrando el texto
exacto de la operación realizada y su resultado.
*/

//Variables
var operacion1 = (10 == 10);
var operacion2 = (10 === 10);
var operacion3 = (10 === 10.0);
var operacion4 = ("Laura" == "laura");
var operacion5 = ("Laura" > "laura");
var operacion6 = ("Laura" < "laura");
var operacion7 =  ("123" == 123);
var operacion8 = ("123" === 123);
var operacion9 = (parseInt("123") === 123);

//Mostrar el resultado de las variables
alert("La operacion 10 == 10 : " + operacion1 +"\n" +
"La operacion 10 === 10 : " + operacion2 + "\n" +
"La operacion 10 === 10.0 : " + operacion3 + "\n" + 
"La operacion 'Laura' == 'laura' : " + operacion4 + "\n" +
"La operacion 'Laura' > 'laura' : " + operacion5 + "\n" +
"La operacion 'Laura' < 'laura' : " + operacion6 + "\n" + 
"La operacion '123' == 123 : " + operacion7 + "\n" + 
"La operacion '123' === 123 : " + operacion8 + "\n" + 
"La operacion parseInt('123') === 123 : " + operacion9);

