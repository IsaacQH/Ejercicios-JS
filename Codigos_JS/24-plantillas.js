'use strict'

//PLANTILLAS DE TEXTO

var nombre = prompt("Mete tu nombre")             //permite introducir en ventana emergente el dato nombre
var apellidos = prompt("Mete tus apellidos")      //permite introducir en ventana emergente el dato apellido

//var texto = "Mi nombre es: " + nombre + ".<br>  Mis apellidos son: "+ apellidos   // Crea variable texto y concatemamos

var texto =                                       //Para crer plantillas usamos la comilla invertida (Alt + 9 -> 6) ``
`                                     
    <h1>Hola que tal</h1>
    <h2>Mi nombre es: ${nombre} </h3>
    <h2>Mis apellidos son: ${apellidos}.</h3>
`

document.write(texto)                            //Escribe en documento web 

