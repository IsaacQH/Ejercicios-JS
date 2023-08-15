'use strict'

//FECHAS EN JS

//Podemos trabajar con fechas y funciones matematicas dentro de javascript. Se utilizan métodos y funciones preestablecidas

addEventListener('load', () => {
    
    //Método Date()
    var fecha = new Date()                 //Se crea variable fecha con funcion new Date()

    var year = fecha.getFullYear()         //Accede a variable fecha que guarda un date y con el metodo getFullYear() obtenemos el año
    var mes = Number(fecha.getMonth())     //Accede a variable fecha que guarda un date y con el metodo getMonth() obtenemos el mes
    var dia = fecha.getDate()              //Accede a variable fecha que guarda un date y con el metodo getDate() obtenemos el dia
    var hora = fecha.getHours()            //Accede a variable fecha que guarda un date y con el metodo getHour() obtenemos la hora

    var textoHora = `                  
        El año es: ${year}
        El mes es: ${mes+1}
        El día es: ${dia}
        La hora es: ${hora}`                        
    //Creamos plantilla de texto en variable textoHora y se interpola year, mes (se suma 1 porque cuenta desde cero), dia     
    
    console.log(textoHora)             //Se imprime variable fecha

    console.log(Math.ceil(Math.random()*10))

})