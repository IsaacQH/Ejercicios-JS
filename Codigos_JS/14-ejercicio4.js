'use strict'

// Se pondrá a prueba todo el conocimiento adquirido desde el las prácticas del 01-10.

//EJERCICIO 4

//Mostrar todos los números impares que se encuentren en una secuencia de dos números introducidos. Si se colocan 2 y 8, tienen que salir todos los pares que se encuentren entre esos números.

while(isNaN(numero1) || isNaN(numero2)){                                              //Hace que el buble se reipita si no se introduce un numero
    var numero1 = parseInt(prompt("Introduce el primer valor de secuencia: ", 0))     //Registra valor1
    var numero2 = parseInt(prompt("Introduce el valor final de la secuencia: ", 0))   //Registra valor2

    document.write("<h1>Secuencia de numeros de "+ numero1 + " a " + numero2 + ". </h1>") //Escribir en el cofumento lo indicado como encabezado 
    for(numero1; numero1<=numero2; numero1++){                                       //Entra al bucle de incremento entre numeros indicados
        if(numero1%2 == 0){                                                          //solo si es divisible entre 2 entra al condicinal
            document.write(numero1 + "<br/>");                                       //Escribe el número par y hace un salto de linea
        }
    }
}