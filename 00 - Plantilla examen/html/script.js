addEventListener("load", inicio, false);

function inicio()
{   
    botonTabla = document.getElementById("BtnTabla");
    botonTabla.addEventListener("click", mostrarNotas, false);

    botonMedia = document.getElementById("BtnMedia");
    botonMedia.addEventListener("click", mostrarMedia, false);

    botonMediaEva = document.getElementById("BtnMediaEva");
    botonMediaEva.addEventListener("click", mostrarMediaEva, false);

    botonMayor = document.getElementById("BtnMayor");
    botonMayor.addEventListener("click", mostrarNotaMayor, false);
    
    botonMenor = document.getElementById("BtnMenor");
    botonMenor.addEventListener("click", mostrarNotaMenor, false);
    
    botonMediaAlumno = document.getElementById("BtnMediaAlumno");
    botonMediaAlumno.addEventListener("click", mostrarMediaAlumno, false);

    botonEliminarSuspensos = document.getElementById("BtnSuspensos");
    botonEliminarSuspensos.addEventListener("click", eliminarSuspensos, false);
}

var alumnos = [
    ["Ernesto",10,2,6],
    ["Javier",7,6,6],
    ["Maria",3,2,6],
    ["Julián",9,2,9],
    ["Natividad",3,5,8],
    ["Lorena",9,1,1],
    ["Pepe",5,4,6],
    ["Estefania",7,9,8],
    ["Margarita",3,5,4],
    ["Luis",8,7,6]
];

//Visualizar el listado de alumnos con sus tres notas 
function mostrarNotas()
{
    limpiar();
    let tablaActualizada = getTabla();
    let tabla1 = document.getElementById('resultadosID');
    tabla1.innerHTML+= tablaActualizada;
}

//Visualizar y calcular la media de cada alumno y guardarlo en el array Medias.
function mostrarMedia()
{
    limpiar();
    let medias = getMedia();
    mediaAlumnos(medias);
}

//Visualizar y calcular la media de cada evaluación, y guardarlo en array MediasEval
function mostrarMediaEva()
{
    limpiar();
    let MediaEvaluaciones = getMediasEval();
    mediaEva(MediaEvaluaciones);

}

//Introducir un nombre de alumno y visualizar el nombre del alumno con su nota media.
function mostrarMediaAlumno()
{   
    limpiar();
    let nombre = prompt(`Indroduzca el nombre del alumno del que quiere saber la nota media` );
    let media = getMedia();
    let posicion = buscarNombre(nombre, media);
    if(posicion != null){
        let label = document.getElementById('resultadosID');
        label.innerHTML+= `La nota media de <strong>`+ alumnos[posicion][0] + `</strong> es de `+media[posicion];
        
    }else{
        alert(`Error, nombre no encontrado`);
    }

}

// Introducir un nombre de alumno y visualizar el nombre del alumno con su nota media.
function buscarNombre(nombre,medias)
{
    for(i = 0; i < alumnos.length; i++){
        if(nombre.toLowerCase() == alumnos[i][0].toLowerCase()){
            return i;
        }
    }
    return null;
}
//Mostrar alumno/s con mayor nota
function mostrarNotaMayor()
{
    limpiar();
    let media = getMedia();
    let mayor = getMediaMax(media);
    notaMayor(mayor,media);
}

//Mostrar alumno/s con menor nota
function mostrarNotaMenor()
{
    limpiar();
    let media = getMedia();
    let menor = getMediaMin(media);
    notaMenor(menor,media);
}

//Eliminar del array alumnos los suspensos y crear el array suspensos.

function eliminarSuspensos()
{
    limpiar();
    let media = getMedia();
    let suspensos = alumnosSuspensos(media);
    mostrarEliminarSuspensos(suspensos);
}

//Eliminamos y guardamos en un array aquellos alumnos que no llegue al 4
function alumnosSuspensos(media){
    let suspensos = getSuspensos(media);
    let arraySuspensos = [];
    let posicion = 0;

    for (var i = 0; i < suspensos.length; i++) {
        posicion = suspensos[suspensos.length-1-i];
        arraySuspensos.push(alumnos.splice(posicion,1));
    }
    return arraySuspensos;
}

//Modificamos el label
function mostrarEliminarSuspensos(array)
{
    let label1 = document.getElementById('resultadosID');

    if(array.length <= 0){
        label1.innerHTML = "Todos los alumnos están aprobados";
    }else{
        array.length > 1 ?  label1.innerHTML+="Los alumnos eliminados son: <br>" : label1.innerHTML+="El alumno eliminado es ";
        for (var i = 0; i < array.length; i++) {
            label1.innerHTML+= "<strong>"+ array[i][0][0] + "</strong> <br>";
        }
    }
}

