addEventListener('load', inicio, false);

var alumnos = new Array();

function inicio() {
    let bot = document.getElementById('añadir');
    bot.addEventListener('click', function() {
        al = new Alumno(document.getElementById('nombre').value, document.getElementById('curso').value, document.getElementById('asignaturas').value);
        alumnos.push(al);
    }, false);
    var resultado = document.getElementById('resultado');
    let botMos = document.getElementById('mostrar');
    botMos.addEventListener('click', function() {
        resultado.value = mostrarAlumnos(alumnos);
    }, false);
}


function mostrarAlumnos(array) {
    var texto = "";
    for (var i = 0; i < array.length; i++) {
        texto += (array[i].mostrarAlumno() + "<br>");
    }
    return texto;
}