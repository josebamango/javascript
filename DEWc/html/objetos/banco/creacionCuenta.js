addEventListener('load', inicio, false);

var clientes = new Array();

function inicio() {
    let bot = document.getElementById('añadir');
    bot.addEventListener('click', function() {
        cliente1 = new cuentaCorriente(new datosP(document.getElementById('nombre').value, document.getElementById('dni').value), document.getElementById('numero').value, document.getElementById('saldo').value);
        clientes.push(cliente1);

    }, false);
    var resultado = document.getElementById('resultado');
    let botMos = document.getElementById('mostrar');
    botMos.addEventListener('click', function() {
        resultado.value = mostrarclientes(clientes);
    }, false);
}



function mostrarclientes(array) {
    var texto = "";
    for (var i = 0; i < array.length; i++) {
        texto += (array[i].mostrarCliente());
    }
    return texto;
}



function cargo(array) {
    var saldo = 0;
    for (i = 0; i < array.length; i++) {
        saldo = array[i].cargo(200);

    };
    return saldo;
}