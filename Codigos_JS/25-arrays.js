'use script'

// ARRAYS (Arreglos o matrices)

//Existen las matrices dentro de la programación, que nos permite almacenar información en una segmentación de información, conteniendo varios datos. Cada array o matriz, tiene sus propios índices que nos permiten manipular y movernos a través del arreglo, estos empiezan en 0 y de ahí va aumentando sucesivamente.

var nombre = "Peter Parker"                                                                //Definir variable con un solo dato
var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", "Jose Martin", 54, true]    //Definir una variable con una matriz/array

var lenguaje = new Array("PHP", "Python", "JS", "Java")  //Otro forma de definir arrays 
              //índices    0        1       2      3

console.log(nombres)
console.log(lenguaje[2])         //Muestra JS


/*Ejemplo con input
var elemento = parseInt(prompt("Que elemento del array quieres?", 0));     //Pregunta por el array que quieres
    
if(elemento >= nombre.length){                                             //Si es mayor o igual alvalor del array, el indice se sobrepaso
    alert("Introduce un numero menor que: " + nombre.length )
}else{
    alert("El ususario seleccionado es " + nombres[elemento])              //Aparece el valor del índice indicado
}                   */



/*Recorrer el array e imprimir   
document.write("<h1>Lenguajes de progamacion de 2008:</h1>")
document.write("<ul>")
for(var i = 0; i<lenguaje.length; i++){                           //Se crea un for para que el idice escale de 0-3, no se incluye 4 y acaba en 3
    document.write("<li>El lenguaje: " + lenguaje[i] + "</li>")       //Escribe el cada valor del array ciclando
}
document.write("</ul>")    */



//Recorrer el array con ForEach
document.write("<ul>")
lenguaje.forEach((elemento, indice) => {            //El primer valor es el contenido, el segundo es indice, el tercero muestra los datos
    document.write("<li>" + "Indice " + indice + " - "+ elemento + "</li>")
});
document.write("</ul>")

//VARIABLE.forEach((elemento, indice, array)=> { INSTRUCCIONES})


//Recorrer el array con ForIn
document.write("<ul>")
for (let leng in lenguaje){                 //Donde lenguaje se define como el indice i
    document.write("<li>" + lenguaje[leng] + "</li>")  //Escribe en el documento el array desglosado
}
document.write("</ul>")

//Busquedas en un array

var busqueda = lenguaje.find((leng) => leng == "PHP")   //Funcion callback de flecha que revisa en lenguaje si el leng existe en todo el array
var busquedaIndex = lenguaje.findIndex((leng) => leng == "PHP")    
document.write("<br>" + busquedaIndex +"-"+ busqueda)

//Metodo some
var precios = [10,20,50,80,12];
var busqueda2 = precios.some((num) => num >= 100)
console.log(busqueda2)
