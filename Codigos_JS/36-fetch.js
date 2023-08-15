'use strict'

//FETCH (AJAX) y peticiones a servicios/apis rest

//Fetch es un método que nos permite hacer peticiones a un backend. Podemos  utilizar el método fetch para hacer estas peticiones de servicios a APIS externos para obtener un resultado. Utilizamos la página de prueba de https://jsonplaceholder.typicode.com/ 


addEventListener('load', () => { 
    var div = document.querySelector("#usuarios")                 //Guarda en variable el div usuarios
    var div2 = document.querySelector("#user")                    //Guarda en variable el div user  
    var div3 = document.querySelector("#new")                     //Guarda en variable el div new

    //Automatiando proceso fetch *************************************************************************************************************
    listUserFetch()                                               //Manda a llamar la funcion del fetch con URL
        .then(data => data.json())                                //Promesa que lee la información y cada dato lo convierte en json
        .then(users => {                                          //Iniciando promesa promesa                  
            listUsers(users.data)                                 //Se manda a llamar la función con array usuarios de json fetch
            return getInfo()                                      //Ejecuta función de GetInfo() para encadenar fetchs
        })
        .then(data => {
            console.log(data)

            div3.innerHTML = data                                //Cambia el txt del div a el valor de data despues de ejecurar la promesa

            return singleUserFetch()                              //Al terminar la promesa, regresa la función para encadenar fetchs
        })
        .then(data => data.json())                                //Promesa que usara funcion singleUserFetch() y guardara valores en json
        .then(user => {                                           //Iniciamos promesa
            listUser(user.data)                                   //Mandamos a llamar funcion 

        })
        .catch(error => {
            console.log(error)
            alert("Error en las peticiones")
        })
        

    //Funciones para llamar fetch *************************************************************************************************************
    function listUserFetch(){                                      //Funcion de fetch de lista de usuarios 
        return fetch('https://reqres.in/api/users?page=2')         //URL de fake API usuarios
    }
    function singleUserFetch(){                                    //Funcion de fetch de un solo ususaio    
        return fetch('https://reqres.in/api/users/2')              //URL de fake API usuario individual
    }


    //Funciones para enlistar y añadir usuarios ************************************************************************************************
    function listUsers(usuarios){                                  //Se crea una función que introduce el array de lista de usuarios
        usuarios.map((user,i) => {                                 //Iterador map que tiene como input el valor (sin poner user[i] y el indice
            let listado = document.createElement("h4")             //Crea encabezados h4
            listado.innerHTML = i + ": " + user.first_name + " " + user.last_name     //Escribe en encabezado el indice, el nombre y el apellido
                                                                
            div.appendChild(listado)                               //Añade el encabezado listado al div
    
            document.querySelector(".load").style.display = "none" //Quita el span de Cargando...  
        })
    }
    function listUser(user){                                       //Se crea una función que introduce el array de lista de usuarios
            let listado = document.createElement("h4")             //Crea encabezados h4
            let image = document.createElement("img")              //Crea etiqueta img
            
            listado.innerHTML = user.first_name + " " + user.last_name    //Escribe en encabezado el indice, el nombre y el apellido
            image.src = user.avatar                                //Añade a etiquet aimagen el src desde los datos de usuario.avatar
            image.width = "100"                                    //Se modifica el tamaño de image

            div2.appendChild(listado)                               //Añade el encabezado listado al div
            div2.appendChild(image)                                 //Añade la imagen listado al div
    
            document.querySelector(".load2").style.display = "none"  //Quita el span de Cargando...  
        }
    })

    //Funciones para crear promesas *****************************************************************************************************
    function getInfo(){
        
        var nuevoUsuario = {                                          //crea objeto JSON
            nombre: "Victor",
            apellidos: "Robles",
            url: "https://prueba.site.com"
        }
        return new Promise((resuelto, error) => {
            var jsonString = ""                                       //Crea variable vacia
            setTimeout(() => {                                        //Timer de 3 segundos para empezar la promesa
                jsonString = JSON.stringify(nuevoUsuario)             //La promesa crea string del JSON de nuevoUsiario
            
                if(typeof jsonString != "string" || jsonString == "") return error("error")   //Condicional si es tipo string o no, sino manda error
            
                return resuelto(jsonString)                           //Si todo sale bien, ejecuta y devuelve el resultado en str
            }, 3000)
        })
}