'use strict'

//BROWSER OBJECT MODEL (BOM) 

//Se refiere a la forma de trabajar con los elementos que el navegador nos permiten trabajar sobre el.

console.log(window.innerHeight)                   //Accede a la ventana y muestra el tamaño de la ventana en altura en px
console.log(window.innerWidth)                    //Accede a la ventana y muestra el tamaño de la ventana en anchura en px

function getDimension(){                          //Funcion que se manda a llamar para revisar el tamaño de la pantalla del navegador
    console.log(screen.innerHeight)               //Accede a la pantalla y muestra la altura en px
    console.log(screen.innerWidth)                //Accede a la pantalla y muestra la anchura en px
    console.log(window.location)                  //Accede a la ventana y nos dice el URL actual
}

function redirect(url){                          //Función para redirigirnos de ventana
    window.location.href = url                   //Si al llamar a la función ponemos un url (google.com) nos llevará a esa página
}

function abrirVentana(url){                     //Función para abrir una ventana nueva con redireccion de pagina
    window.open(url,"100px", "100px")           //Con open abrimos una ventana nueva, de tamaño 100px, 100px
}                                               //Podemos modificar su tamaño
