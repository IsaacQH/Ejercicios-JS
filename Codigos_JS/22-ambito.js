'use strict'

//  AMBITOS

// Existen distintos ambitos de variables, las locales y globales


function holaMundo(texto){
    var hola_mundo = "Variable interna de la funcion"   //Variable local que solo funciona dentro
    
    console.log(hola_mundo);
    console.log(texto,toString());                     // typeof texto,toString()      ===   string
    console.log(numero);
}

var numero = 12;                                         //Variable global que no se define como parámetro pero por fuera si
var texto = "Hola mundo soy una variable global";        //Variable global que se define y luego se manda a llamar   

holaMundo(texto)                                         //Llamar función