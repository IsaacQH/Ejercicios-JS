'use strict'


//EJERCICIO DE ARRAYS
/*
1. Pida 6 números por pantalla y los meta a un array
2. Mostrar todos los elementos del array en el cuerpo de la página y en la consola
3. Sacar el array ordenado
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario y que nos diga si esta en el array y su indice.         */

var arreglo = []                                                                  //Creamos el array vacio
//   1.           *************************************************************************************************************************
do{                                                                               //Iniciamos la estructura de control doWhile
    var respuesta = Number(prompt("Introduce un valor para el Array:",0))         //Pregunta por un valor y lo convierte en número, deft 0
    arreglo.push(respuesta)                                                       //Lo agrega al array
}while(arreglo.length < 6)                                                        //Se detiene cuando hay 6 números, podemos usar <=6
                                                                                  
//   2.           *************************************************************************************************************************
//Funcion para mostrar los números por separado
function mostrarNum(arr, texto = "") {                                            //Funcion, con parámetros arrey y texto (prestetablecido)
    document.write("<hr/>")                                                       //Dibuja una linea en pagina
    document.write("<h2>Los numeros del array "+ texto + "son:</h2>")             //Encabezado   
    document.write("<ul>")                                                        //Lista desordenada
    arr.forEach(num => {                                                          //forEach usando función flecha
        document.write("<li><strong>"+num+"</strong></li>")                       //Para cada valor del array, printea en pantalla
    });
    document.write("</ul>")                                                       //Cierra lista desordenada

}

console.log(arreglo)                                                              //Imprime en consola el arreglo
mostrarNum(arreglo)                                                               //Llama función mostrarNum y se dan parametros
document.write("<h3>El Array introducido es: [" + arreglo + "]</h3>")             //Escribe en un encabezado h3, el arreglo

//   3.           *************************************************************************************************************************
//Podemos ordenar con un simple sort() o como se hace a continuación usando un callback
var arrayOrdenado = arreglo.sort((a,b) => a-b)                                    //Otra forma de invertir arreglo.sort((a,b) => b-a) 
console.log(arrayOrdenado)                                                        //Se imprime en consola el array ordenado
mostrarNum(arreglo, "ordenado ")                                                  //Llama función mostrarNum y se dan parametros
document.write("<h3>El Array ordenado es: [" + arrayOrdenado + "]</h3>")          //Se imprime el array ordenado

/*   SORTING CON CODIGO
for(var i = 1; i<arreglo.length; i++){                                            //Se crea el indice que recorre desde el 1 y va sumando
    var j = i-1                                                                   //Se indica el comiendo del indice 2 un lugar atrás del 1
    var temporal = arreglo[i]                                                     //Se crea una variable temporal para guardar valor de i
    while(j>=0 && arreglo[j] > temporal){                                         //Se crea un ciclo que reipide hasta que j no pueda comparar
        arreglo[j+1] = arreglo[j]                                                 //Se hace un swap del valor proximo de j por j
        j--                                                                       //Se resta j
    }
    arreglo[j+1] = temporal                                                       //Se actualiza el valor pxóximo de j por la variable temporal
}
document.write("<h3>El Array ordenado es: [" + arreglo + "]</h3>")                //Se imprime el array ordenado
console.log(arreglo)                                                   */

//   4.           *************************************************************************************************************************
var descendente = []                                                              //Se crea la matriz vacia
for(var i = arreglo.length-1; i>=0; i--){                                         //For que inicia con el últio valor de arreglo y termina en 0
    descendente.push(arreglo[i])                                                  //Ingresa los valores a la nueva matriz y deciende el valor i
}
console.log(descendente)                                                          //Imprime el valor descendene en consola   
mostrarNum(arreglo, "invertido ")                                                 //Llama función mostrarNum y se dan parametros
document.write("<h3>El Array invertido es: [" + descendente + "]</h3>")           //Imprime el valor descendene en documento
//console.log(arreglo.reverse())                                                  //Imprime la función que invierte un array

//   5.           *************************************************************************************************************************
var longitud = descendente.length                                                 //Longitud del array
console.log(longitud)                                                             //Muestra longitud en consola
document.write("<h3>El tamano del array es: " + longitud + "</h3>")               //Escribe en pagina

//   6.           *************************************************************************************************************************

do{
    var busqueda = Number(prompt("Introduce el numero que quieres buscar:",0))       //Se pregunta que valor buscar, deft 0
    var searching = descendente.find(elemento => elemento == busqueda)               //Callback de find para encontrar valor en arr desdendente
    var searchingIndex = descendente.findIndex(index => index == busqueda)           //Callback de find para encontrar indice en arr desdendente
    document.write("<h3>INDICE: " + searchingIndex +"   =>   VALOR: "+ searching +"</h3>")
    //console.log(searching)//console.log(searchingIndex)
 }while((searching == undefined) || (searchingIndex ==-1))                           //Repite proceso si los find mandan error



