'use text'

//TRANSFORMACION DE TEXTOS

var numero = 444;
var texto1 = "Bienvenido Isaac";
var texto2 = "Just in TIME";

//var numeroTxt = toString(numero);            //Convierten a texto los numeros
var dato = numero.toString();

texto1 = texto1.toUpperCase();                 //Convierte los str en mayuscula
texto2 = texto2.toLowerCase();                 //Convierte los str en minúscula

console.log(texto2);

//Calcular la longitud de un str

var textoCount = "ho la";              
var textoCount = [1,2];                      
    
console.log(textoCount.length);               //Cuenta los caracteres, incluye espacios

//Concatenar - Unir textos

//var textoFinal = texto1 + texto2;           //Concatenando con +
var textoFinal = texto1.concat(" "+ texto2);  //Concatena los textos y suma un espacio
console.log(textoFinal);

//Busqueda de caracteres
var texto3 = "Hola. ¿Como estas?"          
var busqueda = texto3.indexOf("Como")        //Hace un search y aparece el no. de caracter donde este
console.log(busqueda)

//Match
var texto4 = "Todo lo que esta destinado a pasar, pasara."
var busquedaMatch = texto4.match("pasar")   //Hace un search más ordenado
console.log(busquedaMatch)                  //Si queremos ver más coincidencias /pasar/

//Substr
var busquedaSub = texto3.substr(8,4)        //Se indica que saque desde el caracter 8, 4 adelante  == Como
console.log(busquedaSub)        

//CharAt
var char = texto4.charAt(5)                //Devuelve el caracter posicionado en 5
console.log(char)

//Starts-Ends with
var starts = texto1.startsWith("BIENVENIDO")   //Manda T o F si el str enmipeza con lo indicado
var ends = texto1.endsWith("ISAAC") 
console.log(starts)
console.log(ends)

//Includes
var busquedaIncludes = texto1.includes("ISAAC")   //Manda T o F si existe el str indicado

//Replace
var masMetodos = texto4.replace("Todo", "Todoooo")   //remplaza el valor buscado por el indicado, solo uno
console.log(masMetodos)

//Slice
var texto5 = "Sabor original de Edicion limitada"
var masMetodos1 = texto5.slice(12,14)             //solo el rango de caracteres y elimina los demás
console.log(masMetodos1)

//Split
var masMetodos2 = texto5.split(" ")              //Divide el texto en un array separandolo por los espacios del str
console.log(masMetodos2)

//Trim
var texto6 = "    Gol   "
var masMetodos3 = texto6.trim()                 //Borra los espacios de adelante y atrás del texto
console.log(masMetodos3)





