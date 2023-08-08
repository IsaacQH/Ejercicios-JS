'use strict'                                                  

window.addEventListener('load', () =>{                          //Se inicia el evento Load


    //TIMER:   setInterval, setTimout, clearInterval

    function intervalo(){
        var tiempo = setInterval(() => {                                //Función flecha o callback
            console.log("Set interval ejecutado")                       //Imprime en consola que se ejecuto el set interval
    
            var size = document.querySelector("h1").style.fontSize      //Guarda en una variable el tamaño de letra de la etiqueta h1
    
            if(size == "50px"){                                         //Si el tamaño es de 50 px
                document.querySelector("h1").style.fontSize = "100px"   //Cambialo a 100 px
            }else{
                document.querySelector("h1").style.fontSize = "50px"    //Si el tamaño es otro, cambialo a 50 px
            }
    
        }, 1000);                                                       //1 segundos
        return tiempo                                                   //rRgresa variable tiempo para poder ser detenido
    }
    
    var tiempo = intervalo()

    var stop = document.querySelector("#stop")                          //Guarda la etiqueta html con id stop (boton stop)
    stop.addEventListener('click', () => {                              //Crea evento click en boton stop
        clearInterval(tiempo)                                           //Detiene el setInterval llamado tiempo
        alert("Haz parado el bucle de set Interval")                    //Muestra una alerta
    })

    var start = document.querySelector("#start")                        //Guarda la etiqueta html con id start (boton start)
    start.addEventListener('click', () => {                             //Crea evento click en boton start
        intervalo()                                                     //Comienza el setInterval llamado tiempo
        alert("Haz iniciado el bucle de set Interval")                  //Muestra una alerta
    })



















})  //Se cierra el evento Load