//Modificamos el label
function notaMayor(array,media)
{
    let label1 = document.getElementById('resultadosID');

    array.length > 1 ?  label1.innerHTML+="Los alumnos con mayor nota son: <br>" : label1.innerHTML+="El alumno con mayor nota es ";
    for (var i = 0; i < array.length; i++) {
        let posicion = array[i];
        label1.innerHTML+= "<strong>"+ alumnos[posicion][0] + "</strong>, con una media de <strong>"+ media[posicion]+"</strong><br>";
    }
}

//Modificamos el label
function notaMenor(array,media)
{
    let label1 = document.getElementById('resultadosID');
    
    array.length > 1 ?  label1.innerHTML+="Los alumnos con menor nota son: <br>" : label1.innerHTML+="El alumno con menor nota es: <br>";
    for (var i = 0; i < array.length; i++) {
        let posicion = array[i];
        label1.innerHTML+= "<strong>"+ alumnos[posicion][0] + "</strong>, con una media de <strong>"+ media[posicion]+"</strong><br>";
    }
}

//Modificamos el label
function mediaEva(array){
    let tabla1 = document.getElementById('resultadosID');
    let html = "<table> <tr> <th>1ª Eva </th> <th>2ª Eva </th> <th>3ª Eva </th> </tr> <tr>";

    for (var i = 0; i < array.length; i++) {
        html += " <td>"+array[i]+"</td> ";
    }

    html += " </tr> </table>";
    tabla1.innerHTML += html;
}

//Modificamos el label
function mediaAlumnos(array)
{
    let label1 = document.getElementById('resultadosID');
    
    for (var i = 0; i < array.length; i++) {
        label1.innerHTML+= "El alumno <strong>"+ alumnos[i][0] + "</strong>, tiene una nota media de <strong>"+ array[i]+"</strong><br>";
    }
}

function limpiar(){
    let elemento = document.getElementById('resultadosID');
    elemento.innerHTML = "";
}

// Return Array con la media de cada evaluacion 
function getMediasEval()
{
    let arrayMediaEval = new Array;
    
    arrayMediaEval.push(getMediaEva(1));
    arrayMediaEval.push(getMediaEva(2));
    arrayMediaEval.push(getMediaEva(3));

    return arrayMediaEval;
}

// Return Media de cada evaluacion que se pasa como parametro
function getMediaEva(numeroEva)
{
    var suma = 0;
    for (var i = 0; i < alumnos.length; i++) {
        suma += alumnos[i][numeroEva];
    }
    return (suma/alumnos.length).toFixed(2); //solo 2 decimales
}

//Visualizar el listado de alumnos con sus tres notas en una tabla.
function getTabla()
{
    let aux = "<table>" +
               "<tr><th> Alumno </th> <th>1ª Eva</th> <th>2ª Eva</th> <th>3ª Eva</th> </tr>"; 
    for (i=0;i<alumnos.length;i++){ 
        aux += "<tr>"; 
        for (j=0;j<alumnos[i].length;j++){ 
            aux += "<td>" + alumnos[i][j] + "</td>"; 
        } 
        aux += "</tr>";
    }
    aux += "</table>";
    return aux;
}

//  Return array con la media de las 3 evaluaciones de cada alumno
function getMedia() {
    let suma = 0;
    let arrayMedia = new Array;
    for (i=0;i<alumnos.length;i++) {
        for (j=0;j<alumnos[i].length;j++) {
            if(!isNaN(alumnos[i][j])){
                suma += alumnos[i][j];
            }
        }
        arrayMedia[i] = parseInt(suma/3); // Enteros
        suma = 0;
        contadorDivisor = 0;
    } 
    return arrayMedia;
}

// Return array con la posicion/es de aquellas notas mayor
function getMediaMax(arrayMedia)
{
    var numMayor = Math.max(...arrayMedia);
    var mayores = [];

    for (var i = 0; i < arrayMedia.length; i++) {
        if(arrayMedia[i] == numMayor){
            mayores.push(i);
        }
    }
    return mayores;
}

// Return array con la posicion/es de aquellas notas menor
function getMediaMin(arrayMedia)
{
    var numMin = Math.min(...arrayMedia);
    var menores = [];

    for (var i = 0; i < arrayMedia.length; i++) {
        if(arrayMedia[i] == numMin){
            menores.push(i);
        }
    }
    return menores;
}

//Return array con la posicion de aquellos alumnos suspensos 
function getSuspensos(arrayMedia)
{
    var suspensos = [];

    for (var i = 0; i < arrayMedia.length; i++) {
        if(arrayMedia[i] <= 4){
            suspensos.push(i);
        }
    }
    return suspensos;
}
