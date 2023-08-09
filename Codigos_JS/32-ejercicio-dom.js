'use strict'                                    //Modo estricto activado

/*
Ejercicio de DOM, Eventos y funciones
1. Formulario campos: Nombre, apellidos y edad
2. Boton de enviar formulario: evento submit
3. Mostrar esos datos por pantalla                                     */

window.addEventListener('load', () =>{                                                        //Evento load para cargar
    console.log("DOM cargado!");                                                              //Muestra en consola que load cargo el DOM

    var forms = document.querySelector("#forms");                                             //Guarda el forms de html en una variable
    var boxDashed = document.querySelector(".dashed")                                         //Guarda la clase dashed en variable

    boxDashed.style.display = "none"                                                          //Hace que boxDashed no aparezca en pantalla

    forms.addEventListener("submit", () => {                                                  //Evento submit
        console.log("Evento submit capturado")

        var nombre = document.querySelector("#nombre").value                                  //Guarda el input nombre en variable nombre
        var apellido = document.querySelector("#apellido").value                              //Guarda el input apellido en variable apellido
        var edad = parseInt(document.querySelector("#edad").value)                            //Guarda el input edad en variable edad como no.


        if(nombre.trim() == null || nombre.trim().length == 0){                              //Validacion dato. Trim quita espacios blancos. 
            alert("Nombre no es valido")                                                     //Alerta de nombre no es valido
            document.querySelector("#errorNombre").innerHTML = "Nombre invalido."            //Escribe en span 
            return false                                                                     //impide ejecutar
        }else{document.querySelector("#errorNombre").style.display = "none"}                 //esconde el display

        if(apellido.trim() == null || apellido.trim().length == 0){                          //Validacion dato. Trim quita espacios blancos. 
            alert("Apellido no es valido")                                                   //Alerta de apellido no es valido
            document.querySelector("#errorApellido").innerHTML = "Apellido invalido."        //Escribe en span 
            return false                                                                     //impide ejecutar
        }else{document.querySelector("#errorApellido").style.display = "none"}               //esconde el display             
                                     //isNaN(edad) == true
        if(edad == null || edad <= 0 || isNaN(edad)){                                        //Validacion dato. Trim quita espacios blancos. 
            alert("Edad no es valido")                                                       //Alerta de edad no es valido
            document.querySelector("#errorEdad").innerHTML = "Edad invalido."                //Escribe en span 
            return false                                                                     //impide ejecutar
        }else{document.querySelector("#errorEdad").style.display = "none"}                   //esconde el display

        console.log(nombre, apellido, edad)

        boxDashed.style.display = "block"                                                    //Hace que boxDashed aparezca en pantalla

        /*Una forma de meter todo a la caja  
        var parrafo = document.createElement("p")                                            //Crea el elemento parrafo en html
        parrafo.append(nombre)                                                               //Agrega a al parrafo la nombre
        parrafo.append(apellido)                                                             //Agrega a al parrafo la apellido
        parrafo.append(edad)                                                                 //Agrega a al parrafo la edad
        boxDashed.append(parrafo)                                                            //Agrega el elemento parrago a la caja boxDashed

        /*Otra forma:           
        var datosUsuario = [nombre, apellido, edad]                                          //Se crea array con datos

        for(let datos in datosUsuario){
            var parrafo = document.createElement("p")                                        //Crea el elemento parrafo en html
            var saltoLinea = document.createElement("hr")                                    //Crea el elemento parrafo en html
            parrafo.append(datosUsuario[datos])                                              //Hace apend en cada dato del array
            boxDashed.append(parrafo, saltoLinea)                                            //Agrega el elemento parrafo a la caja boxDashed
        }                                                */ 

        /*Otra forma:                                    */
        var parrafoNombre = document.querySelector("#parrafoNombre span")                         //Variable busca id parrafoNmobre con span
        var parrafoApellido = document.querySelector("#parrafoApellido span")                     //Variable busca id parrafoApellido con span
        var parrafoEdad = document.querySelector("#parrafoEdad span")                             //Variable busca id parrafoEdad con span

        parrafoNombre.append(nombre)                                                              //Agrega nombre a variable parrafoNombre
        parrafoApellido.append(apellido)                                                          //Agrega nombre a variable parrafoApellido
        parrafoEdad.append(edad)                                                                  //Agrega nombre a variable parrafoEdad

    });

})                                                                                            //Fin del load 
