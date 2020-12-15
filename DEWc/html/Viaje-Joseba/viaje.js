addEventListener("load", inicio, false);
var viajes = Array(
    Array("Salidas", "Roma", "París", "Londres"),
    Array("San Pedro", 0, 0, 0),
    Array("Santander", 0, 0, 0),
    Array("Torrelavega", 0, 0, 0),
);


function inicio() {
    var mostrar = document.getElementById('mostrar');
    var nueva;
    var trasporte = document.getElementsByName('trasporte');
    var tabla = document.getElementById('tabla');
    var resultado = document.getElementById('resultado');
    var creacion = document.createElement("table");

    mostrar.addEventListener('click', function() {
        nueva = window.open("", "_blank", "width=500px, height=500px, top=120px, left=430px scrollbars=yes");
        for (i = 0; i < trasporte.length; i++) {
            if (trasporte[i].checked == true) {
                nueva.document.write(`El viaje se hará en: ${trasporte[i].value}<br>`);
            }
        };
        nueva.document.write(`
        <title>Popup</title>
        El punto de salida es: ${salida.options[salida.selectedIndex].text}<br> 
        El punto de llegada es: ${llegada.options[llegada.selectedIndex].text}<br>
        <img src="${llegada.value}.jpg" style="width: 300px">`);
        nueva.document.write("<br><input type='button' name='cerrar' id='cerrar' value='CERRAR'>");
        var cerrar = nueva.document.getElementById('cerrar');

        cerrar.addEventListener('click', function() {
            nueva.close();
        }, false);

    }, false);

    tabla.addEventListener('click', function() {
        creacion.innerHTML = "";
        viajes[parseInt(salida.value) + 1][parseInt(llegada.value) + 1]++;
        for (i = 0; i < viajes.length; i++) {
            var hilera = document.createElement("tr");
            for (j = 0; j < viajes[i].length; j++) {
                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(viajes[i][j]);
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
            };
            creacion.appendChild(hilera);
        };
        resultado.appendChild(creacion);
        creacion.setAttribute("border", "2");
    }, false);



}