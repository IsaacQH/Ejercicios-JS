'use strict'

//ARRAYS MULTIDIMENSIONALES

//Son los arrays que existen dentro de otros arrays.

var categorias = ["Accion", "Terror", "Comedia"];                           //Creamos un array normal
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];     //Creamos un array normal

var cine = [categorias, peliculas];                                          //Array con dos arrays

//console.log(cine[0][1])                                                  //Accendiendo a Terror desde array cine
//------------------------------------------------------------------------------------------------------------------------------
//INTRODUCIR ELEMENTOS AL ARRAY HASTA QUE SE INDIQUE CON DONE
peliculas.push("Interestelar");                        //Añade un elemento al ifnal de la lista
console.log(peliculas);                                //peliculas = ["La verdad duele", "La vida es bella", "Gran torino", "Interestelar"]
do{
    var elemento = prompt("Introduce categorias de peliculas");
    categorias.push(elemento);
} while(elemento != "done"); 

//------------------------------------------------------------------------------------------------------------------------------/
//ELIMINAR EL ULTIMO ELEMENTO DEL ARRAY Y DEFINIR NUEVOS VALORES EN ELEMENTOS
categorias.pop();                                      //Elimina el último elemento del array       
//categorias[0] = undefined;                           //Setea el valor 0 dec ategorias en undefined
//console.log(categorias);

//------------------------------------------------------------------------------------------------------------------------------/
//BORRAR UN ELEMENTO EN ESPECÍFICO
var indice = peliculas.indexOf("La vida es bella");      //Busca el indice donde este lo escrito
console.log(indice);                                     //Muestra el indice
if(indice > -1);{                                        //Revisa que el índice exista
    peliculas.splice(indice,1);                          //Splice nos permite borrar elementos desde el indice indicado hasta x numero
};
console.log(peliculas);

//------------------------------------------------------------------------------------------------------------------------------/
//SPLIT
var peli_str = peliculas.join();
console.log(peli_str);

//------------------------------------------------------------------------------------------------------------------------------/
//SORT Y REVERSE

peliculas.sort()           //Nos permite ordenar el array
peliculas.reverse()        //Nos permite invertir el array
console.log(peliculas)
