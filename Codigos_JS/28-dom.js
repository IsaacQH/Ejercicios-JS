'use strict'

//DOM - Document Object Model

//Document Object Model se refiere al árbol de etiquetas que compone una página web, es decir que las etiquetas que utilizamos dentro de html como lo es body, h1, etc. son parte del DOM. Podemos modificar el html de una página utilizando JS, seleccionando diferentes elementos del código y manipularlos sin ningún problema. 

//****************************************************************************************************************************/
//CONSEGUIR ELEMENTOS POR UN ID COMPLETO


//var caja = document.getElementById("micaja").innerHTML          //Accede únicamente al valor o texto que hay dentro del id
var caja = document.getElementById("micaja");                     //Accede a la línea de codigo de div micaja
//var caja = document.querySelector("#micaja");                   //Otra forma de acceder a la línea de codigo de div micaja

caja.innerHTML = "Probando Cambios";                              //Modifica el valor de caja

caja.style.background = "red";                                    //Modifica el color del fondo 
caja.style.color = "white";                                       //Modifica el color de la letra                               
caja.style.padding = "20px";                                      //Modifica el tamaño de el div
caja.className = "Prueba";                                        //Nombra la clase

//console.log(caja);                                                 //Printea en consola caja


function cambioColor(color){
    caja.style.background = color;                                //Función que cambia el color de la letra al pedido por el usuario
}
//****************************************************************************************************************************/
//CONSEGUIR ELEMENTOS POR SU ETIQUETA
var todosLosDiv = document.getElementsByTagName("div");           //Busca todos los div de html y los mete a un array
var contenidoDiv = todosLosDiv[2].textContent;                    //Entra al tercer elemento y guarda el contenido en una variable
todosLosDiv[3].innerHTML = "Modificamos el ultimo div";           //Modifica el div 4
todosLosDiv[1].style.background = "pink";                       //Modifica el background del  div 2  
//console.log(contenidoDiv); 
//console.log(todosLosDiv); 

var section = document.querySelector("#mysection")               //Busca mysection en html y lo guarda como variable
for(var valor in todosLosDiv){    
    if(typeof todosLosDiv[valor].textContent == "string" ){      //Comprueba que solo sean strings para no meter datos no deseados
        var parrafo = document.createElement("p");               //Para cada uno crear variable con un <p> parrafo
        var texto = document.createTextNode(todosLosDiv[valor].textContent);      //Para cada uno crear variable con texto del valor de los div
        //parrafo.appendChild(texto);                            //Mete el texto en el párrafo
        //document.querySelector("#mysection").append(parrafo)   //mete todos los parrafos en la seccion mysection 
        parrafo.append(texto);
        section.append(parrafo);
    }
}

var hrr = document.createElement("hr")                            //creamos un hr para dividir
section.append(hrr)                                               //Lo añadimos en la página


//****************************************************************************************************************************/
//CONSEGUIR ELEMENTOS POR SU CLASE   => CSS

var divRojos = document.getElementsByClassName("rojo");         //Guarda en una variable los div rojos (TODO EL DIV)
var divAmarillos = document.getElementsByClassName("amarillo");      //Otra forma de guardar elementos, en este caso div amarillos

console.log(divRojos);
console.log(divAmarillos);
for(let divR in divRojos){                                          //recorre con divR cada indice de divRojos
    if(typeof divRojos[divR].textContent == "string")               //Revisa que el contenido sea texto para que solo cambie los div 
    divRojos[divR].style.color = "red";                             //cambia de color cada indice a rojo
}       
for(let divY in divAmarillos){                                     //Lo mismo para el amarillo
    if(typeof divRojos[divY].textContent == "string")              //También podemos comparar con  divRojos[divY].className = "amarillo"
    divAmarillos[divY].style.color = "yellow";
} 
//divAmarillos[0].style.color = "yellow";

//QUERY SELECTOR
var encabezado = document.querySelector("#encabezado")
console.log(encabezado.textContent)