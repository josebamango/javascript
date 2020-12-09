function animal(nombre, especie, numeroPatas, cola) {
    {
        this.nombre = nombre;
        this.especie = especie;
        this.numeroPatas = numeroPatas;
        this.cola = cola;
    }
}

function vaca(nombre, especie, numeroPatas, cola, litros) {
    //Super de Java
    animal.call(this, nombre, especie, numeroPatas, cola)
    this.litros = litros;
    this.ordeñar = function(variacion) {
        this.litros = this.litros - variacion;
    }
}

function tigre(nombre, especie, numeroPatas, cola, victimas) {
    animal.call(this, nombre, especie, numeroPatas, cola)
    this.victimas = victimas;
    this.otraVictima = function(variacion) {
        this.victimas = this.victimas - variacion;
    }
}