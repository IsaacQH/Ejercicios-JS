'use strict'                                                                           //Uso estricto

//JavaScript Object Notation JSON

//Es un método basado en texto de representar datos de objetos literales , matrices y datos escalares de JavaScript. JSON es relativamente fácil de leer y escribir, y también permite que el software se analice y genere con facilidad. Nos permite crear array asociativos.

window.addEventListener("load", () =>{                                                 //Abre el load

var pelicula = {                                                                       //Creacion de variable con estructura JSON
    titulo: "Interestelar",                                                            //Def de atributos
    year: 2014,                                                                        //Def de atributos
    pais: "Estados unidos"                                                             //Def de atributos
}

console.log(pelicula.titulo)                                                          //Imprime en consola el parámetro titulo de var pelicula

pelicula.year = 2018                                                                  //Modifica el parámetro year
console.log(pelicula.year)                                                            //Imprime en consola el parámetro year de var pelicula

var peliculas = [
    {titulo: "Batman", year: 1998, pais: "USA"},
    {titulo: "Superman", year: 2018, pais: "USA"},
    {titulo: "Flash", year: 2023, pais: "USA"},
    pelicula
]

console.log(peliculas) 

var boxPelicula = document.querySelector("#peliculas")                              //Guarda en variavle boxPelicula el div de peliculas

for(let peli in peliculas){                                                        //Accedemos a cada elemento del array peliculas
    var parrafo = document.createElement("p")                                      //Creamos una etiqueta parrafo y la guardamos como variable
    var movie = peliculas[peli].titulo                                             //Creamos una variable que acceda a cada elemento de titulo
    parrafo.append(movie)                                                          //Agregamos la pelicula a movie
    boxPelicula.append(parrafo)                                                    //Agregamos parrafo al div boxPelicula
}
})                                                                                     //Cierra el load