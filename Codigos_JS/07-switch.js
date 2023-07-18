'use strict'     //modo estricto

/*
CONDICIONAL SWITCH
    Podemos comprobar muchos casos utilizando los conditional switch para evitar utilizar demasiados ifs.

Operadores relacionales:
    Mayor:            >
    Menor:           <
    Igual            ==
    Mayor o igual:   >=
    Mayor o igual:   <=
    Diferente de:    !=

Operadores lógicos
        AND:   &&
        OR:    ||
        NOT:   !

*/

var edad = 18;
var imprime = ""

switch(edad){                                        //Se inicia el switch y se menicona la variable a analizar
    case edad = 18:                                         //Se crea el caso si edad = 18
        imprime = "Acabas de cumplir 18";
    break                                           //Se cierra ciclo
    case 28:                                        //Se crea el caso si edad = 28
        imprime = "Acabas de cumplir 28";
    break;                                           //Se cierra ciclo
    case 38:                                        //Se crea el caso si edad = 38
        imprime = "Acabas de cumplir 38";
    break;                                           //Se cierra ciclo
    default:                                        //Se establece el valor default si no entra a ningun caso
        imprime = "Tu edad no es reconocida";
    break;
}
console.log(imprime)