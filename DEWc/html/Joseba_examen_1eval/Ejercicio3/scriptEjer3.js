addEventListener('load', inicio, false);

function inicio() {
    var botonInicio = document.getElementById('inicio');
    var botonAdelante = document.getElementById('adelante');
    var botonAtras = document.getElementById('atras');
    var botonFin = document.getElementById('final');
    botonInicio.addEventListener('click', mostrarInicio, false);
    botonAdelante.addEventListener('click', mostrarAdelante, false);
    botonAtras.addEventListener('click', mostrarAtras, false);
    botonFin.addEventListener('click', mostrarFin, false);

}

var arrayRutas = Array("1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg");
var arrayImagenes = document.images;
var posicionInicio = 0;
var posicionFin = 7;
var posicionActual = 0;

function mostrarInicio() {
    arrayImagenes[posicionActual].src = "";
    posicionActual = 0;
    arrayImagenes[posicionActual].src = arrayRutas[posicionActual];
};

function mostrarAdelante() {
    arrayImagenes[posicionActual].src = "";
    posicionActual++;
    arrayImagenes[posicionActual].src = arrayRutas[posicionActual];
};

function mostrarAtras() {
    arrayImagenes[posicionActual].src = "";
    posicionActual--;
    arrayImagenes[posicionActual].src = arrayRutas[posicionActual];
};

function mostrarFin() {
    arrayImagenes[posicionActual].src = "";
    posicionActual = arrayImagenes.length - 1;
    arrayImagenes[posicionActual].src = arrayRutas[posicionActual];
};