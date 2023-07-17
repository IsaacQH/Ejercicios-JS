
'use strict'  //Se activa modo estricto

// alert("Si funciona")          //Alert para ver que funcione


//****************************************************************************************
// OPERADORES
//Los operadores en un lenguaje de programación funcionan igual que un operador matemático 

var num1 = 71;
var num2 = 12;
var resultadoSuma = num1 + num2;         // se declara la variable que nos da el valor de la suma

alert("El resultado es: " + resultadoSuma);  //Aparece un alert con resultado
//Funciona igual para resta ( - ), multiplicación ( * ), división ( / ), módulo ( % ). Estos son los operadores aritméticos básicos.
//******************************************************


//****************************************************************************************
//TIPOS DE DATOS
//Existen diferentes tipos de datos para declarar variables u obtener respuestas

var numInt = 44;                    //Número entero (int)
var cadenaTxt = "Hola que tal";     //Cadena de caracteres (string)
var booleano = true;                //Valor booleano T/F  (boolean)

//Cuando sumamos un str con un valor numérico, lo que obtenemos es una concatenación
var numTxt = "10"                       //Declaración de variable ent texto
console.log(Number(numTxt) + numInt);   //La funcion number() cambia txt a numero
console.log(NumTxt + String(numInt));   //La función String() cambia de numero a txt

console.log(typeof booleano);

//****************************************************************************************