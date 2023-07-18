'use strict'

// Se pondrá a prueba todo el conocimiento adquirido desde el las prácticas del 01-10.

//EJERCICIO 2

//Utilizando un bucle, mostrar la media y la suma de los números introducidos por el usuario hasta que se introduzca un valor negativo.

var suma = 0;
var media = 0;
var divisor = 0;

do{
    var numero = Number(prompt("Introduce numeros hasta que metas uno negativo", 0));  //lee el valor ingresado en numero
    if(isNaN(numero)){                                              //Si no es un numero, el valor es cero
        numero = 0;
    } else if(numero>=0){                                           //Hace operaciones solo si el valor es igual o mayor a 0
        suma = suma + numero;                                       //Suma el valor suma + numero
        divisor++;                                                  //aumenta el contador de datos ingresados
        media = suma/divisor                                        //Calcula la media 
    }
    //media = suma/divisor                                          //Tambien puede ser aquí
} while(numero >= 0 )                                               //Acaba cuando el valor sea menor que cero

alert("La suma de los numeros intruducidos es: " + suma);           //Imprimer valor de suma
alert("La media de los numeros introducidos es: "+ media);          //Imprimer valor de media