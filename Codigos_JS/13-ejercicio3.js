'use strict'

// Se pondrá a prueba todo el conocimiento adquirido desde el las prácticas del 01-10.

//EJERCICIO 3

//Hacer un programa que muestre los números que hay entre dos números introducidos por el usuario. Se nos pedirá un número, luego otro y posteriormente debemos de mostrar los todos los números que hay entre estos.

while(isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt("Introduce el primer valor de secuencia: ", 0))
    var numero2 = parseInt(prompt("Introduce el valor final de la secuencia: ", 0))

    document.write("<h1>Secuencia de numeros de "+ numero1 + " a " + numero2 + ". </h1>")
    for(numero1; numero1<=numero2; numero1++){
        document.write(numero1 + "<br/>")
    }

}