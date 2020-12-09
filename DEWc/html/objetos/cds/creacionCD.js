addEventListener('load', inicio, false);

var discos = new Array();

function inicio() {
    let bot = document.getElementById('añadir');
    bot.addEventListener('click', function() {
        cd1 = new CD(document.getElementById('titulo').value, document.getElementById('grupo').value, document.getElementById('fecha').value);
        discos.push(cd1);
        CD.prototype.precio = 0;
        discos = Calcular(discos);
    }, false);
    var resultado = document.getElementById('resultado');
    let botMos = document.getElementById('mostrar');
    botMos.addEventListener('click', function() {
        resultado.value = mostrardiscos(discos);
    }, false);
}


function mostrardiscos(array) {
    var texto = "";
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        texto += (array[i].mostrarDisco() + " y cuesta:");
        texto += array[i].precio + "€\n";
        total += array[i].precio;

    }
    return texto + " El precio total de los discos es: " + total;
}

function Calcular(array) {
    for (i = 0; i < array.length; i++) {
        array[i].precio = (Math.floor(Math.random() * 20) + 1);

    };
    return array;
}