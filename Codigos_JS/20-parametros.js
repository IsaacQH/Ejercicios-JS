'use strict'

//PARAMETROS DE FUNCIONES

//Cuando llamamos a una función, normalmente lo que hacemos es escribir los parámetros que leera y proceara la funcion. Así como lo vimos, podemos mandar a llamar los marámetros, declararlos antes o tambien los llamados REST Y SPREAD.
//***********************************************************************

//Rest: Cuando mandamos a llamar una función y esta tiene un límite, normalmente mandara error. Para evitar esto debemos de utilizar el modo de reast en los parámetros

function listadoFrutas(fruta1, fruta2, ...restofrutas){               //Se ponen los 3 puntos para tomar más datos en un array
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log(restofrutas);
}

listadoFrutas("naranja", "manzana", "sandia", "melon", "durazno");

//Spread: Nos permite que si ingresamos un array o varios datos en una función, este pueda dividirlos y no tomarlos todos como el primer parámetro.

var frutas = ["naranja", "manazana"];
listadoFrutas(...frutas, "sandia", "melon", "durazno");               //Hace el spread para que se tome cada daro del array