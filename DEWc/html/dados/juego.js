var jugador = prompt("Introduce tu nick de jugador:");
var arrayJugadores = new Array;
arrayJugadores.push(jugador); //array donde se introducen los jugadores
var puntuacion = new Array(8).fill(0);
var tiradas = 0;
contadorJug = 0;
var suma = 0; //esto es la suma de cada tirada
var total = 0; //esto es el total de las 8 tiradas

function tirada() {
    var arrayRutas = Array("1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg");
    var arrayImagenes = document.images;
    for (var i = 0; i < arrayImagenes.length; i++) {
        var dados = 0;
        dados += (Math.floor(Math.random() * 6) + 1)
        arrayImagenes[i].src = arrayRutas[dados - 1];

    };
    puntuacion += dados;
    var status = document.getElementById("status");
    var tiro = document.getElementById("tiro");
    if (tiradas == 8) {
        alert("EL juego ha terminado");
        tiradas = 0;
        arrayJugadores.push(prompt("Introduce tu nick de jugador:"));
        contadorJug++;
    };
    status.value = "Tu puntuación es: " + dados;
    tiradas++;
    tiro.value = "Es tu tirada: " + tiradas;

};

function clasificacion() {
    var ranking = document.getElementById("ranking");
    var cadenas = new Array();
    for (i = 0; i < arrayJugadores.length; i++) {
        var cadena = "El jugador " + arrayJugadores[i] + " ha obtenido ==>" + parseInt(puntuacion) + " puntos";
        cadenas.push(cadena);
        ranking.value = cadenas.join("\n");
    };
}