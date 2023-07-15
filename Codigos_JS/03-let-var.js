
'use strict'         //método strict

//PRUEBA DE VARIABLES VAR Y LET


//Prueba con Var
var numero = 40;             //La variable numero declarada en 40   
console.log(40);             //Nos muestra en consola el valor 40
if(true){
    var numero = 50;         //If que siempre será positivo, entonces el valor debe ser 50
    console.log(numero);    //Nos muestra en consola el valor 50
}

console.log(numero);      //Ahora como se cumplio el if, el valor de numero es 50
//Esto se debe a que la variable numero fue redefinida como 50 y el cambio es global o local, según sea el caso.

//**************************************************/

//Prueba con Let
var texto = "Isaac";       //La variable se decalra como Isaac
console.log(texto);        //Se imprime en la consola Isaac
if(true){            
    let texto = "Yael";   //If siempre positivo, se declara variable let dentro del bloque
    console.log(texto);   //Se imprime Yael en la consola
}
console.log(texto)       //Imprimer en la ocnsola Isaac y no Yael  
//Apesar de ser true y tener texto como yael, por ser un let el valor de texto al salir siempre será Isaac
//ya que let crea variables para bloques donde se este utilzando.