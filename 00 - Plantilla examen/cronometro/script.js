addEventListener('load',inicio,false);

var cronometro;
var cronoPause;

function inicio(){

   botonStart = document.getElementById('btnStart');
   botonStart.addEventListener('click',function(){

      stop();
      var contador_seg = 0;
      var contador_min = 0;
      var contador_horas = 0;

      var seg = document.getElementById('segundos');
      var min = document.getElementById('minutos');
      var horas = document.getElementById('horas');
      var crono = document.getElementById('crono');

      cronometro = setInterval(function(){
         if(contador_seg == 60){
           contador_seg = 0;
           contador_min++;
           min.innerHTML = contador_min;
            if(contador_min == 60){
                 contador_min = 0;
                 contador_horas++;
              if(contador_horas == 24){
                contador_horas = 0;
              }
            }
         }
         contador_seg++;
         seg.innerHTML = contador_seg;
        
        if(contador_seg <= 9){
          seg.innerHTML = "0"+contador_seg;
        }else{
          seg.innerHTML = contador_seg;
        } 
        if(contador_min <= 9){
          min.innerHTML = "0"+contador_min;
        }else{
          min.innerHTML = contador_min;
        }
        if(contador_horas <= 9){
          horas.innerHTML = "0"+contador_horas;
        }else{
          horas.innerHTML = contador_horas;
        }

      },1000);  
   });

   botonStop = document.getElementById('btnStop');
   botonStop.addEventListener('click',function(){
    clearInterval(cronometro);
   });
}


