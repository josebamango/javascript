var aux = true;
var contador = 0;
do {
    var entrada = prompt ("Introduce un número");
    if(entrada==""){
        aux = false;
    }else if(!isNaN(entrada)){
        contador++;
    }
} while (aux);
alert (contador);