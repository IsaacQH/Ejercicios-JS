'use strict'

//FUNCIONES

//Una función es una una agrupación reutilizable de un conjunto de instrucciones. Cada lenguaje cuenta con algunas predefinidas o es posible crear la que nosotros queramos.

function porConsola(number1, number2){
    console.log("Suma: " + (number1 + number2));     //Nos pone en consola al llamar a la funcion
    console.log("Resta: " +  + (number1 - number2));
    console.log("Multiplicacion: " + (number1 * number2));
    console.log("Division: " + (number1 / number2));
    console.log(mostrar)
    console.log("************************")
}

function porPantalla(number1, number2){
    document.write("Suma: " + (number1 + number2) + "<br/>");     //Nos pone en consola al llamar a la funcion
    document.write("Resta: " +  + (number1 - number2) + "<br/>");
    document.write("Multiplicacion: " + (number1 * number2) + "<br/>");
    document.write("Division: " + (number1 / number2) + "<br/>");
    document.write("Valos de mostrar: " + mostrar + "<br/>")
    document.write("************************" + "<br/>")
}

function calculadora(number1, number2, mostrar = false){              //Definimos la funcion

  if(mostrar == false){
    porConsola(number1, number2)
  }else{
    porPantalla(number1, number2)
  }

    return true               //Devuelve el string como salida
} 

calculadora(5,5, true);                                  //Llamar a la función con parámetros
