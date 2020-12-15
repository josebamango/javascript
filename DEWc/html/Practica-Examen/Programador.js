     //METE TODOS LOS PARAMETROS EN EL CONSTRUCTOR DEL HIJO TAMBIEN
     function Programador(nombre, dni, edad, casado, salario, lineasPorDia, lenguaje) {
         //ASI CON EL CALL DE MIERDA ESTOY HACIENDO QUE EL THIS SEAN LOS PARAMETROS DE ARRIBA Y DESPUES VA TODO LO DEL EMPLEADO
         Empleado.call(this, nombre, dni, edad, casado, salario);
         this.lineasPorDia = lineasPorDia;
         this.lenguaje = lenguaje;
         //HAY QUE LLAMAR A TODOS LOS METODOS DENTRO DE LA CLASE ASI O DE LA OTRA VAINA
         this.totalLineas = totalLineas;

     }

     function totalLineas() {
         return this.lineasPorDia * 20; //trabaja 20 dias al mes  
     }