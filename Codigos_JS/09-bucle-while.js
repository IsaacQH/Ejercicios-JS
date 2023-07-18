'use strict'

//Un bucle es una estructura de control que se repite varias veces.
//**********************************************************************************************************/
//BUCLE WHILE: Crearemos un bucle que cuente del 0 al 100
var year = 2000;

while(year<= 2012){                                                 //Se inicializa el while con la condición
    console.log("Aún no se acaba el mundo, es el año" + year);      //Se imprime en la consola el txt
    year++;                                                         //Se incrementa el año +1
}
//**********************************************************************************************************/
//BUCLE DO  WHILE:
var age = 4;
do{
    console.log("Aún eres menor de edad porque tienes " + age + " años.")
    age++;
    if(age == 15){
        console.log("No olvides hacer tus 15 años!!!");
        break;
    }
}while(age <= 18)