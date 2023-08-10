'use strict'

//LOCAL STORAGE

//Podemos guardar informacion en nuestro navegador web a modo de sesion y que esta infocmación persista mienstras uno navega.

window.addEventListener("load", () => {                                                     //Abre el load
    //Comprobar que Local Storage exista
    if(typeof(Storage) !== 'undefined'){                                                    //Condicional que revisa si Storage no es undefined
        console.log("Local Storage disponible.")                                            //Si no es undefined, imprime que esta dispoible
    }else{console.log("Local Storage no disponible.")}                                      //Si es undefined, no esta dispoible

    //Guardar datos:       localStorage.setItem(key, value)
    localStorage.setItem("titulo", "Probando Local Storage: ")                      

    //Recuperar elemento y cambiar el texto del encabezado "peliculas":
    //localStorage.getItem("titulo")
    document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo")

    //Guardar objetos JSON:
    var usuario = {                                                                         //Creamos objeto JSON  
        nombre: "Isaac",
        email:"isaac123@gmail.com",
        web: "http//:isaac123.com"}
                         
                        //Método stringify= convierte a string el objeto JSON
    localStorage.setItem("usuario", JSON.stringify(usuario))                                //Se guarda la variable en la web correctemnte

    //Recuperar objetos JSON:
    var usser = JSON.parse(localStorage.getItem("usuario"))                                 //Método parse de JSON que permite guardar en array
    console.log(usser)                                                                      //Console log de usser

    document.querySelector("#datos").append(usser.web + " - " + usser.nombre)               //Agrega a peliculas en texto la web y nombre

    //Eliminar de Local Storage
    localStorage.removeItem("usuario")                                                      //De forma individual con método removeItem(key)
    localStorage.clear()                                                                    //Limpieza total con clear()

});                                                                                         //Cierra el load