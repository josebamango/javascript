function Empleado(nombre, dni, edad, casado, salario) {
    this.nombre = nombre;
    this.dni = dni;
    this.edad = edad;
    this.casado = casado;
    this.salario = salario;
}


function analista(nombre, dni, edad, casado, salario, descripcionProyectos) {
    Empleado.call(this, nombre, dni, edad, casado, salario)
    this.descripcionProyectos = descripcionProyectos;

}

function programador(nombre, dni, edad, casado, salario, lineasPorDia, lenguaje) {
    Empleado.call(this, nombre, dni, edad, casado, salario)
    this.lineasPorDia = lineasPorDia;
    this.lenguaje = lenguaje;
    /* this.totalLineas = function() {
        this.lineasPorDia = this.lineasPorDia * 20; //trabaja 20 dias al mes  
    } */

}

function mostrar() {
    return `El empleado: ${this.nombre},con dni: ${this.dni}, tiene ${this.edad} años, ${this.casado} está casado y cobra ${this.salario}`;
}

function aumentarSalario(porcentaje) {
    this.salario = this.salario * (porcentaje);

}