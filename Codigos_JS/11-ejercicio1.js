'use strict'

// Se pondrá a prueba todo el conocimiento adquirido desde el las prácticas del 01-10.

//EJERCICIO 1

// Hacer un programa que nos pida dos números y nos mencione cual es mayor, cual es menor o si son iguales. Si los números no son un número o menores o iguales a 0, nos vuelva a pedir que introduzcamos nuevos datos.

 
console.log(numero1, numero2);                                              //En consola aparecerán el valor 1 y valor 2

while(numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){     //Repite hasta que los números sean correctos                   
    var numero1 = Number(prompt("Ingresa el primer numero:", 0));           //Se pide ingresar el primer número, valor default 0, lee número
    var numero2 = Number(prompt("Ingresa el segundo numero:", 0));          //Se pide ingresar el segundo número, valor default 0, lee número
}

if(numero1 < numero2){                                                      //Condicional si N1 es menor que N2
    alert("El numero mayor es el: " + numero2)   
}else if(numero1 > numero2){                                                //Condicional si N1 es mayor que N2
    alert("El numero mayor es el: " + numero1)
}else if(numero1 == numero2){                                               //Condicional ambos numeros son iguales
    alert("Ambos numeros son iguales")
}else {
    alert("Introduce numeros correctos")
}
