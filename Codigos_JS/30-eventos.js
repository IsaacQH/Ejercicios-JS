'use strict'

//EVENTOS

//Los eventos son funciones que se ejecutan cada que sucede algo.

//**********************************************************************************************************************************/
//EVENTOS LOAD:  

window.addEventListener('load', () => {                         //inicia evento load


//**********************************************************************************************************************************/
//EVENTOS RATON: 

    function colorBoton(){                                       //Funcion que cambia el color del boton
        console.log("Me has dado click")                          //Nos permite revisar si se mando a llamar la función
    
        var color = boton.style.background                        //Guarda el color del boton
        if (color == 'green'){                                    //Si background es verde entonces
            boton.style.background  = 'red'                       //Cambia a rojo
        }else {
            boton.style.background  = 'green'                     //Cambia a verde
        }                                                          
        
        boton.style.padding  = '10px'                             //Cambia el tamaño del boton
        boton.style.border  = '1px solid #ccc'                    //Da un borde con estilo de 1px
    }

    var boton = document.querySelector("#boton")                 //Extraemos el boton de idex.html usando # por ser id

 //-  Evento Click
    boton.addEventListener('click', function(){colorBoton()})     //Al dar click en etiqueta boton, manda a llamar funcion colorBoton
                                                              
//- Mouse over
    boton.addEventListener('mouseover', prueba =>                //Cuando pasa el mouse encima, cambia de color la letra a blanco
        prueba == (boton.style.color = "white"))                 //El estilo gris bajo es #ccc

//- Mouse out
    boton.addEventListener('mouseout', prueba =>                 //Cuando deja de estar encima el mouse , cambia de color la letra a blanco
        prueba == (boton.style.color = "black"))   


//**********************************************************************************************************************************/

//EVENTOS TECLADO:  

    var input = document.querySelector("#campo_nombre")         //Almacena en variable input a la entrada de nombre de html

//Evento focus
    input.addEventListener('focus', function(){                 //Crea el evento de focus en input
        console.log("[focus: Estas dentro del input")           //Imprime en consola que se realizo un focus, se entro al input
    })

//Evento blur
    input.addEventListener('blur', function(){                  //Crea el evento de blur en input
        console.log("[blur]: Estas fuera del input")            //Imprime en consola que se realizo un blur, se salio de input
    })

//Evento keydown
    input.addEventListener('keydown', function(evento){        //Crea el evento de keydown en input
        console.log("[keydown]: Se acciono tecla", String.fromCharCode(event.keyCode))      //Imprime tecla accionada hacia bajo en el input
    })

//Evento keypress
    input.addEventListener('keypress', function(evento){        //Crea el evento de keypress en input
        console.log("[keypress]: Se pulso tecla ", String.fromCharCode(evento.keyCode))      //Imprime en que se pulso una tecla dentro del input
    })

//Evento keyup
    input.addEventListener('keyup', function(evento){        //Crea el evento de keyup en input
        console.log("[keyup]: Tecla soltada ", String.fromCharCode(evento.keyCode))      //Imprime en que se pulso una tecla dentro del input
    })

//**********************************************************************************************************************************/

//EVENTOS TIMER:  








})                                                                                       //END LOAD



