addEventListener('load', inicio, false);

function inicio() {
    var boton = document.getElementById("enviar");
    var estrellas = document.getElementById('tipoHotel');
    var ciudad = document.getElementById('destino');
    var tipo_viaje = document.getElementById('idas');
    var numero_dias = document.getElementById('dias_coche');
    var numero_noches = document.getElementById('noches');
    boton.addEventListener('click', calcularTotal, false);
    var totalisimo = calcularTotal(costeHotel(numero_noches.value, estrellas.value), costeAvion(ciudad.value, tipo_viaje.value), costeCoche(numero_dias.value));
    var caja = document.getElementById('total');
    caja.value = totalisimo;
}

function costeHotel(numero_noches, estrellas) {
    var precio_estrellas = 0;
    var precioHotel = 0;
    switch (estrellas) {
        case 1:
            precioHotel = 50;
            break;
        case 2:
            precioHotel = 150;
            break;
        case 3:
            precioHotel = 250;
            break;
        case 4:
            precioHotel = 350;
            break;
        case 5:
            precioHotel = 500;
            break;
        default:
            break;
    }
    return precioHotel + (numero_noches * 100);
}

function costeAvion(ciudad, tipo_viaje) {

    var precio_ciudad = 0;

    switch (ciudad) {
        case "madrid":
            precio_ciudad = 200;
            break;
        case "tokio":
            precio_ciudad = 500;
            break;
        case "berlin":
            precio_ciudad = 70;
            break;
        case "belgica":
            precio_ciudad = 37;
            break
        default:
            break;
    }
    if (tipo_viaje == "ida_vuelta") {
        precio_ciudad = precio_ciudad - (precio_ciudad * 0.1)
    } else {
        precio_ciudad = precio_ciudad;
    }
    return precio_ciudad;

}

function costeCoche(numero_dias) {
    var coche = 0;

    if (coche >= 3) {
        var precio_coche = (coche * 40) - 20;
    }
    if (coche >= 7) {
        precio_coche = (coche * 40) - 50;
    } else {
        precio_coche = coche * 40;
    }
    return precio_coche;

}

function calcularTotal(hotel, avion, coche) {
    return parseInt(hotel) + parseInt(avion) + parseInt(coche);
}