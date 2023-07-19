'use strict'

// Se pondrá a prueba todo el conocimiento adquirido desde el las prácticas del 01-10.

//EJERCICIO 6

//Ingresar un número en una prompt y revisar si el número es par o impar. Si no es número debe volver a pedir el valor.

while(isNaN(number)){
    var number = parseInt(prompt("Introducir número", 0))          //Revisa que el valor sea número, sino vuelve a preguntar
}

if(number%2 == 0){                                              
    alert("El numero " + number + " es par." )                  //Condicion si es par
} 
else if (number%2 != 0){                                        //Condicion si es impar
    alert("El numero " + number + " es impar." )
}