'use strict'

// Se pondrá a prueba todo el conocimiento adquirido desde el las prácticas del 01-10.

//EJERCICIO 8
/*
Calculadora:
    -Pide dos números en pantalla
    -Si metemos un numero mal, que vuelva a pedir la informacion
    -Que nos muestre el resultado en el cuerpo de la pagia, en una alaerta y en la consola el resultado
    -Que cumpla con sumar, restar, multiplicar y dividir 
*/

while(isNaN(numero1) || isNaN(numero2) ||isNaN(accion)){                      //Cicla hasta que se introduzca un número
    var accion = Number(prompt("Selecciona una accion:\n1. Suma  \n2. Resta   \n3. Multiplicacion   \n4. Division"))
    var numero1 = Number(prompt("Ingresa un numero"), 0)
    var numero2 = Number(prompt("Ingresa otro numero"), 0)
}                       
 
var operation = 0        //Creación de variable para operacion

switch(accion){          //Segun el numero elegido por el usuario entra a un case donde se hace la operacion y se escribe el tipo de operacion
    case 1:
        document.write("CALCULADORA --> Suma: El resultado de " + numero1 + "+" + numero2 + "<br/>")
        operation = numero1 + numero2
    break
    case 2:
        document.write("CALCULADORA --> Resta: El resultado de " + numero1 + "-" + numero2 + "<br/>")
        operation = numero1 - numero2
    break
    case 3:
        document.write("CALCULADORA --> Multiplicacion: El resultado de " + numero1 + "x" + numero2 + "<br/>")
        operation = numero1 * numero2
    break
    case 4:
        document.write("CALCULADORA --> Division: El resultado de " + numero1 + "/" + numero2 + "<br/>")
        operation = numero1 / numero2
    break
    default:
        alert("Se ingresaron mal los datos, volver a refreshear")
    break
}

if(accion == 1 || accion == 2 || accion == 3 || accion == 4){     //Funciona solo si se llego a usar una accion
    alert(operation)
    console.log(operation)
    document.write("El resultado de la operacion es: " + operation)
}else{alert("No se ingreso ninguna accion")}                      //Despliega que on se realizó ninguna accion
alert(operation)

