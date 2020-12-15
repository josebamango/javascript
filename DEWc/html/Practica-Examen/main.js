addEventListener("load", inicio, false);


function inicio() {

    var alta = document.getElementById("alta");
    var arrayEmpleados = new Array();
    var arrayProgramadores = new Array();
    var arrayAnalistas = new Array();
    var nombre = document.getElementById('nombre');
    var dni = document.getElementById('dni');
    var edad = document.getElementById('edad');
    var casado = document.getElementsByName('casado');
    var salario = document.getElementById('salario');
    var lineas = document.getElementById('lineas');
    var lenguaje = document.getElementById("lenguaje");
    var descripcion = document.getElementById("descripcion");
    var mostrar = document.getElementById("mostrar");
    var principiantes = document.getElementById('principiantes');
    var resultado = document.getElementById("resultado");
    //ESTO ES PARA HACER LAS HIJAS CON HERENCIA 
    /*   Programador.prototype = new Empleado();
      Analista.prototype = new Empleado(); */
    alta.addEventListener('click', function() {
        var estadoCivil;
        for (i = 0; i < casado.length; i++) {
            if (casado[i].checked) {
                estadoCivil = casado[i].value;
            }
        };
        if (document.getElementById('pro').checked) {
            p1 = new Programador(nombre.value, dni.value, edad.value, estadoCivil, salario.value, lineas.value, lenguaje.value);
            arrayProgramadores.push(p1);
        } else {
            var arrayProyectos = descripcion.value.split("-");
            a1 = new Analista(nombre.value, dni.value, edad.value, estadoCivil, salario.value, arrayProyectos);
            arrayAnalistas.push(a1);
        }

    }, false);

    principiantes.addEventListener('click', function() {
        mostrarPrincipiante(arrayAnalistas, resultado);
        mostrarPrincipiante(arrayProgramadores, resultado);
    }, false);

    mostrar.addEventListener('click', function() {
        visualizarAnalistas(arrayAnalistas);
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

function mostrarPrincipiante(arrayEmpleados, resultado) {
    for (i = 0; i < arrayEmpleados.length; i++) {
        if (arrayEmpleados[i].clasificacion() == "Principiante") {
            resultado.innerHTML += arrayEmpleados[i].mostrar();
        }
    };

}

function mostrarProgramador(arrayProgramadores) {
    document.getElementById("resultado").innerHTML += "============ PROGRAMADORES ============";
    for (programador in arrayProgramadores) {
        document.getElementById("resultado").innerHTML +=
            arrayProgramadores[programador].mostrar() +
            " Número de proyectos : " + arrayProgramadores[programador].totalLineas();
    }

}

function visualizarAnalistas(arrayAnalistas) {
    document.getElementById("resultado").innerHTML += "============ ANALISTAS ============";
    console.log(arrayAnalistas);
    for (analista in arrayAnalistas) {
        document.getElementById("resultado").innerHTML +=
            arrayAnalistas[analista].mostrar() +
            " Número de proyectos : " + arrayAnalistas[analista].numeroProyectos();
    }
}