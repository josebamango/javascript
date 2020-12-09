addEventListener('load', inicio, false);

function inicio() {
    let arrayNuevo, arrayAleatorio, resultado;
    let ej1 = document.getElementById('ejemplo1');
    ej1.addEventListener('click', function() { arrayNuevo = cargaNumeros() }, false);
    let ej2 = document.getElementById('ejemplo2');
    ej2.addEventListener('click', function() { arrayAleatorio = cargarAleatorio(arrayNuevo) }, false);
    let junta = document.getElementById('concatenar');
    junta.addEventListener('click', function() { resultado = juntarIntercalado(arrayNuevo, arrayAleatorio) }, false);
}




function cargarAleatorio(creado) {
    let numAle = new Array;
    for (var i = 0; i < creado.length - 1; i++) {
        numAle.push(parseInt(Math.random() * 100));
    }
    document.getElementById('numeros2').value = numAle;
    return numAle;
}


function cargaNumeros() {
    let numerosCarga = document.getElementById('numeros1').value;
    array = numerosCarga.split(',');
    for (var i = array.length; i >= 0; i--) {
        if (isNaN(array[i])) {
            array[i] = 0;
        } else {
            array[i] = parseInt(array[i]);
        }
    }
    return array;
}


function juntarIntercalado(declarado, aleatorio) {
    var arrayIntercalado = new Array();
    for (var i = 0; i < declarado.length; i++) {
        arrayIntercalado.push(declarado[i]);
        arrayIntercalado.push(aleatorio[i]);
    }
    document.getElementById('final').innerHTML = `${arrayIntercalado}`;

}