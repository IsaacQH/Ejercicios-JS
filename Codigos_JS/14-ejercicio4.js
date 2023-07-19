'use strict'

// Se pondrá a prueba todo el conocimiento adquirido desde el las prácticas del 01-10.

//EJERCICIO 3

//Mostrar todos los números impares que se encuentren en una secuencia de dos números introducidos. Si se colocan 2 y 8, tienen que salir todos los pares que se encuentren entre esos números.

while(isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt("Introduce el primer valor de secuencia: ", 0))
    var numero2 = parseInt(prompt("Introduce el valor final de la secuencia: ", 0))

    document.write("<h1>Secuencia de numeros de "+ numero1 + " a " + numero2 + ". </h1>")
    for(numero1; numero1<=numero2; numero1++){
        if(numero1%2 == 0){
            document.write(numero1 + "<br/>");
        }
    }

}