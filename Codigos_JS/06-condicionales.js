'use strict'     //modo estricto

/*
CONDICIONALES
Nos permiten trabajar con casos para ejecutar operaciones si es que los requisitos previos se cumplen.

Utilizando los operadores  relacionales podemos crear condicionales:
    Mayor:            >
    Menor:           <
    Igual            ==
    Mayor o igual:   >=
    Mayor o igual:   <=
    Diferente de:    !=

//*************************************************************************

Condicional IF                                                       
 */ 

var edad1=28;            
var nombre = "David Perez";

if(edad1 >= 18){ /*Si pasa esto*/
    //Ejecuta esto
    console.log( nombre + " tiene " + String(edad1) + "años, es mayor de edad.");

    if (edad1 < 30 ){
        console.log("Tiene menos de 30 años.");
    }
}
else{ /*Si no*/
    //Ejectua esto
    console.log("El usuario es menor de edad");
}

//*************************************************************************

/*
Condicionales utilizando operadores lógicos

También podemos utilizar los operadores logicos
    AND:   &&
    OR:    ||
    NOT:   !
*/

//Not
var year=2022;
if (year!=2016){console.log("El año no es 2016")}

//And
if (year >= 2000 && year <=2020){console.log("Estamos en la era actual")}
else{console.log("Estamos en otra era")}

//Or
if (year >= 2022 || year <=2018){console.log("Año de mundial")}
else{console.log("Año sin mundial")}






