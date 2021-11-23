$(document).ready(function(){
    
    //Función de validación de correo de la ulpgc
    $("#botonLogin").click(function () { 
        var regex = /^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$"/;
        if(regex.test($("#correoValido").val().trim())){
            alert("Correo válido.")
        }else{
            alert("El correo tiene que ser de la ulpgc.")
        }
    });

});