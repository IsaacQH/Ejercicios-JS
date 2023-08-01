'use strict'

//FUNCIONES ANONIMAS

//Funciones que no tienen ningún nombre pero se pueden guardar en una variable.

/*
var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}*/


function sumame(numero1,numero2, sumaYmuestra, sumaPorDos){    //Parámetros de no.1, no.2, funcion de muestra, funcion x2
    var sumar = numero1 + numero2;                             //Se realiza la suma         

    sumaYmuestra(sumar)                                        //Se manda a llamar la función y se incerta el dato de sumar en ella
    sumaPorDos(sumar)                                          //Se madna a llamar la función y se incerta el dato de sumar en ella

    return sumar;                                              //Regresa la suma
}

sumame(5, 7, (dato) => {console.log("La suma es: " + dato)}, function(dato){console.log("La suma por dos: " + dato*2)});

// Se introducen los parámetros de entrada para los numeros de suma. Luego tenemos las funciones definidas, lo qu realizarán y se guardan en las variables de los parámetros sumaYmuestra y sumaPorDos. Se puede usar flecha o llamar la funcion