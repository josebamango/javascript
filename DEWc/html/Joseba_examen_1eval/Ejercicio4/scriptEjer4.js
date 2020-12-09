addEventListener('load', inicio, false);

function inicio() {


    for (i = 0; i < 4; i++) {
        let nombre = "Sala IF0" + (i + 1);
        let sala = new Array();
        sala.push(nombre);
        for (j = 0; j < 20; j++) {
            let estado = Math.floor(Math.random() * 2);

        };
    };

}

function libresSala(salas) {
    var libre = 0;
    var lleno = 0;
    for (i = 0; i < salas.length; i++) {
        if (salas[i] == 0) {
            libre++;
        } else if (salas[i] == 1) {
            lleno++;
        }
    };
    document.write("<br>Hay: " + libre + " ordenadores libres");
    document.write("<br>Hay: " + lleno + " ordenadores ocupados");

}