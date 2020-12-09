addEventListener('load', inicio, false);
var contador = 0;

function inicio() {
    var boton = document.getElementById("botonOtro");
    boton.addEventListener('click', añadir, false);
    boton.addEventListener('click', limpiar, false);
    var total = document.getElementById("total");
    total.addEventListener('click', contar, false);
}

function añadir() {
    var campoTexto = document.getElementById("contador");
    var num = document.getElementById("numero");
    campoTexto.value += num.value + "-";
    contador++;
}

function limpiar() {
    document.getElementById("numero").value = " ";
}

function contar() {
    var texto = document.getElementById("totalisimo");
    texto.value = parseInt(contador);
}