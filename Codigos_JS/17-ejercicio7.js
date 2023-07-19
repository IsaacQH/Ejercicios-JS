'use strict'

// Se pondrá a prueba todo el conocimiento adquirido desde el las prácticas del 01-10.

//EJERCICIO 7

//Crear la tabla de multiplicar para el número introducido en el prompt.

while(isNaN(number)){
    var number = parseInt(prompt("Introducir número", 0))          //Revisa que el valor sea número, sino vuelve a preguntar
}

for(var i = 1; i <= 10;i++){                                      //Ciclo de for que cuenta el i como contador del 1-10
    document.write(i*number + "<br/>")                            //Se multiplica el numero por 1-10 y lo muestra en la web
}