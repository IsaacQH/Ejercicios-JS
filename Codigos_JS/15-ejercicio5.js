'use strict'

// Se pondrá a prueba todo el conocimiento adquirido desde el las prácticas del 01-10.

//EJERCICIO 5

//Mostrar todos los números divisibles por el número introducido en la pantalla

while(isNaN(number)){
    var number = parseInt(prompt("Introducir el numero a dividir:",0))    //Comprueba que el valor sea un número y no un str
}

for(var i = 1; i <= number; i++){                                        //Crea el contador que empieza desde el valor 0 hasta el no.
    if(number%i == 0){                                                   //Solo aquellos que sean divisibles entre el número se agregan
        document.write("Divisor de "+ number + " es: " + i +"</br>")                                    
        console.log(i)
    }       
}