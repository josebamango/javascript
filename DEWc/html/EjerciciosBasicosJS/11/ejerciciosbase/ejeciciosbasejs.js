//EJERCICIO 1

function ejercicio1(){
    var entero = 1357;
    var decimal = 135.7;
    var cientifico = 135e7;
    var octal = 01357;
    var hexadecimal = 0x1357;

    alert("Número entero " + typeof(entero));
    alert("Número decimal " + typeof(decimal));
    alert("Número científico " + typeof(cientifico));
    alert("Número octal " + typeof(octal));
    alert("Número hexadecimal " + typeof(hexadecimal));
    alert("Todos los números " + entero + decimal + cientifico + octal + hexadecimal);

}

//EJERCICIO 2

function ejercicio2(){

    var nombre = "Ana";
    var apellido = "Cuevas";
    var edad = 28;
    var fechanac = 1991;

    alert("\'" + "Esto son comillas simples" + "\'");

    alert(nombre + "\n" + apellido);

    var suma= edad + fechanac;

    alert (suma);

    var total = parseFloat(nombre) + parseFloat(apellido) + suma;

    alert(total);


}

//EJERCICIO 3

function ejercicio3(){

    var operacion1 = (10 == 10);
    alert("La operacion 10 == 10 es " + operacion1);

    var operacion2 = (10 === 10);
    alert("La operacion 10 === 10 es " + operacion2);

    var operacion3 = (10 === 10.0);
    alert("La operación 10 === 10.0 " + operacion3);

    var operacion4 = ("Laura" == "laura");
    alert("La operación Laura == laura es " + operacion4);

    var operacion5 = ("Laura" > "laura");
    alert("La operacion Laura > laura es " + operacion5);

    var operacion6 = ("Laura" < "laura");
    alert("La operación Laura < laura es " + operacion6);

    var operacion7 = ("123" == 123);
    alert("La operacion 123 == 123 es " + operacion7);

    var operacion8 = ("123" === 123);
    alert("La operación 123 === 123 es " + operacion8);

    var operacion9 = (parseInt("123") === 123);
    alert("La operación parseInt(123) === 123 es " + operacion9);

}

//EJERCICIO 4

function ejercicio4(){

    var nombre = prompt("Introduzca su nombre: ");
    alert(nombre);

    
}

//EJERCICIO 5

function ejercicio5(){

    var a = "Hola";
    var b = "que";
    var c = "tal";

    alert(a + b + c);
    alert(a + "\n" + b + c);
    alert("Holaque" + "\n" + "tal");
    alert( a + "\n" + b + "\n" + "t" + "\n" + "al"); 

    
}

//EJERCICIO 6

function ejercicio6(){
    var a = 12;
    var b = 4;
    var c = 89;
    var d = 6;

    var suma = a+b+c+d;
    var producto = a*b*c*d;

    document.write(suma);
    document.write(producto);

    
}

//EJERCICIO 7 

function ejercicio7(){

    var nota1 = 8;
    var nota2 = 8;
    var nota3 = 9;

    var promedio = ((nota1+nota2+nota3)/3);

    if(promedio>7){
        document.write("promociona");
    }else{
        document.write("no promociona");
    }

}

//EJERICIO 8

function ejercicio8(){
    var numero = prompt("Escriba un número");
    var numero2 = prompt("Escriba otro número");

    if(numero>numero2){
        var suma=numero + numero2;
        var resta=numero - numero2;
        document.write("La suma de los número es " + suma);
        document.write("La resta de los número es: " + resta);
    }else{
        var multiplicacion = numero * numero2;
        var division = numero / numero2;
        document.write("El resultado de la multiplicación es :" + multiplicacion);
        document.write("El resultado de la division es: " + division)
    }

}

//EJERCICIO 9

function ejercicio9(){
    var numero=prompt("Escriba un número");

    if (numero>=1){
        document.write("El numero es positivo")
    }else if(numero=0){
        document.write("El numero es cero")
    }else if(numero<0){
        document.write("El número es negativo");
    }
}

//EJERCICIO10

function ejercicio10(){
    
    var edad=prompt("Escriba su edad");

    if(edad>=0 && edad<=12){
        document.write("Niño");
    }else if(edad>=12 && edad<=26){
        document.write("Joven");
    }else if (edad>=26 && edad<=60){
        document.write("Adulto");
    }else if(edad>=60){
        document.write("Jubilado");
    }
}

//EJERCICIO 11

function ejercicio11(){

    var pregunta=prompt("¿Cuanto vale 15 + 15?");

    var respuesta = (pregunta==30)?"correcto":"incorrecto";

    document.write(respuesta);

}

//EJERCICIO 12

function ejercicio12(){

    var pregunta=prompt("¿Cuanto vale 15 + 15?");

    if(pregunta == 30){
        document.write("correcto");
    }else if(confirm("¿Quiere volver a intentarlo?")){
        open(ejercicio12(), "Gracias por su visita")
    }
}

//EJERCICIO 13

function ejercicio13(){
    var numero=prompt("Introduzca un número");

    if(numero%2 == 0){
        alert("Numero par");
    }
}

//EJERCICIO 14

function ejercicio14(){

    
    do {
        var pregunta=prompt("Escriba el apellido del primer presindete de la democracia")
       
    }while(pregunta != "suarez");
  
}

//EJERCICIO 15

function ejercicio15(){

    do{
    var pregunta=prompt("Escriba el apellido del primer presidente de la democracia");
    if(pregunta != "suarez" && pregunta != "adolfo"){

        alert("error, vuelva a intentarlo");}

        else if(pregunta == "adolfo"){
        alert("Te falta el apellido");
   
    }

    }while(pregunta != "suarez");

}

//EJERCICIO 16

function ejercicio16(){

    do{
        var pregunta = prompt ("Introduce números");
        var contador=0;
        contador ++;
    }while();
    alert(contador);

}