var x = 1;
var y = 0;
var jugador = prompt("Introduce tu nick de jugador:");

function tirada() {
    var arrayImagenes = Array("1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg");
    var imagen1 = document.getElementById('imagen1');
    var imagen2 = document.getElementById('imagen2');
    var imagen3 = document.getElementById('imagen3');
    var imagen4 = document.getElementById('imagen4');
    var imagen5 = document.getElementById('imagen5');
    var ranking = document.getElementById("ranking");
    var status = document.getElementById("status");
    var dado1 = Math.floor(Math.random() * 6) + 1;
    var dado2 = Math.floor(Math.random() * 6) + 1;
    var dado3 = Math.floor(Math.random() * 6) + 1;
    var dado4 = Math.floor(Math.random() * 6) + 1;
    var dado5 = Math.floor(Math.random() * 6) + 1;
    var intento = dado1 + dado2 + dado3 + dado4 + dado5;
    var acumulada = 0;
    acumulada += intento;
    imagen1.src = arrayImagenes[dado1 - 1];
    imagen2.src = arrayImagenes[dado2 - 1];
    imagen3.src = arrayImagenes[dado3 - 1];
    imagen4.src = arrayImagenes[dado4 - 1];
    imagen5.src = arrayImagenes[dado5 - 1];
    status.value = "Tu puntuación es " + acumulada;
    tiro.value = "Es tu tirada: " + x;
    ranking.value = "El jugador: " + jugador + " ha obtenido: " + total + " puntos\n";
    x = x + 1;
    y = intento;
    if (intento >= 8) {
        y = 0;
        var jugador = prompt("Introduce tu nick de jugador:");

    }

}