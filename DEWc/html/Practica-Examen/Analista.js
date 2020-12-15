     function Analista(nombre, dni, edad, casado, salario, proyectos) {
         //ASI CON EL CALL DE MIERDA ESTOY HACIENDO QUE EL THIS SEAN LOS PARAMETROS DE ARRIBA Y DESPUES VA TODO LO DEL EMPLEADO
         Empleado.call(this, nombre, dni, edad, casado, salario);
         this.proyectos = proyectos;
         //HAY QUE LLAMAR A TODOS LOS METODOS DENTRO DE LA CLASE ASI O COMO EN LA DE PROGRAMADOR
         this.numeroProyectos = function() {
             return this.proyectos.length;
         };
     }