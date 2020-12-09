addEventListener('load', inicio, false);

hijoTaxi.prototype = new padreTaxi();
var taxis = new Array();

function inicio() {
    let bot = document.getElementById('añadir');
    let motor = document.getElementById('motor');
    let pasajeros = document.getElementById('pasajeros');
    let carga = document.getElementById('carga');
    let velocidad = document.getElementById('velocidad');
    bot.addEventListener('click', function() {
        taxi1 = new hijoTaxi(motor.value, pasajeros.value, parseInt(carga.value), parseInt(velocidad.value));
        taxis.push(taxi1);
    }, false);
    var resultado = document.getElementById('resultado');
    let botMos = document.getElementById('mostrar');
    botMos.addEventListener('click', function() {
        resultado.value = mostrarTaxis(taxis);
    }, false);
}


function mostrarTaxis(array) {
    var texto = "";
    for (var i = 0; i < array.length; i++) {
        parseInt(array[i].variarCarga(50));
        parseInt(array[i].variarVelocidad(50));
        texto += "El taxi: " + array[i].tipoMotor + " tiene capacidad para  " +
            array[i].numeroPasajeros + ", puede llevar " + array[i].carga + "kg de carga, y alcanza los " + array[i].velocidad + " km por hora" + ".\n";
    }
    return texto;
}