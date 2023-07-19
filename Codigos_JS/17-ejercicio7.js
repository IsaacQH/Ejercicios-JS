'use strict'

// Se pondrá a prueba todo el conocimiento adquirido desde el las prácticas del 01-10.

//EJERCICIO 7

//Crear la tabla de multiplicar para el número introducido en el prompt.

while(isNaN(number)){
    var number = parseInt(prompt("Introducir número", 0))               //Revisa que el valor sea número, sino vuelve a preguntar
}

document.write("<h1>Tabla del " + number + "</h1>")                    //Encabezado de la tabla
for(var i = 1; i <= 10; i++){                                           //Ciclo de for que cuenta el i como contador del 1-10
    document.write(i + "x" + number + " = " + i*number + "<br/>")      //Se multiplica el numero por 1-10 y lo muestra en la web
}

//Si queremos todas las tablas de multiplicar:

for(var y = 1; y <= 10; y++){
    document.write("<h1>Tabla del " + y + "</h1>")                    //Encabezado de la tabla
    for(var i = 1; i <= 10;i++){                                           //Ciclo de for que cuenta el i como contador del 1-10
        document.write(i + "x" + y + " = " + i*y + "<br/>")      //Se multiplica el numero por 1-10 y lo muestra en la web
    }
}