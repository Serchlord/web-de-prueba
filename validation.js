$(document).ready(function() {

    form1 = document.getElementById("info")


//var form = document.querySelector("#info")
 nombreCompleto = document.getElementById("nombreCompleto")
 email = document.getElementById("exampleInputEmail1")

form1.addEventListener("submit", event => {
    event.preventDefault()
    if(email.value == "" || nombreCompleto.value == ""){
    
        console.log("Un campo está vacío!")
    } else {
        console.log("Funciona")
    }
    
})
 });
