addEventListener('load', inicio, false);

vaca.prototype = new animal();
tigre.prototype = new animal();
var vacas = new Array();
var tigres = new Array();

function inicio() {
    let bot = document.getElementById('añadir');
    let nombre = document.getElementById('nombre');
    let especie = document.getElementById('especie');
    let patas = document.getElementById('patas');
    let litros = document.getElementById('litros');
    //let victimas = document.getElementById('victimas');
    let cola = document.getElementById('cola');
    bot.addEventListener('click', function() {
        vaca1 = new vaca(nombre.value, especie.value, patas.value, cola.value, litros.value);
        vacas.push(vaca1);
    }, false);
    var resultado = document.getElementById('resultado');
    let botMos = document.getElementById('mostrar');
    botMos.addEventListener('click', function() {
        resultado.value = mostrarVacas(vacas);
    }, false);
}


function mostrarVacas(array) {
    var texto = "";
    for (var i = 0; i < array.length; i++) {
        parseInt(array[i].ordeñar(litros.value));
        //parseInt(array[i].otraVictima(victimas.value));
        texto += "El animal es un/a: " + array[i].nombre + ", de la especie de los " +
            array[i].especie + ", tiene " + array[i].numeroPatas + " patas, y " + array[i].cola + " tiene cola" + ".\n";
    }
    return texto;
}