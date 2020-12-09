class Alumno {

    constructor(nombreAlumno, curso, numMateriasAlumno) {
        this.nombre = nombreAlumno;
        this.curso = curso;
        this.asignaturas = numMateriasAlumno;
    }

    mostrarAlumno() {
        let cadena = "";
        return cadena = "El alumno: " + this.nombre + " va al curso " +
            this.curso + " y tiene " + this.asignaturas + " asignaturas.\n";
    }
}