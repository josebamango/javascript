     function Empleado(nombre, dni, edad, casado, salario) {
         this.nombre = nombre;
         this.dni = dni;
         this.edad = edad;
         this.casado = casado;
         this.salario = salario;
         //TODOS LOS METODOS HAY QUE INICIALIZARLOS AQUI TAMBIEN    
         this.clasificacion = clasificacion;
         this.mostrar = mostrar;
         this.aumento = aumento;

     }


     function clasificacion() {
         //NO PONGAS DOC, PON UNA VARIABLE TEXTO Y RETURNEALA   
         var texto = "";
         if (this.edad <= 21) {
             texto = 'Principiante';
         } else if (this.edad >= 21 && this.edad <= 35) {
             texto = 'Intermedio';
         } else {
             texto = 'Senior';
         }
         return texto;
     }

     function mostrar() {
         //FIJATE  EN ESTO PARA LOS BOOLEANOS
         var estadoCivil = "no";
         if (this.casado) {
             estadoCivil = "si";
         }
         return "Nombre: " + this.nombre + "DNI: " + this.dni + "Edad: " + this.edad + "Casado: " + estadoCivil + "Salario: " + this.salario;
     }

     function aumento(porcentaje) {

         this.salario = this.salario * (1 + porcentaje) / 100;
     }