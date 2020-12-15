//No está completo pero he hecho lo que me ha dado tiempo entre ayer por la noche y esta mañana
addEventListener("load", inicio, false);

programador.prototype = new Empleado();
analista.prototype = new Empleado();
var empleados = new Array();
var p1 = new Array();

function inicio() {
    var alta = document.getElementById("alta");
    let nombre = document.getElementById('nombre');
    let dni = document.getElementById('dni');
    var edad = document.getElementById('edad');
    let casado = document.getElementsByName('casado');
    let salario = document.getElementById('salario');
    var lenguaje = document.getElementById("lenguaje");
    var lineas = document.getElementById('lineas');
    var descripcion = document.getElementById("descripcion");
    var mostrar = document.getElementById("mostrar");
    var resultado = document.getElementById("resultado");
    alta.addEventListener("click", function() {
        empleado = new programador(nombre.value, dni.value, edad.value, casado.value, salario.value, lineas.value, lenguaje.value, descripcion.value);
        empleados.push(empleado);
    }, false);
    mostrar.addEventListener("click", function() {
        resultado.value = mostrarDatos(empleados);
    }, false);

}


function ocultar() {
    if (document.getElementById('pro').checked) {
        document.getElementById('programador').style.visibility = 'visible';
        document.getElementById('analista').style.visibility = 'hidden';
    } else if (document.getElementById('ana').checked) {
        document.getElementById('analista').style.visibility = 'visible';
        document.getElementById('programador').style.visibility = 'hidden';
    }
}


function clasificacion() {
    var edad = document.getElementById('edad').value;
    var c = "";
    if (edad <= 21) {
        c = "Principiante";
    } else if ((edad >= 22) & (edad <= 35)) {
        c = "Intermedio";
    } else {
        c = "Senior";
    }
    return c;
}

function civil() {
    if (document.getElementById('si').checked) {
        return "si";
    } else if (document.getElementById('no').checked) {
        return "no";
    }
}

function tipo() {
    if (document.getElementById('pro').checked) {
        return "programador";
    } else if (document.getElementById('ana').checked) {
        return "analista";
    }

}
//hice esta funcion porque me daba todo el rato un error a la hora de pintar las lineas
function lineas() {
    return document.getElementById('lineas').value;
}

function mostrarDatos(empleados) {
    var texto = "";
    for (var i = 0; i < empleados.length; i++) {
        /*  parseInt(empleados[i].aumentarSalario(50)); */
        /*  parseInt(empleados[i].totalLineas()); */
        texto += "El empleado se llama: " + empleados[i].nombre + ", su DNI es:" +
            empleados[i].dni + ", tiene " + empleados[i].edad + " años, y " + civil() +
            " está casado, gana además " + empleados[i].salario + " € Es un empleado " + clasificacion() +
            " y es un " + tipo() + ". Escribe " + lineas() + " lineas por día en " + empleados[i].lenguaje + ".\n";
    }
    return texto;
}