'use strict'

//EJERCICIO DE LOCAL STORAGE

//Un formulario que nos permita añadir películas

window.addEventListener("load", () => {                                   //Iniciamos el load
    
    //Añadir pelicula
    var forms = document.querySelector("#formPeliculas");                 //Guarda etiqueta form Peliculas en variable forms

    forms.addEventListener("submit", () => {                              //Crea el evento submit al formulario Peliculas
        console.log("Se ha realizado un submit.");
        var movie = document.querySelector("#addPelicula").value;         //Guarda el valor introducido en input addPelicula

        if(movie.length >= 1){                                            //Comprueba que se haya colocado un dato válido
            localStorage.setItem(movie,movie)};                           //Guarda movie, el valor del input, en local storage 
    });

    for(let indice in localStorage){                                      //Recorre todos los valores de localStorage

        console.log(localStorage[indice]);                                //Muestra los valores del local storage

        if(typeof localStorage[indice] == "string"){                      //Revisa que solo sean valores válidos como strings
            var lista = document.createElement("li");                     //Crea etiqueta li de lista
            var ul = document.querySelector("#listaPeliculas");           //Crea variable que guarda etiqueta html de ul
            lista.append(localStorage[indice]);                           //Agrega el valor de LocalStorage en la lista
            ul.append(lista);                                             //Agrega el valor de la lista a la  etiqueta lista
        };            
    };

    //Borrar pelicula
    var formsBorrar = document.querySelector("#borrarPelicula");          //Guarda etiqueta form Peliculas en variable formsBorrar

    formsBorrar.addEventListener("submit", () => {                        //Crea el evento submit al formulario borrarPeliculas

        var borrar = document.querySelector("#borrar").value;             //Guarda el valor introducido en borrarPelicula

        if(borrar.length >= 1){                                           //Comprueba que se haya colocado un dato válido
            localStorage.removeItem(borrar)};                             //Borra movie, el valor del input, en local storage y página
    });
});                                                                       //Cerramos el load

/*MI FORMA DE HACERLO: Tenemos que poner en etiquta forms de html un onsubmite = return false y todo esto debe de estar dentro del submit
        if(movie.trim() == null || movie.trim().length <= 0){              //Condicional que revisa cuando se introdujo un valor erroneo 
            alert("Favor de intentar nuevamente")                          //Muestra alerta
            console.log("No paso")                                         //Comprueba que NO pasara
            return false                                                   //Detiene el código
            
        }else{                                                             //Condicional que revisa cuando se intordujo correctamente
            console.log("Paso")                                            //Comprueba que paso
            localStorage.setItem(movie, movie)}                            //Guarda el valor movie en Local Storage con key y value
         
            var addPelicula = localStorage.getItem(movie)                  //Crea variable que recupera de la memoria el valor movie

            var parrafo = document.createElement("p")                      //Crea un párrafo en variable
            var div = document.querySelector("#peliculas")                 //Guarda en variable el div de peliculas
     
            parrafo.append(addPelicula)                                    //Añade al parrafo el valor de la pelicula
            div.append(parrafo) */                                         //Añade el parrafo al div de peliculas